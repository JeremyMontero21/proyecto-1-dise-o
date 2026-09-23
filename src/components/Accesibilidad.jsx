import { useEffect, useRef, useState } from 'react'

const opciones = [
  { id: 'texto-grande', icono: 'A+', etiqueta: 'Aumentar el tamaño del texto' },
  { id: 'texto-pequeno', icono: 'A-', etiqueta: 'Disminuir el tamaño del texto' },
  { id: 'espaciado-grande', icono: '↕', etiqueta: 'Aumentar el espaciado del texto' },
  { id: 'espaciado-pequeno', icono: '↔', etiqueta: 'Disminuir el espaciado del texto' },
  { id: 'invertir', icono: '◐', etiqueta: 'Invertir colores' },
  { id: 'grises', icono: '◑', etiqueta: 'Tonos grises' },
  { id: 'subrayar', icono: 'U', etiqueta: 'Subrayar enlaces' },
  { id: 'cursor', icono: '↖', etiqueta: 'Cursor grande' },
  { id: 'guia', icono: '↔', etiqueta: 'Guía de lectura' },
]

export default function Accesibilidad() {
  const [abierto, setAbierto] = useState(false)
  const [activos, setActivos] = useState([])
  const [hablando, setHablando] = useState(false)
  const [escuchando, setEscuchando] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const reconocimiento = useRef(null)

  useEffect(() => {
    document.documentElement.classList.toggle('accesibilidad--grande', activos.includes('texto-grande'))
    document.documentElement.classList.toggle('accesibilidad--pequeno', activos.includes('texto-pequeno'))
    document.documentElement.classList.toggle('accesibilidad--espaciado-grande', activos.includes('espaciado-grande'))
    document.documentElement.classList.toggle('accesibilidad--espaciado-pequeno', activos.includes('espaciado-pequeno'))
    document.documentElement.classList.toggle('accesibilidad--invertir', activos.includes('invertir'))
    document.documentElement.classList.toggle('accesibilidad--grises', activos.includes('grises'))
    document.documentElement.classList.toggle('accesibilidad--subrayar', activos.includes('subrayar'))
    document.documentElement.classList.toggle('accesibilidad--cursor', activos.includes('cursor'))
    document.documentElement.classList.toggle('accesibilidad--guia', activos.includes('guia'))
  }, [activos])

  useEffect(() => () => {
    window.speechSynthesis?.cancel()
    reconocimiento.current?.stop()
  }, [])

  function alternar(id) {
    setActivos((actuales) => actuales.includes(id)
      ? actuales.filter((actual) => actual !== id)
      : [...actuales.filter((actual) => !['texto-grande', 'texto-pequeno', 'espaciado-grande', 'espaciado-pequeno'].includes(actual)), id])
  }

  function reiniciar() {
    setActivos([])
    setMensaje('Opciones restauradas')
    window.speechSynthesis?.cancel()
    setHablando(false)
  }

  function leerPagina() {
    if (!window.speechSynthesis) {
      setMensaje('El navegador no admite texto a voz')
      return
    }
    if (hablando) {
      window.speechSynthesis.cancel()
      setHablando(false)
      return
    }
    const texto = document.querySelector('main')?.innerText || document.body.innerText
    const voz = new SpeechSynthesisUtterance(texto.slice(0, 5000))
    voz.lang = 'es-CR'
    voz.onend = () => setHablando(false)
    window.speechSynthesis.speak(voz)
    setHablando(true)
    setMensaje('Leyendo el contenido de la página')
  }

  function dictar() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setMensaje('El navegador no admite voz a texto')
      return
    }
    if (escuchando) {
      reconocimiento.current?.stop()
      setEscuchando(false)
      return
    }
    const instancia = new SpeechRecognition()
    instancia.lang = 'es-CR'
    instancia.interimResults = false
    instancia.onresult = (evento) => {
      const texto = evento.results[0][0].transcript
      const destino = document.activeElement
      if (destino && ['INPUT', 'TEXTAREA'].includes(destino.tagName)) {
        const inicio = destino.selectionStart ?? destino.value.length
        destino.value = `${destino.value.slice(0, inicio)}${texto}${destino.value.slice(destino.selectionEnd ?? inicio)}`
        destino.dispatchEvent(new Event('input', { bubbles: true }))
      } else {
        setMensaje(`Texto reconocido: ${texto}`)
      }
    }
    instancia.onend = () => setEscuchando(false)
    instancia.start()
    reconocimiento.current = instancia
    setEscuchando(true)
    setMensaje('Escuchando... selecciona un campo de texto para dictar')
  }

  return (
    <div className="accesibilidad" onKeyDown={(evento) => evento.key === 'Escape' && setAbierto(false)}>
      {abierto && (
        <section id="panel-accesibilidad" className="accesibilidad__panel" aria-label="Opciones de accesibilidad">
          <div className="accesibilidad__cabecera">
            <div>
              <span className="accesibilidad__kicker">Inclusión digital</span>
              <h2>Opciones de accesibilidad</h2>
            </div>
            <button className="accesibilidad__cerrar" type="button" onClick={() => setAbierto(false)} aria-label="Cerrar opciones de accesibilidad">×</button>
          </div>
          <div className="accesibilidad__opciones">
            {opciones.map((opcion) => (
              <button
                key={opcion.id}
                className={`accesibilidad__opcion${activos.includes(opcion.id) ? ' is-activa' : ''}`}
                type="button"
                onClick={() => alternar(opcion.id)}
                aria-pressed={activos.includes(opcion.id)}
              >
                <span aria-hidden="true">{opcion.icono}</span>{opcion.etiqueta}
              </button>
            ))}
            <button className={`accesibilidad__opcion${hablando ? ' is-activa' : ''}`} type="button" onClick={leerPagina} aria-pressed={hablando}>
              <span aria-hidden="true">{hablando ? '■' : '▶'}</span>{hablando ? 'Detener texto a voz' : 'Texto a voz'}
            </button>
            <button className={`accesibilidad__opcion${escuchando ? ' is-activa' : ''}`} type="button" onClick={dictar} aria-pressed={escuchando}>
              <span aria-hidden="true">●</span>{escuchando ? 'Detener voz a texto' : 'Voz a texto'}
            </button>
          </div>
          {mensaje && <p className="accesibilidad__mensaje" role="status">{mensaje}</p>}
          <button className="accesibilidad__reiniciar" type="button" onClick={reiniciar}>Restaurar opciones</button>
        </section>
      )}
      <button
        className="accesibilidad__boton"
        type="button"
        onClick={() => setAbierto((actual) => !actual)}
        aria-expanded={abierto}
        aria-controls="panel-accesibilidad"
        aria-label="Abrir opciones de accesibilidad"
        title="Opciones de accesibilidad"
      >
        <span aria-hidden="true">♿</span>
      </button>
    </div>
  )
}

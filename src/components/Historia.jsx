import escudo from '../assets/escudo-limon.png'

const hitosCanton = [
  {
    ano: '1502',
    titulo: 'Llegada de Colón',
    texto:
      'Durante su cuarto viaje, Cristóbal Colón llegó a la costa limonense y atracó en la isla Quiribrí, hoy conocida como La Uvita.',
  },
  {
    ano: '1870',
    titulo: 'Creación de la comarca',
    texto:
      'Tras dos siglos de abandono, el Decreto N.º 27 del 6 de junio creó la comarca de Limón.',
  },
  {
    ano: '1892',
    titulo: 'Municipalidad de Limón',
    texto:
      'El Decreto 61 del 25 de julio dio origen a la Municipalidad de la comarca de Limón.',
  },
]

const ejesCanton = [
  {
    titulo: 'Identidad multicultural',
    texto:
      'La provincia es el resultado de la mezcla de culturas afrocaribeña, indígena, europea y migrante, especialmente jamaicana.',
  },
  {
    titulo: 'Ferrocarril al Atlántico',
    texto:
      'En 1871 comenzó la construcción del ferrocarril que conectó a San José con Puerto Limón y abrió la exportación del café.',
  },
  {
    titulo: 'Costa Caribe',
    texto:
      'Limón se destaca por su amplia línea costera, su biodiversidad y su condición de puerta de entrada al Caribe costarricense.',
  },
]

const hitosMunicipales = [
  {
    ano: '1892',
    titulo: 'Nace la Municipalidad',
    texto:
      'La Municipalidad de Limón se constituye como una autoridad local encargada de liderar el desarrollo y la organización del cantón.',
  },
  {
    ano: 'Siglo XX',
    titulo: 'Crecimiento institucional',
    texto:
      'Con el auge del comercio, las obras portuarias y la llegada de nuevas familias, la administración municipal ganó mayor relevancia.',
  },
  {
    ano: 'Actualidad',
    titulo: 'Servicio público y desarrollo',
    texto:
      'Hoy la Municipalidad impulsa servicios urbanos, gestión comunitaria, obras públicas y atención ciudadana en beneficio de la población.',
  },
]

const ejesMunicipales = [
  {
    titulo: 'Gestión local',
    texto:
      'La Municipalidad coordina la administración del territorio, la prestación de servicios y la atención a la comunidad.',
  },
  {
    titulo: 'Geografía y entorno',
    texto:
      'El cantón está conformado por zonas montañosas, valles, ríos y una franja costera propia de la vertiente caribeña.',
  },
  {
    titulo: 'Vínculo con la comunidad',
    texto:
      'Su historia se entiende en torno a la relación con los vecinos, el trabajo colectivo y la construcción de una identidad compartida.',
  },
]

export default function Historia({ detalle = false, tipo = 'historia-canton' }) {
  const esMunicipal = tipo === 'historia-municipal'
  const hitos = esMunicipal ? hitosMunicipales : hitosCanton
  const ejes = esMunicipal ? ejesMunicipales : ejesCanton

  return (
    <section id="historia" className={`historia ${detalle ? 'historia--detalle' : ''}`}>
      <div className="historia__encabezado">
        <img
          className="historia__escudo"
          src={escudo}
          alt="Escudo de la Municipalidad de Limón"
        />
        <div className="historia__texto">
          <span className="historia__eyebrow">
            {esMunicipal ? 'Municipalidad' : 'Costa Caribe'}
          </span>
          <h2>
            {detalle
              ? esMunicipal
                ? 'Historia de la Municipalidad'
                : 'Historia del cantón'
              : 'Historia y geografía de Limón'}
          </h2>
          <p>
            {esMunicipal
              ? 'La Municipalidad de Limón nació como institución encargada de ordenar, coordinar y atender las necesidades del cantón en un contexto de crecimiento económico, social y territorial.'
              : 'Puerto Limón nació como puerto marítimo en el siglo XIX y se convirtió en la puerta de entrada del Caribe costarricense. Su historia mezcla las culturas afrocaribeña, indígena y europea, dando forma a la identidad multicultural que distingue hoy a la provincia.'}
          </p>
          <p>
            {esMunicipal
              ? 'A lo largo del tiempo, la administración local ha sido un eje de desarrollo para la comunidad, impulsando servicios, infraestructura y participación ciudadana.'
              : 'Ubicada sobre la costa Caribe, limita con Nicaragua al norte y Panamá al sur, y es la provincia con mayor extensión de litoral del país.'}
          </p>
          {!detalle && (
            <div className="historia__acciones">
              <a
                className="boton boton--verde"
                href={
                  esMunicipal
                    ? '#/conozcanos/mi-municipalidad/historia-municipal'
                    : '#/conozcanos/mi-canton/historia-del-canton'
                }
              >
                Leer más
              </a>
              <a className="boton boton--claro" href="#historia">
                Ver resumen
              </a>
            </div>
          )}
        </div>
      </div>

      {detalle && (
        <>
          <div className="historia__resumen">
            {hitos.map((hito) => (
              <article key={hito.ano} className="historia__dato">
                <span>{hito.ano}</span>
                <h3>{hito.titulo}</h3>
                <p>{hito.texto}</p>
              </article>
            ))}
          </div>

          <div className="historia__grid">
            {ejes.map((eje) => (
              <article key={eje.titulo} className="historia__card">
                <h3>{eje.titulo}</h3>
                <p>{eje.texto}</p>
              </article>
            ))}
          </div>

          <blockquote className="historia__cita">
            {esMunicipal
              ? '“La historia municipal de Limón refleja la dedicación de una administración al servicio de la comunidad, su desarrollo y su progreso constante.”'
              : '“La historia de Limón refleja la fuerza de una comunidad que se formó en la convivencia, el trabajo y la diversidad cultural en la costa Caribe.”'}
          </blockquote>

          <div className="historia__acciones historia__acciones--centradas">
            <a className="boton boton--verde" href="#/">
              Volver al inicio
            </a>
          </div>
        </>
      )}
    </section>
  )
}

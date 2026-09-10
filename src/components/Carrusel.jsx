import { useEffect, useState } from 'react'
import { noticias } from '../data/noticias.js'

export default function Carrusel() {
  const [i, setI] = useState(0)
  const total = noticias.length

  const ir = (n) => setI((n + total) % total)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % total), 6000)
    return () => clearInterval(t)
  }, [total, i])

  return (
    <section id="noticias" className="carrusel" aria-label="Noticias y avisos">
      <div className="carrusel__marco">
        <div
          className="carrusel__pista"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {noticias.map((n) => (
            <a key={n.titulo} className="carrusel__slide" href={n.href}>
              <img src={n.img} alt="" />
              <div className="carrusel__texto">
                <h3>{n.titulo}</h3>
                <p>{n.resumen}</p>
              </div>
            </a>
          ))}
        </div>

        <button
          className="carrusel__flecha carrusel__flecha--prev"
          onClick={() => ir(i - 1)}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className="carrusel__flecha carrusel__flecha--next"
          onClick={() => ir(i + 1)}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <div className="carrusel__puntos">
        {noticias.map((n, n2) => (
          <button
            key={n.titulo}
            className={n2 === i ? 'is-activo' : ''}
            onClick={() => ir(n2)}
            aria-label={`Ir a la diapositiva ${n2 + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

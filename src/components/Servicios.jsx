import { servicios } from '../data/servicios.js'

function IconoServicio({ tipo }) {
  const paths = {
    documento: (
      <>
        <path d="M7 3.5h7l3 3V20.5H7z" />
        <path d="M14 3.5v4h3M9.5 12h5M9.5 15h5" />
      </>
    ),
    comunidad: (
      <>
        <circle cx="10" cy="8" r="2.5" />
        <circle cx="16" cy="9" r="2" />
        <path d="M5.5 19c.4-3.2 2-5 4.5-5s4.1 1.8 4.5 5M14 14.5c2.6-.5 4.4 1 4.8 3.5" />
      </>
    ),
    proyecto: (
      <>
        <path d="M4 19.5h16M6 17V9h4v8M14 17V5h4v12M5 9l3-3 3 3M13 5l3-3 3 3" />
      </>
    ),
    impuestos: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 8h8M8 12h2M14 12h2M8 16h2M14 16h2" />
      </>
    ),
  }

  return (
    <svg className="servicios__icono-svg" viewBox="0 0 24 24" aria-hidden="true">
      {paths[tipo]}
    </svg>
  )
}

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <h2>Nuestros servicios</h2>
      <div className="servicios__grid">
        {servicios.map((s) => (
          <article key={s.titulo} className="servicios__card">
            <span className="servicios__icono" aria-hidden="true">
              <IconoServicio tipo={s.icono} />
            </span>
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

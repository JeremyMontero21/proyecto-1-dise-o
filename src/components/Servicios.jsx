import { servicios } from '../data/servicios.js'

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <h2>Nuestros servicios</h2>
      <div className="servicios__grid">
        {servicios.map((s) => (
          <article key={s.titulo} className="servicios__card">
            <span className="servicios__icono" aria-hidden="true">
              {s.icono}
            </span>
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

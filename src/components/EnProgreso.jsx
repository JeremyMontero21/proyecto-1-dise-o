export default function EnProgreso({ titulo, seccion }) {
  return (
    <section className="wip">
      <p className="wip__ruta">{seccion}</p>
      <h1>{titulo}</h1>
      <p className="wip__estado">Sección en construcción</p>
      <p>
        Estamos trabajando en este contenido. La información estará disponible
        próximamente.
      </p>
      <a className="wip__volver" href="#/">
        Volver al inicio
      </a>
    </section>
  )
}

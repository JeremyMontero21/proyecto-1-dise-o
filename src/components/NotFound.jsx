export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__card">
        <span className="not-found__code">404</span>
        <h1>Página no disponible</h1>
        <p>
          La sección que buscas todavía no está publicada o se encuentra en mantenimiento.
        </p>
        <a className="boton boton--verde" href="#/">
          Volver al inicio
        </a>
      </div>
    </section>
  )
}

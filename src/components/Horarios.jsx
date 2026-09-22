export default function Horarios() {
  return (
    <section id="horarios" className="horarios">
      <div className="horarios__encabezado">
        <span className="horarios__eyebrow">Atención ciudadana</span>
        <h2>Nuestros horarios</h2>
        <p>
          Consulta los horarios de atención de la Municipalidad y del Concejo
          Municipal.
        </p>
      </div>
      <div className="horarios__grid">
        <details className="horarios__card" open>
          <summary>
            <span className="horarios__icono" aria-hidden="true">⌚</span>
            <span>Municipalidad</span>
            <span className="horarios__flecha" aria-hidden="true">⌄</span>
          </summary>
          <div className="horarios__contenido">
            <div className="horarios__fila">
              <span className="horarios__dia">Lunes a viernes</span>
              <strong>7:30 a.m. - 4:00 p.m.</strong>
            </div>
            <p className="horarios__nota">Atención general al público</p>
          </div>
        </details>
        <details className="horarios__card" open>
          <summary>
            <span className="horarios__icono" aria-hidden="true">◷</span>
            <span>Concejo municipal</span>
            <span className="horarios__flecha" aria-hidden="true">⌄</span>
          </summary>
          <div className="horarios__contenido">
            <div className="horarios__fila">
              <span className="horarios__dia">Sesiones ordinarias</span>
              <strong>Martes, 5:00 p.m.</strong>
            </div>
            <div className="horarios__fila">
              <span className="horarios__dia">Sesiones extraordinarias</span>
              <strong>Jueves, 5:00 p.m.</strong>
            </div>
          </div>
        </details>
      </div>
    </section>
  )
}

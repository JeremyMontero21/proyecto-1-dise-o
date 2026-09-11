export default function Horarios() {
  return (
    <section id="horarios" className="horarios">
      <h2>Horario de atención</h2>
      <div className="horarios__grid">
        <div className="horarios__card">
          <h3>Atención al público</h3>
          <p>Lunes a Viernes: 7:30 a.m. a 4:00 p.m.</p>
        </div>
        <div className="horarios__card">
          <h3>Concejo Municipal</h3>
          <p>Sesiones Ordinarias: Martes, 5:00 p.m.</p>
          <p>Sesiones Extra-Ordinarias: Jueves, 5:00 p.m.</p>
        </div>
      </div>
    </section>
  )
}

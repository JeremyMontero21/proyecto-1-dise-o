const informes = [
  { ano: '2016', titulo: 'Informe de Gestión Institucional del PAO anual 2016' },
  { ano: '2017', titulo: 'Informe de Gestión Institucional del PAO anual 2017' },
  { ano: '2018', titulo: 'Informe de Gestión Institucional del PAO anual 2018' },
  { ano: '2019', titulo: 'Informe de Gestión Institucional del PAO anual 2019' },
  { ano: '2020', titulo: 'Informe de Gestión Institucional del PAO anual 2020' },
  { ano: '2023', titulo: 'Informe de Gestión Institucional del PAO anual 2023' },
  { ano: '2024', titulo: 'Informe de Gestión Institucional del PAO anual 2024' },
]

export default function InformesGestion() {
  return (
    <section className="informes-gestion">
      <div className="informes-gestion__hero">
        <h1>Informes de Gestión</h1>
        <p>Está aquí: Inicio / Conozcanos / Alcaldía / Informes de Gestión</p>
      </div>

      <div className="informes-gestion__wrap">
        <div className="informes-gestion__header">
          <span>Informe de Gestión</span>
          <h2>Documentación institucional disponible para la ciudadanía</h2>
        </div>

        <div className="informes-gestion__lista">
          {informes.map((informe) => (
            <a key={informe.ano} className="informes-gestion__item" href="#/404" aria-label={`Ver ${informe.titulo}`}>
              <div className="informes-gestion__year">{informe.ano}</div>
              <div className="informes-gestion__content">
                <strong>{informe.titulo}</strong>
                <small>Ver documento</small>
              </div>
              <span className="informes-gestion__arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

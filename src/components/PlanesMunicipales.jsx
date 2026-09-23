const planes = [
  {
    titulo: 'Plan Estratégico Cantonal, Cantón de Limón',
    url: 'https://www.municlimon.go.cr/images/conozcanos/alcaldia/PlanesMunicipales/PLAN%20ESTRATEGICO%20CANTONAL%20MUNICIPALIDAD%20DE%20LIMON%20VF.pdf',
  },
  {
    titulo: 'Plan de Desarrollo Humano Local, Cantón Limón',
    url: 'https://www.municlimon.go.cr/images/conozcanos/alcaldia/PlanesMunicipales/PDHL%20vf.pdf',
  },
  {
    titulo: 'Plan Estratégico Municipal Vinculado al Gobierno 2024-2029',
    url: 'https://www.municlimon.go.cr/images/conozcanos/alcaldia/PlanesMunicipales/plan-estratgico-municipal-pem-vinculado-al-de-gobierno-2024---2029.pdf',
  },
]

export default function PlanesMunicipales() {
  return (
    <section className="planes-municipales">
      <div className="planes-municipales__hero">
        <h1>Planes Municipales</h1>
        <p>Está aquí: Inicio / Conozcanos / Alcaldía / Planes Municipales</p>
      </div>

      <div className="planes-municipales__wrap">
        <div className="planes-municipales__header">
          <span>Documentación institucional</span>
          <h2>Planes estratégicos y de desarrollo de la Municipalidad de Limón</h2>
        </div>

        <div className="planes-municipales__lista">
          {planes.map((plan) => (
            <a key={plan.titulo} className="planes-municipales__item" href={plan.url} target="_blank" rel="noreferrer">
              <div className="planes-municipales__icon" aria-hidden="true">📄</div>
              <div className="planes-municipales__content">
                <strong>{plan.titulo}</strong>
                <small>Descargar documento</small>
              </div>
              <span className="planes-municipales__arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

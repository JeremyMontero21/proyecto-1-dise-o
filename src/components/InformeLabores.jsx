const informes = [
  { ano: '2016', url: 'https://www.municlimon.go.cr/images/conozcanos/alcaldia/informesdelabores/INFORMEDELABORES2016.pdf' },
  { ano: '2017', url: 'https://www.municlimon.go.cr/images/conozcanos/alcaldia/informesdelabores/INFORMEDELABORES2017.pdf' },
  { ano: '2018', url: 'https://www.municlimon.go.cr/images/conozcanos/alcaldia/informesdelabores/INFORMEDELABORES2018.pdf' },
  { ano: '2019', url: 'https://www.municlimon.go.cr/images/actas-mayo-2021/INFORME_DE_LABORES_2019_OFICIAL.pdf' },
  { ano: '2020', url: 'https://www.municlimon.go.cr/images/INFORME_DE_LABORES_2020.pdf' },
  { ano: '2021', url: 'https://www.municlimon.go.cr/images/INFORME_DE_LABORES_2021.pdf' },
  { ano: '2022', url: 'https://www.municlimon.go.cr/images/INFORME_DE_LABORES_2022.pdf' },
  { ano: '2023', url: 'https://www.municlimon.go.cr/images/conozcanos/alcaldia/informesdelabores/informe-de-labores-2023.pdf' },
]

const videos = [
  { ano: '2016', url: 'https://www.youtube.com/watch?v=p4zS2eAz9G8' },
  { ano: '2017', url: 'https://www.youtube.com/watch?v=XLvXHHOdT74' },
  { ano: '2018', url: 'https://www.youtube.com/watch?v=yaDtUqSxqM8' },
  { ano: '2019', url: 'https://www.youtube.com/watch?v=tGo_uFPS84c' },
  { ano: '2020', url: 'https://www.youtube.com/watch?v=XnZVMZJ_7H0' },
  { ano: '2021', url: 'https://www.youtube.com/watch?v=TtIQwk4tW_4' },
  { ano: '2022', url: 'https://www.youtube.com/watch?v=TtIQwk4tW_4' },
  { ano: '2023', url: 'https://youtu.be/XtT7W8r5pBM' },
]

export default function InformeLabores() {
  return (
    <section className="informe-labores">
      <div className="informe-labores__hero">
        <h1>Informe de Labores</h1>
        <p>Está aquí: Inicio / Conozcanos / Alcaldía / Informe de Labores</p>
      </div>

      <div className="informe-labores__wrap">
        <div className="informe-labores__header">
          <span>Documentación oficial</span>
          <h2>Informes institucionales por año</h2>
        </div>

        <div className="informe-labores__grid">
          <article className="informe-labores__card">
            <h3>Informes descargables</h3>
            <div className="informe-labores__lista">
              {informes.map((item) => (
                <a key={item.ano} className="informe-labores__item" href={item.url} target="_blank" rel="noreferrer">
                  <span className="informe-labores__badge">{item.ano}</span>
                  <span>Informe de Labores {item.ano}</span>
                  <span className="informe-labores__arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </article>

          <article className="informe-labores__card">
            <h3>Video resumen</h3>
            <div className="informe-labores__lista">
              {videos.map((item) => (
                <a key={item.ano} className="informe-labores__item informe-labores__item--video" href={item.url} target="_blank" rel="noreferrer">
                  <span className="informe-labores__badge informe-labores__badge--video">▶</span>
                  <span>Informe de Labores {item.ano}</span>
                  <span className="informe-labores__arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

const areas = [
  {
    numero: '01',
    titulo: 'Seguridad Municipal',
    resumen: 'Vigilancia y resguardo de los edificios y activos municipales.',
    descripcion:
      'El equipo realiza funciones de vigilancia municipal en los edificios, controla las entradas y salidas, protege los activos y resguarda el perímetro que le sea asignado.',
  },
  {
    numero: '02',
    titulo: 'Vigilancia Electrónica',
    resumen: 'Monitoreo permanente para reforzar la seguridad cantonal.',
    descripcion:
      'El centro de videovigilancia funciona las 24 horas del día, los 365 días del año. Sus cámaras se ubican en puntos prioritarios del casco central y brindan videoprotección a parques, escuelas y comercios del cantón.',
    distintivo: '24/7 · 365 días',
  },
  {
    numero: '03',
    titulo: 'Estacionómetros',
    resumen: 'Orden vial y supervisión de los espacios regulados de estacionamiento.',
    descripcion:
      'Este departamento vigila y supervisa el orden vial del cantón e impone las multas correspondientes cuando se incumplen las normas sobre estacionómetros y parquímetros. Su labor contribuye a descongestionar las vías y mantener un tránsito más fluido.',
    distintivo: 'Orden vial',
  },
  {
    numero: '04',
    titulo: 'Policía Municipal',
    resumen: 'Seguridad integral, control comercial y protección de los bienes municipales.',
    descripcion:
      'El Departamento de Seguridad Ciudadana y Policía Municipal vigila y controla la actividad comercial, resguarda los bienes de la Corporación Municipal, ejecuta labores de control y fiscalización tributaria y vela por la seguridad integral de la ciudadanía.',
    tareas: [
      'Velar por la seguridad ciudadana y el mantenimiento del orden público en coordinación con otros cuerpos de seguridad.',
      'Colaborar con las organizaciones comunales en programas de prevención del delito y mejora de la seguridad.',
    ],
    informe: 'https://www.municlimon.go.cr/images/conozcanos/alcaldia/Seguridad/Informe%20de%20Labores_I%20Semestre%202019_Policia%20Municipal_Firmado.pdf',
  },
]

function Contacto() {
  return (
    <div className="seguridad-ciudadana__contacto">
      <h3>Contacto del departamento</h3>
      <strong>Jeison Arce</strong>
      <a href="mailto:jeison.arce@municlimon.go.cr">
        <span aria-hidden="true">@</span>
        jeison.arce@municlimon.go.cr
      </a>
      <a href="tel:+50627584444124">
        <span aria-hidden="true">T</span>
        2758-4444 ext. 124
      </a>
    </div>
  )
}

export default function SeguridadCiudadana() {
  return (
    <section className="seguridad-ciudadana" aria-labelledby="seguridad-ciudadana-titulo">
      <div className="seguridad-ciudadana__hero">
        <div>
          <span className="seguridad-ciudadana__kicker">Dirección Administrativa</span>
          <h1 id="seguridad-ciudadana-titulo">Gestión de Seguridad Ciudadana y Vial</h1>
          <p>Prevención, vigilancia y orden para una ciudad más segura y habitable.</p>
        </div>
        <span className="seguridad-ciudadana__hero-mark" aria-hidden="true">SCV</span>
      </div>

      <div className="seguridad-ciudadana__intro">
        <span className="seguridad-ciudadana__eyebrow">Áreas de atención</span>
        <h2>Seguridad, prevención y convivencia</h2>
        <p>
          Conoce las unidades municipales que trabajan en la protección de los espacios públicos, el orden vial, la vigilancia y la seguridad integral del cantón de Limón.
        </p>
      </div>

      <div className="seguridad-ciudadana__grid">
        {areas.map((area) => (
          <article key={area.titulo} className="seguridad-ciudadana__card">
            <header>
              <span className="seguridad-ciudadana__number" aria-hidden="true">{area.numero}</span>
              <h3>{area.titulo}</h3>
            </header>
            {area.distintivo && <span className="seguridad-ciudadana__badge">{area.distintivo}</span>}
            <p className="seguridad-ciudadana__summary">{area.resumen}</p>
            <p>{area.descripcion}</p>
            {area.tareas && (
              <div className="seguridad-ciudadana__tareas">
                <h4>Funciones destacadas</h4>
                <ul>{area.tareas.map((tarea) => <li key={tarea}>{tarea}</li>)}</ul>
              </div>
            )}
            {area.informe && (
              <a className="seguridad-ciudadana__informe" href={area.informe} target="_blank" rel="noreferrer">
                Consultar informe de labores <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>

      <Contacto />
    </section>
  )
}

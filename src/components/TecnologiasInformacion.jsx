const servicios = [
  {
    numero: '01',
    titulo: 'Asesoría tecnológica',
    texto: 'Orientación en el manejo de software y en el uso adecuado de las herramientas informáticas municipales.',
  },
  {
    numero: '02',
    titulo: 'Configuración de equipos',
    texto: 'Configuración de equipos para impresión, conexión a Internet y otras necesidades de las oficinas municipales.',
  },
  {
    numero: '03',
    titulo: 'Mantenimiento informático',
    texto: 'Mantenimiento del equipo de cómputo instalado para conservar su funcionamiento y disponibilidad.',
  },
  {
    numero: '04',
    titulo: 'Gestión de recursos TI',
    texto: 'Supervisión de los asuntos relacionados con las operaciones y los recursos de tecnología de la información.',
  },
]

export default function TecnologiasInformacion() {
  return (
    <section className="tecnologias-informacion" aria-labelledby="tecnologias-titulo">
      <div className="tecnologias-informacion__hero">
        <div>
          <span className="tecnologias-informacion__kicker">Dirección Administrativa</span>
          <h1 id="tecnologias-titulo">Tecnologías de Información</h1>
          <p>Soporte y gestión tecnológica para fortalecer el trabajo municipal.</p>
        </div>
        <span className="tecnologias-informacion__hero-mark" aria-hidden="true">TI</span>
      </div>

      <div className="tecnologias-informacion__intro">
        <span className="tecnologias-informacion__eyebrow">Servicio institucional</span>
        <h2>Una infraestructura tecnológica al servicio de la Municipalidad</h2>
        <p>
          La gestión de TI atiende las necesidades de cómputo y supervisa las operaciones y los recursos tecnológicos de la Municipalidad de Limón.
        </p>
      </div>

      <div className="tecnologias-informacion__contenido">
        <div className="tecnologias-informacion__heading">
          <span className="tecnologias-informacion__eyebrow">Áreas de apoyo</span>
          <h2>¿En qué podemos ayudarte?</h2>
        </div>
        <div className="tecnologias-informacion__grid">
          {servicios.map((servicio) => (
            <article key={servicio.numero} className="tecnologias-informacion__card">
              <span className="tecnologias-informacion__number" aria-hidden="true">{servicio.numero}</span>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.texto}</p>
            </article>
          ))}
        </div>
      </div>

      <aside className="tecnologias-informacion__contacto" aria-label="Contacto de Tecnologías de Información">
        <div>
          <span className="tecnologias-informacion__eyebrow">Contacto</span>
          <h2>Soporte y consultas</h2>
          <p>Comunícate con el área de Tecnologías de Información para recibir orientación.</p>
        </div>
        <div className="tecnologias-informacion__datos">
          <strong>Ing. Carlos Solano Martinez</strong>
          <a href="mailto:carlos.solano@municlimon.go.cr">
            <span aria-hidden="true">@</span>
            carlos.solano@municlimon.go.cr
          </a>
          <a href="tel:+50627584444117">
            <span aria-hidden="true">T</span>
            2758-4444 ext. 117
          </a>
        </div>
      </aside>
    </section>
  )
}

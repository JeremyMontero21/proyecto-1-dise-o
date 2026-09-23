const funcionesServicio = [
  'Informar y orientar a las personas usuarias sobre servicios, trámites, requisitos y dependencias municipales.',
  'Atender trámites de patentes, como otorgamientos, renuncias, traspasos, denuncias y reclamos.',
  'Resolver solicitudes de declaraciones por impuesto de patentes.',
  'Atender actualizaciones de valor, declaraciones juradas y exoneraciones de bienes inmuebles.',
  'Emitir constancias cuando existan las facilidades tecnológicas y la información necesaria.',
  'Recibir trámites de servicios municipales, patentes, permisos de construcción, visado de planos, uso del suelo y concesiones de ZMT.',
  'Gestionar contratos para la venta de boletas de parquímetros.',
]

const formularios = ['Catastro', 'Patente de licor', 'Ingeniería', 'Rentas']

const areas = [
  {
    id: 'ventanilla-unica',
    numero: '01',
    titulo: 'Ventanilla Única',
    resumen: 'Recepción, distribución y seguimiento de documentos y solicitudes municipales.',
    descripcion:
      'Esta unidad recibe los documentos y solicitudes de las personas contribuyentes, los traslada a los departamentos responsables y comunica la respuesta de la gestión realizada.',
    correo: 'ventanilla.unica@municlimon.go.cr',
    telefono: '+506 2758-4444',
  },
  {
    id: 'inspeccion-general',
    numero: '02',
    titulo: 'Inspección General',
    resumen: 'Verificación del cumplimiento de las normas aplicables a patentes y permisos.',
    descripcion:
      'Su objetivo es comprobar y velar por el estricto cumplimiento de las leyes, reglamentos, disposiciones y normas que se aplican a las actividades de patentes municipales y permisos de construcción.',
    contacto: 'Antonio Babb',
    correo: 'plataforma.servicios@municlimon.go.cr',
    telefono: '+506 2758-4444 / 2798-1101',
    enlace: 'https://www.municlimon.go.cr/index.php/component/sppagebuilder/?view=page&id=151',
  },
]

function Contacto({ nombre, correo, telefono }) {
  return (
    <div className="servicio-cliente__contacto">
      <h4>Contacto</h4>
      {nombre && <p className="servicio-cliente__persona">{nombre}</p>}
      <a href={`mailto:${correo}`}>
        <span aria-hidden="true">@</span>
        {correo}
      </a>
      <a href={`tel:${telefono.replace(/[^0-9+]/g, '')}`}>
        <span aria-hidden="true">T</span>
        {telefono}
      </a>
    </div>
  )
}

export default function ServicioCliente() {
  return (
    <section className="servicio-cliente" aria-labelledby="servicio-cliente-titulo">
      <div className="servicio-cliente__hero">
        <div>
          <span className="servicio-cliente__kicker">Dirección Administrativa</span>
          <h1 id="servicio-cliente-titulo">Servicio al Cliente</h1>
          <p>Orientación, recepción y seguimiento para realizar tus trámites municipales.</p>
        </div>
        <span className="servicio-cliente__hero-mark" aria-hidden="true">SC</span>
      </div>

      <div className="servicio-cliente__intro">
        <div>
          <span className="servicio-cliente__eyebrow">Atención ciudadana</span>
          <h2>Una puerta de entrada a los servicios municipales</h2>
          <p>
            El equipo de Servicio al Cliente informa y orienta con certeza, oportunidad, respeto y cortesía a quienes visitan la Municipalidad de Limón.
          </p>
        </div>
        <div className="servicio-cliente__contacto servicio-cliente__contacto--principal">
          <h4>Contacto general</h4>
          <p className="servicio-cliente__persona">Lic. Garry Washington</p>
          <a href="mailto:garry.washington@municlimon.go.cr">
            <span aria-hidden="true">@</span>
            garry.washington@municlimon.go.cr
          </a>
          <a href="tel:+50627984018">
            <span aria-hidden="true">T</span>
            2798-40-18
          </a>
        </div>
      </div>

      <div className="servicio-cliente__funciones">
        <div className="servicio-cliente__section-heading">
          <span className="servicio-cliente__eyebrow">Qué hacemos</span>
          <h2>Trámites y servicios</h2>
        </div>
        <ul>
          {funcionesServicio.map((funcion) => <li key={funcion}>{funcion}</li>)}
        </ul>
      </div>

      <div className="servicio-cliente__areas">
        <div className="servicio-cliente__section-heading">
          <span className="servicio-cliente__eyebrow">Áreas relacionadas</span>
          <h2>Encuentra la atención que necesitas</h2>
        </div>
        <div className="servicio-cliente__areas-grid">
          {areas.map((area) => (
            <article key={area.id} className="servicio-cliente__area">
              <header>
                <span className="servicio-cliente__number" aria-hidden="true">{area.numero}</span>
                <h3>{area.titulo}</h3>
              </header>
              <p className="servicio-cliente__area-summary">{area.resumen}</p>
              <p>{area.descripcion}</p>
              {area.enlace && (
                <a className="servicio-cliente__external" href={area.enlace} target="_blank" rel="noreferrer">
                  Ver inspectores autorizados <span aria-hidden="true">↗</span>
                </a>
              )}
              <Contacto nombre={area.contacto} correo={area.correo} telefono={area.telefono} />
            </article>
          ))}
        </div>
      </div>

      <div className="servicio-cliente__formularios">
        <div className="servicio-cliente__section-heading">
          <span className="servicio-cliente__eyebrow">Ventanilla Única</span>
          <h2>Formularios por área</h2>
          <p>Consulta los formularios disponibles para iniciar tu gestión en la unidad correspondiente.</p>
        </div>
        <div className="servicio-cliente__form-list" aria-label="Áreas con formularios">
          {formularios.map((formulario) => <span key={formulario}>{formulario}<small>Formulario</small></span>)}
        </div>
      </div>
    </section>
  )
}

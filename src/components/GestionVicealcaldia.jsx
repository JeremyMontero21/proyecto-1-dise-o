const funciones = [
  'Ejecución de partidas específicas.',
  'Atención y coordinación de los Centros de Atención Infantil CECUDIS.',
  'Coordinación y seguimiento de la Oficina de la Mujer.',
  'Apoyo a la Oficina Afro.',
  'Gestión de la Oficina de Educación, Cultura y Deporte.',
  'Atención a personas y familias en condición de vulnerabilidad, incluido el centro del indigente.',
  'Fortalecimiento del bienestar de la familia y la cohesión social.',
  'Coordinación del Comité Municipal de Emergencias en ausencia del alcalde.',
  'Elaboración, ejecución y seguimiento de funciones y coordinaciones conforme al presupuesto asignado.',
  'Coordinación con instituciones públicas y privadas relacionadas con las funciones delegadas.',
  'Solicitud y elaboración de la ejecución presupuestaria correspondiente.',
  'Imposición de sanciones conforme a los parámetros del Código Municipal.',
  'Dirección y seguimiento de proyectos, comisiones y actividades a su cargo.',
  'Informes trimestrales a la alcaldía sobre las acciones realizadas.',
]

const servicios = {
  titulo: 'Gestión de Servicios y Proyectos Comunitarios',
  descripcion:
    'Su objetivo principal es incentivar e impulsar la educación de la niñez y la juventud de los cuatro distritos del cantón, contribuyendo a enriquecer sus condiciones de vida mediante becas y apoyos orientados a estudiantes de bajos recursos.',
  contacto: {
    nombre: 'Kenny Williams',
    correo: 'kenny.williams@municlimon.go.cr',
    telefono: '2758-4444 ext. 304',
  },
}

const desarrollo = {
  titulo: 'Gestión de Desarrollo y Protección Social',
  areas: [
    { label: 'Oficina de la Mujer', href: '#/404' },
    { label: 'Oficina de Intermediación de Empleo', href: '#/404' },
    { label: 'CECUDI', href: '#/404' },
    { label: 'CECUAM', href: '#/404' },
    { label: 'Programas de apoyo social', href: '#/404' },
    { label: 'Fortalecimiento de la inclusión', href: '#/404' },
  ],
}

export default function GestionVicealcaldia() {
  return (
    <section className="gestion-vicealcaldia">
      <div className="gestion-vicealcaldia__hero">
        <h1>Gestión de Vicealcaldía</h1>
        <p>Está aquí: Inicio / Conozcanos / Alcaldía / Gestión de Vicealcaldía</p>
      </div>

      <div className="gestion-vicealcaldia__layout">
        <article className="gestion-vicealcaldia__card gestion-vicealcaldia__card--full">
          <div className="gestion-vicealcaldia__header">
            <span className="gestion-vicealcaldia__eyebrow">Funciones</span>
            <h2>Funciones de la Vicealcaldía</h2>
          </div>

          <p className="gestion-vicealcaldia__intro">
            La Vicealcaldía desempeña una función de coordinación, ejecución y acompañamiento en
            temas de bienestar social, educación, atención ciudadana, administración y gestión de
            emergencias, bajo la delegación formal otorgada por la alcaldía municipal.
          </p>

          <ul className="gestion-vicealcaldia__lista">
            {funciones.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="gestion-vicealcaldia__card">
          <div className="gestion-vicealcaldia__header">
            <span className="gestion-vicealcaldia__eyebrow">Comunitario</span>
            <h2>{servicios.titulo}</h2>
          </div>

          <p>{servicios.descripcion}</p>

          <div className="gestion-vicealcaldia__contacto">
            <h3>Contacto</h3>
            <p>
              <strong>{servicios.contacto.nombre}</strong>
            </p>
            <p>
              Correo: <a href={`mailto:${servicios.contacto.correo}`}>{servicios.contacto.correo}</a>
            </p>
            <p>
              Teléfono: <a href={`tel:${servicios.contacto.telefono.replace(/[^0-9+]/g, '')}`}>{servicios.contacto.telefono}</a>
            </p>
          </div>
        </article>

        <article className="gestion-vicealcaldia__card">
          <div className="gestion-vicealcaldia__header">
            <span className="gestion-vicealcaldia__eyebrow">Protección social</span>
            <h2>{desarrollo.titulo}</h2>
          </div>

          <div className="gestion-vicealcaldia__botones">
            {desarrollo.areas.map((item) => (
              <a
                key={item.label}
                className="gestion-vicealcaldia__boton"
                href={item.href}
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

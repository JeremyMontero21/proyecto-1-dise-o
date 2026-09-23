const areas = [
  {
    numero: '01',
    titulo: 'Archivo Municipal',
    resumen: 'Custodia y gestión de la información documental de la Municipalidad de Limón.',
    descripcion:
      'Su objetivo es garantizar la autenticidad, integridad y seguridad de la información con valor histórico, científico y cultural que produce la Municipalidad, así como definir sus plazos de conservación según criterios técnicos, legales o administrativos.',
    tareas: [
      'Seleccionar, clasificar y eliminar documentos de acuerdo con las tablas de plazos.',
      'Mantener un archivo digital para facilitar la custodia, administración y uso de los documentos municipales.',
    ],
    contacto: 'Rafael Oregón Wiltshre',
    correo: 'rafael.oregon@municlimon.go.cr',
    telefono: '+506 2758-4444 ext. 115',
  },
  {
    numero: '02',
    titulo: 'Transporte',
    resumen: 'Organización y aprovechamiento de la flotilla municipal.',
    descripcion:
      'Su principal objetivo es organizar el uso de la flotilla disponible para lograr el mejor aprovechamiento de los vehículos y contribuir a la satisfacción de las personas usuarias.',
    contacto: 'Johnny Montoya',
    correo: 'johnny.montoya@uniclimon.go.cr',
    telefono: '+506 2758-4444 ext. 115',
  },
  {
    numero: '03',
    titulo: 'Misceláneos',
    resumen: 'Apoyo esencial para conservar en buenas condiciones los edificios municipales.',
    descripcion:
      'Esta área tiene a su cargo las actividades correspondientes para mantener el aseo y la limpieza de los edificios municipales.',
  },
  {
    numero: '04',
    titulo: 'Salud Ocupacional',
    resumen: 'Prevención, preparación y respuesta para proteger la salud y seguridad del personal municipal.',
    descripcion:
      'Su principal objetivo es elaborar, ejecutar y actualizar un Plan de Emergencias para las oficinas municipales, como guía para las fases de prevención, mitigación, preparación, respuesta y rehabilitación ante situaciones de emergencia.',
    tareas: [
      'Investigar las causas de los accidentes de trabajo para implementar acciones correctivas y preventivas.',
      'Determinar los riesgos de los diferentes puestos de trabajo y establecer medidas para minimizarlos.',
      'Velar por la seguridad, el bienestar y la integridad de las personas colaboradoras.',
      'Brindar un servicio integral que promueva la salud física, social y mental del personal municipal.',
    ],
    contacto: 'Aisha Robinson',
    correo: 'aisha.robinson@municlimon.go.cr',
    telefono: '+506 2758-2867',
  },
  {
    numero: '05',
    titulo: 'Psicología',
    resumen: 'Promoción de la salud integral de las personas colaboradoras municipales.',
    descripcion:
      'Su principal objetivo es procurar la promoción de la salud integral de las colaboradoras y colaboradores municipales en los diferentes edificios municipales.',
    tareas: [
      'Coordinar acciones, programas y proyectos para el desarrollo y atención del personal municipal.',
      'Brindar asesoría y acompañamiento psicológico a las personas funcionarias.',
      'Promover el bienestar de la salud integral mediante acciones formativas y educación para la salud.',
      'Ofrecer información y educación en materia de salud mental y colaborar en la resolución de conflictos laborales.',
    ],
    contacto: 'Andrea Fuentes',
    correo: 'andrea.fuentes@municlimon.go.cr',
    telefono: '+506 2758-2867',
  },
]

function Contacto({ area }) {
  if (!area.contacto) return null

  return (
    <div className="gestion-servicios__contacto">
      <h4>Contacto</h4>
      <p className="gestion-servicios__persona">{area.contacto}</p>
      <a href={`mailto:${area.correo}`}>
        <span aria-hidden="true">@</span>
        {area.correo}
      </a>
      <a href={`tel:${area.telefono.replace(/[^0-9+]/g, '')}`}>
        <span aria-hidden="true">T</span>
        {area.telefono}
      </a>
    </div>
  )
}

export default function GestionServiciosGenerales() {
  return (
    <section className="gestion-servicios" aria-labelledby="gestion-servicios-titulo">
      <div className="gestion-servicios__hero">
        <div>
          <span className="gestion-servicios__kicker">Dirección Administrativa</span>
          <h1 id="gestion-servicios-titulo">Gestión y Servicios Generales</h1>
          <p>Áreas que sostienen la operación diaria y el funcionamiento de la Municipalidad de Limón.</p>
        </div>
        <span className="gestion-servicios__hero-mark" aria-hidden="true">GS</span>
      </div>

      <div className="gestion-servicios__intro">
        <span className="gestion-servicios__eyebrow">Servicios internos</span>
        <h2>Organización, cuidado y apoyo institucional</h2>
        <p>
          Conoce las unidades responsables de preservar la información municipal, coordinar el transporte, cuidar los espacios y promover la seguridad y el bienestar del personal.
        </p>
      </div>

      <div className="gestion-servicios__grid">
        {areas.map((area) => (
          <article key={area.titulo} className="gestion-servicios__card">
            <header>
              <span className="gestion-servicios__number" aria-hidden="true">{area.numero}</span>
              <h3>{area.titulo}</h3>
            </header>
            <p className="gestion-servicios__summary">{area.resumen}</p>
            <p>{area.descripcion}</p>
            {area.tareas && (
              <div className="gestion-servicios__tareas">
                <h4>Funciones principales</h4>
                <ul>
                  {area.tareas.map((tarea) => <li key={tarea}>{tarea}</li>)}
                </ul>
              </div>
            )}
            <Contacto area={area} />
          </article>
        ))}
      </div>
    </section>
  )
}

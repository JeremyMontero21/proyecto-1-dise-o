const secretarias = [
  {
    nombre: 'Secretaría del Concejo',
    funciones: [
      'Asistir a las sesiones del Concejo, levantar las actas.',
      'Transcribir, comunicar o notificar los acuerdos del Concejo, conforme a la ley.',
      'Extender las certificaciones solicitadas a la municipalidad.',
      'Cualquier otro deber que le encarguen las leyes, los reglamentos internos o el Concejo Municipal.',
      'Recibir documentos.',
      'Atender a los contribuyentes.',
      'Atender el teléfono.',
    ],
    responsable: 'Derian Gutiérrez',
    cargo: 'Secretaria del Concejo Municipal',
    correo: 'derian.gutierrez@municlimon.go.cr',
    telefono: 'Teléfono / Fax: 2758-03-19',
  },
  {
    nombre: 'Secretaría de Comisiones',
    funciones: [
      'Encargada de dar seguimiento a los acuerdos.',
      'Recibir documentos.',
      'Atender a los contribuyentes.',
      'Atender el teléfono.',
    ],
    responsable: 'Karol Hernández Venegas',
    cargo: 'Secretaria de Comisiones',
    correo: 'karol.hernandez@municlimon.go.cr',
    telefono: 'Teléfono / Fax: 2758-03-19',
  },
  {
    nombre: 'Secretaría de Actas',
    funciones: [
      'Redactar y digitar actas.',
      'Recibir documentos.',
      'Atender a los contribuyentes.',
      'Atender el teléfono.',
    ],
    responsable: 'Magaly Castillo',
    cargo: 'Secretaria de Actas',
    correo: 'magaly.castillo@municlimon.go.cr',
    telefono: 'Teléfono / Fax: 2758-03-19',
  },
]

export default function SecretariaConsejo() {
  return (
    <section className="secretaria-consejo" aria-labelledby="secretaria-consejo-titulo">
      <div className="secretaria-consejo__hero">
        <div className="secretaria-consejo__hero-copy">
          <span className="secretaria-consejo__hero-kicker">Concejo Municipal</span>
          <h1 id="secretaria-consejo-titulo">Secretaría del Concejo</h1>
          <p>Información, funciones y contactos para la atención del Concejo Municipal.</p>
        </div>
        <span className="secretaria-consejo__hero-mark" aria-hidden="true">SC</span>
      </div>

      <div className="secretaria-consejo__wrap">
        <div className="secretaria-consejo__header">
          <span>Áreas de atención</span>
          <h2>Apoyo administrativo y atención ciudadana</h2>
          <p>Conoce las responsabilidades de cada secretaría y comunícate directamente con el equipo municipal.</p>
        </div>

        <div className="secretaria-consejo__grid">
          {secretarias.map((secretaria, indice) => (
            <article
              key={secretaria.nombre}
              className={`secretaria-consejo__card${indice === 0 ? ' secretaria-consejo__card--principal' : ''}`}
            >
              <div className="secretaria-consejo__card-header">
                <span className="secretaria-consejo__number" aria-hidden="true">0{indice + 1}</span>
                <h3>{secretaria.nombre}</h3>
              </div>

              <div className="secretaria-consejo__body">
                <h4>Funciones</h4>
                <ul>
                  {secretaria.funciones.map((funcion) => (
                    <li key={funcion}>{funcion}</li>
                  ))}
                </ul>

                <div className="secretaria-consejo__contacto">
                  <h4>Contacto</h4>
                  <p className="secretaria-consejo__persona">{secretaria.responsable}</p>
                  <p>{secretaria.cargo}</p>
                  <a className="secretaria-consejo__link" href={`mailto:${secretaria.correo}`}>
                    <span aria-hidden="true">@</span> {secretaria.correo}
                  </a>
                  <a className="secretaria-consejo__link" href="tel:+50627580319">
                    <span aria-hidden="true">T</span> {secretaria.telefono}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const alcaldia = {
  nombre: 'Ana Janniel Matarrita Mc Calla',
  idiomas: 'Español, inglés, italiano – básico',
  experiencia: [
    'Profesora asistente, Universidad de Costa Rica (UCR Sede Limón).',
    'Asistente de coordinación, Fundación de la Universidad Tecnológica (FundaTEC).',
    'Jefatura Sykes Latinoamérica.',
    'Docente de Español, Colegio Técnico Profesional de Bataán.',
    'Docente de Español, Colegio Técnico Profesional de Liverpool.',
    'Asesora, Asamblea Legislativa de Costa Rica.',
  ],
  estudios: [
    'Administración de empresas: UMCA, Limón.',
    'Licenciatura en Derecho: UMCA, Limón.',
    'Bachillerato en Administración Aduanera, UMCA, Limón. (Cursando actualmente).',
  ],
}

const vicealcaldias = [
  {
    titulo: 'Primera Vicealcaldía',
    nombre: 'John Gutiérrez Gómez',
    perfil: [
      'Con experiencia en liderazgo, gestión administrativa y acompañamiento comunitario.',
      'Ha impulsado procesos orientados a la atención ciudadana y al fortalecimiento institucional.',
      'Su gestión se enfoca en la coordinación de actividades con la comunidad y el apoyo a la administración municipal.',
    ],
  },
  {
    titulo: 'Segunda Vicealcaldía',
    nombre: 'Katherine Calvo Lobo',
    estudios: [
      'Administración de empresas: UMCA, Limón.',
      'Licenciatura en Derecho: UMCA, Limón.',
      'Bachillerato en Administración Aduanera, UMCA, Limón. (Cursando actualmente).',
    ],
    experiencia: [
      'Desde el año 2006 soy propietaria de mi propia empresa CORREDORES ASOCIADOS EL AGUILA S.A. que es una agencia de Aduanas que brinda oportunidad laboral a 18 familias limonenses.',
      'Nos dedicamos al agenciamiento aduanero y procesos de Logística.',
      'Analista Financiera para los departamentos de Logística de América latina. (Tropical Supply Chain).',
      'Supervisor Administrativo Terminal de Contenedores Limón.',
      '1989 – 1990 Hospital Regional Dr. Tony Facio Castro. Funciones administrativas varias.',
    ],
    politica: [
      'Movimiento 26 Limón, PLN, Candidata a la papeleta del Movimiento de Trabajadores.',
      'Asambleísta Nacional y miembro fundadora del Partido Unidos Podemos.',
      'Presidenta del Comité Ejecutivo Cantonal del Partido Unidos Podemos.',
      'Presidenta del Comité Ejecutivo Provincial del Partido Unidos Podemos.',
      'Vicealcaldesa segunda de Limón, periodo 2024-2028.',
      'Regidora Propietaria de Limón, periodo 2024-2028.',
    ],
  },
]

export default function DespachoAlcaldia() {
  return (
    <section className="despacho-alcaldia">
      <div className="despacho-alcaldia__hero">
        <h1>Despacho de la Alcaldía</h1>
        <p>Está aquí: Inicio / Conozcanos / Alcaldía / Despacho de la Alcaldía</p>
      </div>

      <div className="despacho-alcaldia__contenido">
        <div className="despacho-alcaldia__bloque">
          <h2>Alcaldía</h2>
          <div className="despacho-alcaldia__foto despacho-alcaldia__foto--principal" aria-label="Foto de la alcaldesa" />
        </div>

        <div className="despacho-alcaldia__persona">
          <h3>{alcaldia.nombre}</h3>

          <div className="despacho-alcaldia__grid">
            <article className="despacho-alcaldia__card">
              <div className="despacho-alcaldia__cabecera">
                <h4>Manejo de idiomas</h4>
                <button type="button" aria-label="Ver detalle">↓</button>
              </div>
              <p>{alcaldia.idiomas}</p>
            </article>

            <article className="despacho-alcaldia__card">
              <div className="despacho-alcaldia__cabecera">
                <h4>Experiencia laboral</h4>
                <button type="button" aria-label="Ver detalle">↓</button>
              </div>
              <ul>
                {alcaldia.experiencia.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="despacho-alcaldia__card">
              <div className="despacho-alcaldia__cabecera">
                <h4>Grado académico</h4>
                <button type="button" aria-label="Ver detalle">↓</button>
              </div>
              <ul>
                {alcaldia.estudios.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        {vicealcaldias.map((persona) => (
          <div className="despacho-alcaldia__persona" key={persona.titulo}>
            <h3>{persona.titulo}</h3>

            <div className="despacho-alcaldia__foto despacho-alcaldia__foto--persona" aria-label={`Foto de ${persona.nombre}`} />

            <h4 className="despacho-alcaldia__nombre">{persona.nombre}</h4>

            <div className="despacho-alcaldia__grid despacho-alcaldia__grid--two">
              {persona.estudios && (
                <article className="despacho-alcaldia__card">
                  <div className="despacho-alcaldia__cabecera">
                    <h4>Estudios</h4>
                    <button type="button" aria-label="Ver detalle">↓</button>
                  </div>
                  <ul>
                    {persona.estudios.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              )}

              {persona.experiencia && (
                <article className="despacho-alcaldia__card">
                  <div className="despacho-alcaldia__cabecera">
                    <h4>Experiencia laboral</h4>
                    <button type="button" aria-label="Ver detalle">↓</button>
                  </div>
                  <ul>
                    {persona.experiencia.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              )}

              {persona.politica && (
                <article className="despacho-alcaldia__card">
                  <div className="despacho-alcaldia__cabecera">
                    <h4>Experiencia política</h4>
                    <button type="button" aria-label="Ver detalle">↓</button>
                  </div>
                  <ul>
                    {persona.politica.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              )}

              {!persona.estudios && persona.perfil && (
                <article className="despacho-alcaldia__card despacho-alcaldia__card--wide">
                  <div className="despacho-alcaldia__cabecera">
                    <h4>Perfil</h4>
                    <button type="button" aria-label="Ver detalle">↓</button>
                  </div>
                  <ul>
                    {persona.perfil.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

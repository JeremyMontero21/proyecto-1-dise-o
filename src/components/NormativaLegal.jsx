const categorias = [
  'Constitucionales',
  'Electorales',
  'Financieras',
  'Gestión',
  'Laborales',
  'Orgánicas',
  'Urbanísticas',
  'Municipales',
]

const procedimientos = [
  {
    titulo: 'Trámites administrativos',
    texto: 'Flujos de atención, recepción de documentos y coordinación entre las distintas unidades municipales para resolver solicitudes ciudadanas.',
  },
  {
    titulo: 'Servicios al ciudadano',
    texto: 'Procesos orientados a la atención de peticiones, consultas y requisitos relacionados con la gestión municipal.',
  },
  {
    titulo: 'Control interno y seguimiento',
    texto: 'Lineamientos para la revisión, aprobación y seguimiento de procedimientos institucionales y decisiones internas.',
  },
  {
    titulo: 'Transparencia y rendición de cuentas',
    texto: 'Mecanismos para informar, documentar y velar por la adecuada gestión de la administración pública local.',
  },
]

export default function NormativaLegal() {
  return (
    <section className="normativa-legal">
      <div className="normativa-legal__hero">
        <h1>Normativa Legal</h1>
        <p>Está aquí: Inicio / Conozcanos / Alcaldía / Normativa Legal</p>
      </div>

      <div className="normativa-legal__wrap">
        <div className="normativa-legal__header">
          <span>Marco jurídico</span>
          <h2>Leyes, disposiciones y procedimientos institucionales</h2>
        </div>

        <div className="normativa-legal__grid">
          <article className="normativa-legal__card">
            <h3>Leyes</h3>
            <p>
              La Municipalidad de Limón se rige por un conjunto de normas y disposiciones que
              orientan la gestión pública, la administración local y la atención ciudadana.
            </p>
            <div className="normativa-legal__tags">
              {categorias.map((categoria) => (
                <span key={categoria}>{categoria}</span>
              ))}
            </div>
          </article>

          <article className="normativa-legal__card">
            <h3>Procesos y procedimientos</h3>
            <div className="normativa-legal__lista">
              {procedimientos.map((item) => (
                <div key={item.titulo} className="normativa-legal__item">
                  <strong>{item.titulo}</strong>
                  <p>{item.texto}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

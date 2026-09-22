import escudo from '../assets/escudo-limon.png'

const pilares = [
  {
    icono: '✦',
    titulo: 'Bienestar para todos',
    texto: 'Un cantón donde las necesidades básicas estén cubiertas y las nuevas generaciones encuentren oportunidades.',
  },
  {
    icono: '◌',
    titulo: 'Cultura y convivencia',
    texto: 'Una comunidad segura, solidaria, tolerante y respetuosa de su diversidad cultural y de las leyes.',
  },
  {
    icono: '⌁',
    titulo: 'Limón verde',
    texto: 'Un territorio limpio, abierto y comprometido con la protección del ambiente y su biodiversidad.',
  },
  {
    icono: '↗',
    titulo: 'Liderazgo y calidad',
    texto: 'Un cantón referente en la provincia y el país, reconocido por su buena imagen y sus servicios.',
  },
]

export default function Vision() {
  return (
    <section className="vision">
      <div className="vision__cabecera">
        <div className="vision__marca">
          <img src={escudo} alt="Escudo de la Municipalidad de Limón" />
          <span>Mi Municipalidad</span>
        </div>
        <p className="vision__ruta">Conózcanos / Mi Municipalidad</p>
        <h1>Nuestra visión</h1>
        <p className="vision__intro">
          Construir un Limón moderno, seguro, verde y humano, donde cada persona
          pueda vivir con bienestar y proyectar un futuro con oportunidades.
        </p>
      </div>

      <div className="vision__declaracion">
        <span className="vision__comilla" aria-hidden="true">“</span>
        <div>
          <p>
            Aspiramos a vivir en un cantón moderno, en el que todas y todos sus
            habitantes tengan cubiertas sus necesidades básicas y se aseguren las
            opciones de presente y futuro para nuestros hijos e hijas.
          </p>
          <p>
            Un cantón en el que todos y todas nos sentimos seguros y seguras y
            contribuyamos a construir una biodiversidad cultural de responsabilidad,
            productividad, solidaridad, tolerancia, humanismo y respeto a las leyes.
          </p>
          <p>
            Deseamos vivir en un cantón siempre limpio y verde, respetuoso del
            ambiente, abierto y diversificado, líder en la provincia y el país, con
            una buena imagen, que ofrece servicios de calidad a sus habitantes.
          </p>
        </div>
      </div>

      <div className="vision__pilares">
        <div className="vision__titulo">
          <span>El futuro que imaginamos</span>
          <h2>Una visión que se construye en comunidad</h2>
        </div>
        <div className="vision__grid">
          {pilares.map((pilar) => (
            <article className="vision__card" key={pilar.titulo}>
              <span className="vision__icono" aria-hidden="true">{pilar.icono}</span>
              <h3>{pilar.titulo}</h3>
              <p>{pilar.texto}</p>
            </article>
          ))}
        </div>
      </div>

      <a className="boton boton--verde vision__volver" href="#/">
        Volver al inicio
      </a>
    </section>
  )
}
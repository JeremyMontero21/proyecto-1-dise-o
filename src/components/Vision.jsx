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
        <h1>Sobre nosotros</h1>
        <p className="vision__intro">
          Conocemos la historia, el propósito y la dirección de nuestra municipalidad,
          para fortalecer el bienestar, la participación y el desarrollo de Limón.
        </p>
      </div>

      <div className="vision__seccion">
        <div className="vision__encabezado">
          <span>Nuestra visión</span>
          <h2>Un cantón con futuro, bienestar y orgullo comunitario</h2>
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
      </div>

      <div className="vision__seccion vision__seccion--mision">
        <div className="vision__encabezado">
          <span>Nuestra misión</span>
          <h2>Trabajar unidos por un desarrollo sostenible y humano</h2>
        </div>
        <div className="vision__declaracion vision__declaracion--mision">
          <span className="vision__comilla" aria-hidden="true">“</span>
          <div>
            <p>
              Limón es un cantón en ruta hacia el desarrollo, redefiniéndose a sí mismo
              mediante el trabajo conjunto, organizado y coordinado, logrando un constante
              mejoramiento de la calidad de vida de sus habitantes.
            </p>
            <p>
              Se caracteriza por el empoderamiento de los distintos actores locales como
              parte de la dinámica de un cantón democrático, participativo y autogestionario,
              que administran de manera eficiente y eficaz los recursos de que disponen,
              con el fin de potencializar las capacidades y oportunidades de la comunidad.
            </p>
            <p>
              En coordinación con instituciones públicas y privadas, promovemos condiciones
              que permiten el desarrollo sostenible, ecológico y portuario de nuestra región.
            </p>
          </div>
        </div>
      </div>

      <div className="vision__seccion">
        <div className="vision__encabezado">
          <span>Valores municipales</span>
          <h2>Principios que orientan nuestra gestión</h2>
        </div>
        <div className="vision__valores-grid">
          <article className="vision__valor-card">
            <h3>Valores</h3>
            <ul className="vision__lista">
              <li>Solidaridad</li>
              <li>Tolerancia</li>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Honradez</li>
              <li>Ética</li>
              <li>Respeto</li>
              <li>Respeto a la naturaleza</li>
              <li>Identidad</li>
              <li>Equidad de género</li>
              <li>Eficiencia</li>
              <li>Honestidad</li>
              <li>Probidad</li>
            </ul>
          </article>

          <article className="vision__valor-card">
            <h3>Principios</h3>
            <ul className="vision__lista">
              <li>Autonomía institucional</li>
              <li>Políticas inclusivas y eficientes</li>
              <li>Compromiso con la identidad cultural</li>
              <li>Integridad</li>
              <li>Empoderamiento</li>
              <li>Distribución de la riqueza</li>
              <li>Acceso a la información</li>
              <li>Mejora continua</li>
              <li>Sostenibilidad</li>
              <li>Inclusión social</li>
              <li>Participación compartida</li>
              <li>Rendición de cuentas</li>
              <li>Desarrollo institucional</li>
            </ul>
          </article>
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
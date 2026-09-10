import hero from '../assets/hero-limon.jpg'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `var(--hero-overlay), url(${hero})` }}
    >
      <div className="hero__contenido">
        <h1>Bienvenidos a Limón</h1>
        <p>
          La página oficial de la municipalidad del Cantón Central de Limón.
        </p>
        <a className="hero__cta" href="#noticias">
          Descubra más <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
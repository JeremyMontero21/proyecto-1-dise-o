import escudo from '../assets/escudo-limon.png'

const enlaces = [
  { label: 'Inicio', href: '#/' },
  { label: 'Conózcanos', href: '#/conozcanos/mi-canton/historia-del-canton' },
  {
    label: 'Gestión Municipal',
    href: '#/gestion-municipal/direccion-administrativa/tecnologias-de-informacion',
  },
  { label: 'Obras y Proyectos', href: '#/obras-y-proyectos' },
  { label: 'Transparencia', href: '#/transparencia' },
  { label: 'Turismo', href: '#/turismo' },
  { label: 'Contacto', href: '#/contacto' },
]

const redes = [
  {
    nombre: 'Facebook',
    href: 'https://www.facebook.com/Municipalidadlimon',
    d: 'M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 2.9h-2.1v7A10 10 0 0 0 22 12Z',
  },
  {
    nombre: 'Instagram',
    href: 'https://www.instagram.com/municipalidaddelimon_oficial',
    d: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.4 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .4 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.4-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1a3.3 3.3 0 0 0-.8-1.2 3.3 3.3 0 0 0-1.2-.8c-.4-.2-1-.4-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.3-8.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z',
  },
  {
    nombre: 'YouTube',
    href: 'https://www.youtube.com/@municlimon',
    d: 'M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12Zm-13 3V9l5.2 3-5.2 3Z',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <a className="footer__marca" href="#/">
            <img src={escudo} alt="" />
            <span>Municipalidad de Limón</span>
          </a>
          <div className="footer__redes">
            {redes.map((r) => (
              <a
                key={r.nombre}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                aria-label={r.nombre}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d={r.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__col footer__nav" aria-label="Secciones">
          <p className="footer__titulo">Secciones</p>
          <ul>
            {enlaces.map((e) => (
              <li key={e.label}>
                <a href={e.href}>{e.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col footer__contacto-bloque">
          <p className="footer__titulo">Contáctenos</p>
          <ul className="footer__contacto">
            <li>Ciudad de Limón, Costa Rica</li>
            <li>
              <a href="tel:+50627580303">(506) 2758-0303</a>
            </li>
            <li>
              <a href="mailto:info@municlimon.go.cr">info@municlimon.go.cr</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__creditos">
        <span>
          © {new Date().getFullYear()} Municipalidad de Limón
        </span>
        <span>Desarrollado por Jeremy Montero y David Fernández</span>
      </div>
    </footer>
  )
}

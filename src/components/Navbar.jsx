import { useEffect, useRef, useState } from 'react'
import escudo from '../assets/escudo-limon.png'

const conozcanos = [
  { label: 'Mi Cantón', href: '#/conozcanos/mi-canton' },
  { label: 'Mi Municipalidad', href: '#/conozcanos/mi-municipalidad' },
  { label: 'Alcaldía', href: '#/conozcanos/alcaldia' },
  { label: 'Concejo Municipal', href: '#/conozcanos/concejo-municipal' },
]

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function fuera(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setAbierto(false)
    }
    document.addEventListener('click', fuera)
    return () => document.removeEventListener('click', fuera)
  }, [])

  return (
    <header className="navbar">
      <a className="navbar__marca" href="#/">
        <img src={escudo} alt="Escudo de la Municipalidad de Limón" />
        <span>Municipalidad<br />de Limón</span>
      </a>

      <nav className="navbar__nav">
        <a href="#/">Inicio</a>

        <div className="navbar__drop" ref={menuRef}>
          <button aria-expanded={abierto} onClick={() => setAbierto((v) => !v)}>
            Conózcanos <span aria-hidden="true">▾</span>
          </button>
          {abierto && (
            <div className="navbar__submenu">
              {conozcanos.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="#/gestion-municipal">Gestión Municipal</a>
        <a href="#/obras-y-proyectos">Obras y Proyectos</a>
        <a href="#/transparencia">Transparencia</a>
        <a href="#/turismo">Turismo</a>
        <a href="#/contacto">Contacto</a>
      </nav>
    </header>
  )
}

import { useEffect, useRef, useState } from 'react'
import escudo from '../assets/escudo-limon.png'
import { conozcanos } from '../data/conozcanos.js'
import { gestion } from '../data/gestion.js'

function Panel({ menu, base, onNavegar }) {
  return (
    <div className="megamenu">
      <div className="megamenu__inner">
        {menu.map((cat) => (
          <div key={cat.slug} className="megamenu__col">
            <p className="megamenu__titulo">{cat.label}</p>
            <ul>
              {cat.items.map((item) => (
                <li key={item.slug || item.href}>
                  <a
                    href={item.href || `#/${base}/${cat.slug}/${item.slug}`}
                    target={item.externo ? '_blank' : undefined}
                    rel={item.externo ? 'noreferrer' : undefined}
                    onClick={onNavegar}
                  >
                    {item.label}
                    {item.mas && <span aria-hidden="true"> ›</span>}
                    {item.externo && <span aria-hidden="true"> ↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [menu, setMenu] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    function fuera(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setMenu(null)
    }
    document.addEventListener('click', fuera)
    return () => document.removeEventListener('click', fuera)
  }, [])

  const cerrar = () => setMenu(null)
  const alternar = (k) => setMenu((m) => (m === k ? null : k))

  return (
    <header className="navbar">
      <a className="navbar__marca" href="#/" onClick={cerrar}>
        <img src={escudo} alt="Escudo de la Municipalidad de Limón" />
        <span>
          Municipalidad
          <br />
          de Limón
        </span>
      </a>

      <nav className="navbar__nav" ref={navRef}>
        <a href="#/" onClick={cerrar}>
          Inicio
        </a>

        <div className="navbar__drop">
          <button
            aria-expanded={menu === 'conozcanos'}
            onClick={() => alternar('conozcanos')}
          >
            Conózcanos <span aria-hidden="true">▾</span>
          </button>
          {menu === 'conozcanos' && (
            <Panel menu={conozcanos} base="conozcanos" onNavegar={cerrar} />
          )}
        </div>

        <div className="navbar__drop">
          <button
            aria-expanded={menu === 'gestion'}
            onClick={() => alternar('gestion')}
          >
            Gestión Municipal <span aria-hidden="true">▾</span>
          </button>
          {menu === 'gestion' && (
            <Panel menu={gestion} base="gestion-municipal" onNavegar={cerrar} />
          )}
        </div>

        <a href="#/obras-y-proyectos" onClick={cerrar}>
          Obras y Proyectos
        </a>
        <a href="#/transparencia" onClick={cerrar}>
          Transparencia
        </a>
        <a href="#/turismo" onClick={cerrar}>
          Turismo
        </a>
        <a href="#/contacto" onClick={cerrar}>
          Contacto
        </a>
      </nav>
    </header>
  )
}

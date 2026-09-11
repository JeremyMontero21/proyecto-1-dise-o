import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Carrusel from './components/Carrusel.jsx'
import Historia from './components/Historia.jsx'
import Servicios from './components/Servicios.jsx'
import Horarios from './components/Horarios.jsx'
import Ubicacion from './components/Ubicacion.jsx'
import EnProgreso from './components/EnProgreso.jsx'
import Footer from './components/Footer.jsx'
import { conozcanos } from './data/conozcanos.js'
import { gestion } from './data/gestion.js'

const MENUS = {
  conozcanos: { titulo: 'Conózcanos', datos: conozcanos },
  'gestion-municipal': { titulo: 'Gestión Municipal', datos: gestion },
}

// Resto del menú principal: todavía sin contenido propio, van a "en construcción".
const PAGINAS = {
  'obras-y-proyectos': 'Obras y Proyectos',
  transparencia: 'Transparencia',
  turismo: 'Turismo',
  contacto: 'Contacto',
}

// Enrutado simple por hash: #/<pagina> o #/<menu>/<categoria>/<opcion>
function resolver(hash) {
  const partes = hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  if (partes.length === 0) return null

  if (partes.length === 1) {
    const titulo = PAGINAS[partes[0]]
    if (!titulo) return null
    return { titulo, seccion: 'Menú principal' }
  }

  const menu = MENUS[partes[0]]
  const cat = menu?.datos.find((c) => c.slug === partes[1])
  const item = cat?.items.find((i) => i.slug === partes[2])
  if (!cat || !item) return null
  return { titulo: item.label, seccion: `${menu.titulo} › ${cat.label}` }
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    function alCambiar() {
      setHash(window.location.hash)
    }
    window.addEventListener('hashchange', alCambiar)
    return () => window.removeEventListener('hashchange', alCambiar)
  }, [])

  // Rutas (#/...) van arriba del todo; anclas dentro del inicio (#historia,
  // #noticias...) bajan hasta ese bloque de la página.
  useEffect(() => {
    if (!hash || hash === '#/' || hash.startsWith('#/')) {
      window.scrollTo(0, 0)
      return
    }
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  const wip = resolver(hash)

  return (
    <>
      <Navbar />
      <main>
        {wip ? (
          <EnProgreso titulo={wip.titulo} seccion={wip.seccion} />
        ) : (
          <>
            <Hero />
            <Carrusel />
            <Historia />
            <Servicios />
            <Horarios />
            <Ubicacion />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Carrusel from './components/Carrusel.jsx'
import EnProgreso from './components/EnProgreso.jsx'
import Footer from './components/Footer.jsx'
import { conozcanos } from './data/conozcanos.js'
import { gestion } from './data/gestion.js'

const MENUS = {
  conozcanos: { titulo: 'Conózcanos', datos: conozcanos },
  'gestion-municipal': { titulo: 'Gestión Municipal', datos: gestion },
}

// Enrutado simple por hash: #/<menu>/<categoria>/<opcion>
function resolver(hash) {
  const m = hash.match(/^#\/([^/]+)\/([^/]+)\/([^/]+)/)
  if (!m) return null
  const menu = MENUS[m[1]]
  const cat = menu?.datos.find((c) => c.slug === m[2])
  const item = cat?.items.find((i) => i.slug === m[3])
  if (!cat || !item) return null
  return { titulo: item.label, seccion: `${menu.titulo} › ${cat.label}` }
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    function alCambiar() {
      setHash(window.location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', alCambiar)
    return () => window.removeEventListener('hashchange', alCambiar)
  }, [])

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
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

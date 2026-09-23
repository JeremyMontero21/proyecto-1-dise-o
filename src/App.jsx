import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Carrusel from './components/Carrusel.jsx'
import Historia from './components/Historia.jsx'
import Vision from './components/Vision.jsx'
import Directorio from './components/Directorio.jsx'
import Contacto from './components/Contacto.jsx'
import Servicios from './components/Servicios.jsx'
import Horarios from './components/Horarios.jsx'
import Ubicacion from './components/Ubicacion.jsx'
import DespachoAlcaldia from './components/DespachoAlcaldia.jsx'
import GestionVicealcaldia from './components/GestionVicealcaldia.jsx'
import InformesGestion from './components/InformesGestion.jsx'
import PlanesMunicipales from './components/PlanesMunicipales.jsx'
import InformeLabores from './components/InformeLabores.jsx'
import NormativaLegal from './components/NormativaLegal.jsx'
import SecretariaConsejo from './components/SecretariaConsejo.jsx'
import ServicioCliente from './components/ServicioCliente.jsx'
import GestionServiciosGenerales from './components/GestionServiciosGenerales.jsx'
import TecnologiasInformacion from './components/TecnologiasInformacion.jsx'
import SeguridadCiudadana from './components/SeguridadCiudadana.jsx'
import Accesibilidad from './components/Accesibilidad.jsx'
import NotFound from './components/NotFound.jsx'
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

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'mi-canton' &&
    partes[2] === 'historia-del-canton'
  ) {
    return {
      titulo: 'Historia del cantón',
      seccion: 'Conózcanos › Mi Cantón',
      tipo: 'historia-canton',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'mi-municipalidad' &&
    partes[2] === 'historia-municipal'
  ) {
    return {
      titulo: 'Historia municipal',
      seccion: 'Conózcanos › Mi Municipalidad',
      tipo: 'historia-municipal',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'mi-municipalidad' &&
    (partes[2] === 'sobre-nosotros' || partes[2] === 'vision')
  ) {
    return {
      titulo: 'Sobre nosotros',
      seccion: 'Conózcanos › Mi Municipalidad',
      tipo: 'sobre-nosotros',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'alcaldia' &&
    partes[2] === 'despacho-de-la-alcaldia'
  ) {
    return {
      titulo: 'Despacho de la Alcaldía',
      seccion: 'Conózcanos › Alcaldía',
      tipo: 'despacho-alcaldia',
    }
  }

  if (partes[0] === '404') {
    return {
      titulo: 'Página no disponible',
      seccion: 'Error 404',
      tipo: 'not-found',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'alcaldia' &&
    partes[2] === 'gestion-de-vicealcaldia'
  ) {
    return {
      titulo: 'Gestión de Vicealcaldía',
      seccion: 'Conózcanos › Alcaldía',
      tipo: 'gestion-vicealcaldia',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'alcaldia' &&
    partes[2] === 'informes-de-gestion'
  ) {
    return {
      titulo: 'Informes de Gestión',
      seccion: 'Conózcanos › Alcaldía',
      tipo: 'informes-gestion',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'alcaldia' &&
    partes[2] === 'planes-municipales'
  ) {
    return {
      titulo: 'Planes Municipales',
      seccion: 'Conózcanos › Alcaldía',
      tipo: 'planes-municipales',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'alcaldia' &&
    partes[2] === 'informe-de-labores'
  ) {
    return {
      titulo: 'Informe de Labores',
      seccion: 'Conózcanos › Alcaldía',
      tipo: 'informe-labores',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'alcaldia' &&
    partes[2] === 'normativa-legal'
  ) {
    return {
      titulo: 'Normativa Legal',
      seccion: 'Conózcanos › Alcaldía',
      tipo: 'normativa-legal',
    }
  }
  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'concejo-municipal' &&
    partes[2] === 'secretaria-del-concejo'
  ) {
    return {
      titulo: 'Secretaría del Concejo',
      seccion: 'Conózcanos › Concejo Municipal',
      tipo: 'secretaria-consejo',
    }
  }

  if (
    partes[0] === 'gestion-municipal' &&
    partes[1] === 'direccion-administrativa' &&
    partes[2] === 'servicio-al-cliente' &&
    (!partes[3] || partes[3] === 'ventanilla-unica' || partes[3] === 'inspeccion-general')
  ) {
    return {
      titulo: !partes[3] ? 'Servicio al Cliente' : partes[3] === 'ventanilla-unica' ? 'Ventanilla Única' : 'Inspección General',
      seccion: 'Gestión Municipal › Dirección Administrativa',
      tipo: 'servicio-cliente',
    }
  }

  if (
    partes[0] === 'gestion-municipal' &&
    partes[1] === 'direccion-administrativa' &&
    partes[2] === 'gestion-y-servicios-generales'
  ) {
    return {
      titulo: 'Gestión y Servicios Generales',
      seccion: 'Gestión Municipal › Dirección Administrativa',
      tipo: 'gestion-servicios-generales',
    }
  }

  if (
    partes[0] === 'gestion-municipal' &&
    partes[1] === 'direccion-administrativa' &&
    partes[2] === 'tecnologias-de-informacion'
  ) {
    return {
      titulo: 'Tecnologías de Información',
      seccion: 'Gestión Municipal › Dirección Administrativa',
      tipo: 'tecnologias-informacion',
    }
  }

  if (
    partes[0] === 'gestion-municipal' &&
    partes[1] === 'direccion-administrativa' &&
    partes[2] === 'gestion-de-seguridad-ciudadana-y-vial'
  ) {
    return {
      titulo: 'Gestión de Seguridad Ciudadana y Vial',
      seccion: 'Gestión Municipal › Dirección Administrativa',
      tipo: 'seguridad-ciudadana',
    }
  }

  if (
    partes[0] === 'conozcanos' &&
    partes[1] === 'mi-municipalidad' &&
    partes[2] === 'directorio-telefonico'
  ) {
    return {
      titulo: 'Directorio telefónico',
      seccion: 'Conózcanos › Mi Municipalidad',
      tipo: 'directorio',
    }
  }

  if (partes.length === 1 && partes[0] === 'contacto') {
    return { titulo: 'Contacto', seccion: 'Menú principal', tipo: 'contacto' }
  }

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
  const mostrarHistoriaDetalle =
    wip?.tipo === 'historia-canton' || wip?.tipo === 'historia-municipal'

  return (
    <>
      <Navbar />
      <main>
        {wip ? (
          wip.tipo === 'contacto' ? (
            <Contacto />
          ) : wip.tipo === 'directorio' ? (
            <Directorio />
          ) : wip.tipo === 'despacho-alcaldia' ? (
            <DespachoAlcaldia />
          ) : wip.tipo === 'gestion-vicealcaldia' ? (
            <GestionVicealcaldia />
          ) : wip.tipo === 'informes-gestion' ? (
            <InformesGestion />
          ) : wip.tipo === 'planes-municipales' ? (
            <PlanesMunicipales />
          ) : wip.tipo === 'informe-labores' ? (
            <InformeLabores />
          ) : wip.tipo === 'normativa-legal' ? (
            <NormativaLegal />
          ) : wip.tipo === 'secretaria-consejo' ? (
            <SecretariaConsejo />
          ) : wip.tipo === 'servicio-cliente' ? (
            <ServicioCliente />
          ) : wip.tipo === 'gestion-servicios-generales' ? (
            <GestionServiciosGenerales />
          ) : wip.tipo === 'tecnologias-informacion' ? (
            <TecnologiasInformacion />
          ) : wip.tipo === 'seguridad-ciudadana' ? (
            <SeguridadCiudadana />
          ) : wip.tipo === 'not-found' ? (
            <NotFound />
          ) : wip.tipo === 'sobre-nosotros' || wip.tipo === 'vision' ? (
            <Vision />
          ) : mostrarHistoriaDetalle ? (
            <Historia detalle tipo={wip.tipo} />
          ) : (
            <EnProgreso titulo={wip.titulo} seccion={wip.seccion} />
          )
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
      <Accesibilidad />
    </>
  )
}

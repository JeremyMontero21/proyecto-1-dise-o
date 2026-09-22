import { useState } from 'react'

const contactos = [
  ['Alcaldía', 'alcaldia@municlimon.go.cr', '2758-4444', ''],
  ['Vice Alcaldía', 'vicealcaldia@municlimon.go.cr', '2758-1432', ''],
  ['Archivo', 'viviana.estrada@municlimon.go.cr', '2758-2468', ''],
  ['Almacenamiento', 'kindly.villalobos@municlimon.go.cr', '2101-6941', ''],
  ['Auditoría', 'albin.vega@municlimon.go.cr', '2758-8176', '206 / 207'],
  ['Cobros', 'graylin.solano@municlimon.go.cr', '2798-1101', ''],
  ['Bienestar familiar', 'beatriz.soto@municlimon.go.cr', '2573-0250', ''],
  ['Casa de la cultura', 'kenny.williams@municlimon.go.cr', '2758-1046', ''],
  ['CECOEXA', 'junior.marin@municlimon.go.cr', '2758-2390', ''],
  ['CECUDI Barrio Cerro Mocho', 'pamela.padilla@municlimon.go.cr', '2572-1584', ''],
  ['CECUDI Barrio El Triunfo', 'pamela.padilla@municlimon.go.cr', '2572-1584', ''],
  ['Cementerio de Limón Centro', '', '2758-4923', ''],
  ['Comunicación', 'alexa.cuza@municlimon.go.cr', '2758-4444', ''],
  ['Contabilidad', 'astor.velasquez@municlimon.go.cr', '2798-2436', ''],
  ['Contraloría de servicios', 'harol.aguilar@municlimon.go.cr', '2758-4444', '115'],
  ['Control interno', 'manuel.azofeifa@municlimon.go.cr', '2758-4444', ''],
  ['Concejo municipal', 'concejo.presidencia@municlimon.go.cr', '2758-0319', ''],
  ['Dirección administrativa', 'direccion.administrativa@municlimon.go.cr', '2758-0608', '121'],
  ['Dirección de ingeniería', 'antonio.babb@municlimon.go.cr', '2758-4444', '300'],
  ['Dirección financiera', 'gilberto.brown@municlimon.go.cr', '2798-2939', ''],
  ['Electromecánica', 'gerald.walker@municlimon.go.cr', '2758-4444', '102'],
  ['Gestión de seguridad', 'jeison.arce@municlimon.go.cr', '2758-4444', '124'],
  ['Departamento legal', 'gustavo.chavez@municlimon.go.cr', '2758-4444', ''],
  ['Mercado municipal', 'silvia.rojas@municlimon.go.cr', '2798-2682', ''],
  ['Monitoreo', 'mirta.hibbert@municlimon.go.cr', '2758-4274', ''],
  ['Parquímetros', 'aaron.acuna@municlimon.go.cr', '2758-3948', ''],
  ['Planificación', 'kennibeth.winter@municlimon.go.cr', '2758-4444', '309'],
  ['Plataforma', 'plataforma.servicios@municlimon.go.cr', '2798-4018', ''],
  ['Policía municipal', 'policia.municipal@municlimon.go.cr', '2758-4444', '124'],
  ['Presupuesto', 'erick.rios@municlimon.go.cr', '2758-4444', '110'],
  ['Proveeduría', 'proveeduria@municlimon.go.cr', '2758-0219', '111'],
  ['Unidad de desarrollo social', 'jessica.hernandez@municlimon.go.cr', '2573-0205', '300'],
  ['Recolección de desechos', 'joselee.rojas@municlimon.go.cr', '2797-0077', ''],
  ['Rentas / Patentes', 'rentas@municlimon.go.cr', '2758-7220', '112'],
  ['Servicios generales', 'rafael.oregon@municlimon.go.cr', '2758-4444', '101'],
  ['Servicios y proyectos comunitarios', 'yocelyn.downs@municlimon.go.cr', '2573-0250', ''],
  ['Talento humano', 'recursos.humanos@municlimon.go.cr', '2758-0219', '114'],
  ['Taller de operaciones', 'direccion.operaciones@municlimon.go.cr', '2797-0076', ''],
  ['Tecnología de información', 'gti@municlimon.go.cr', '2758-4444', '117'],
  ['Tesorería', 'tesoreria@municlimon.go.cr', '2798-3814', ''],
  ['Turismo', 'turismo@municlimon.go.cr', '2758-4444', ''],
  ['Unidad de bienes inmuebles', 'orlando.chavarria@municlimon.go.cr', '2758-4444', '208'],
  ['Unidad de censo y catastro', 'erwin.amador@municlimon.go.cr', '2758-4444', '219'],
  ['Unidad técnica y estudio', 'ute@municlimon.go.cr', '2758-4444', '221 / 216'],
  ['Zona marítimo terrestre / gestión ambiental', 'juan.barrantes@municlimon.go.cr', '2758-4444', '211'],
]

function iniciales(nombre) {
  return nombre
    .split(' ')
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()
}

export default function Directorio() {
  const [busqueda, setBusqueda] = useState('')
  const resultados = contactos.filter(([departamento, correo]) =>
    `${departamento} ${correo}`.toLowerCase().includes(busqueda.toLowerCase()),
  )

  return (
    <section className="directorio">
      <div className="directorio__hero">
        <div>
          <span className="directorio__eyebrow">Mi Municipalidad</span>
          <h1>Directorio telefónico</h1>
          <p>
            Encuentra rápidamente el departamento que necesitas y sus canales de
            atención.
          </p>
        </div>
        <div className="directorio__central">
          <span>Central telefónica</span>
          <a href="tel:+50627584444">2758-4444</a>
          <small>Fax: 2798-2727</small>
        </div>
      </div>

      <div className="directorio__contacto">
        <span className="directorio__contacto-icono" aria-hidden="true">@</span>
        <div>
          <strong>Correo institucional</strong>
          <a href="mailto:alcaldia@municlimon.go.cr">alcaldia@municlimon.go.cr</a>
        </div>
      </div>

      <div className="directorio__barra">
        <div>
          <span className="directorio__eyebrow">Contactos municipales</span>
          <p>{resultados.length} departamentos disponibles</p>
        </div>
        <label className="directorio__buscador">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Buscar departamento..."
            aria-label="Buscar departamento"
          />
        </label>
      </div>

      <div className="directorio__grid">
        {resultados.map(([departamento, correo, telefono, extension]) => (
          <article className="directorio__card" key={departamento}>
            <div className="directorio__avatar">{iniciales(departamento)}</div>
            <div className="directorio__datos">
              <h2>{departamento}</h2>
              <div className="directorio__linea">
                <span aria-hidden="true">☎</span>
                <a href={`tel:+506${telefono.replace(/[^\d]/g, '')}`}>{telefono}</a>
                {extension && <small>Ext. {extension}</small>}
              </div>
              {correo && (
                <div className="directorio__linea directorio__linea--correo">
                  <span aria-hidden="true">@</span>
                  <a href={`mailto:${correo}`}>{correo}</a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {resultados.length === 0 && (
        <p className="directorio__vacio">No encontramos un departamento con ese nombre.</p>
      )}

      <a className="boton boton--verde directorio__volver" href="#/">
        Volver al inicio
      </a>
    </section>
  )
}
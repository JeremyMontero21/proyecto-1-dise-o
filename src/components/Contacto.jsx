const canales = [
  {
    icono: '⌖',
    titulo: 'Visítanos',
    detalle: 'Diagonal a la Funeraria Hilton, 100 metros norte del Estadio Juan Gobán.',
    enlace: 'https://maps.google.com/maps?ll=9.991998,-83.033538&z=18&t=m',
    texto: 'Abrir ubicación',
  },
  {
    icono: '@',
    titulo: 'Escríbenos',
    detalle: 'alexa.cuza@municlimon.go.cr',
    enlace: 'mailto:alexa.cuza@municlimon.go.cr',
    texto: 'Enviar correo',
  },
  {
    icono: '☎',
    titulo: 'Llámanos',
    detalle: '2758-4444 / 2758-7073',
    enlace: 'tel:+50627584444',
    texto: 'Llamar ahora',
  },
]

export default function Contacto() {
  return (
    <section className="contacto">
      <div className="contacto__hero">
        <span>Mi Municipalidad</span>
        <h1>Estamos para escucharte</h1>
        <p>
          En la Municipalidad de Limón nos interesa tu opinión. Comunícate con
          nosotros para presentar una consulta, sugerencia, denuncia o queja.
        </p>
      </div>

      <div className="contacto__canales">
        {canales.map((canal) => (
          <article className="contacto__card" key={canal.titulo}>
            <span className="contacto__icono" aria-hidden="true">{canal.icono}</span>
            <div>
              <h2>{canal.titulo}</h2>
              <p>{canal.detalle}</p>
              <a href={canal.enlace} target={canal.titulo === 'Visítanos' ? '_blank' : undefined} rel="noreferrer">
                {canal.texto} <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="contacto__contenido">
        <div className="contacto__mensaje">
          <span className="contacto__eyebrow">Atención ciudadana</span>
          <h2>Tu voz ayuda a construir un mejor Limón</h2>
          <p>
            Para recibir atención, escríbenos directamente al correo institucional
            o comunícate con la central telefónica. Nuestro equipo canalizará tu
            solicitud hacia el departamento correspondiente.
          </p>
          <a className="boton boton--verde" href="mailto:alexa.cuza@municlimon.go.cr">
            Enviar una consulta
          </a>
        </div>
        <div className="contacto__mapa">
          <iframe
            title="Ubicación de la Municipalidad de Limón"
            src="https://www.google.com/maps?q=9.991998,-83.033538&z=18&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="contacto__redes">
        <span>Síguenos en redes sociales</span>
        <a href="https://www.facebook.com/Municipalidadlimon" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.youtube.com/channel/UCHsFH0upLb_2qvMIXdlEMgQ" target="_blank" rel="noreferrer">YouTube</a>
      </div>

      <a className="boton boton--verde contacto__volver" href="#/">
        Volver al inicio
      </a>
    </section>
  )
}
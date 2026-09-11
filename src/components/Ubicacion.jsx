export default function Ubicacion() {
  return (
    <section id="ubicacion" className="ubicacion">
      <h2>Nuestra ubicación</h2>
      <div className="ubicacion__mapa">
        <iframe
          title="Ubicación del edificio municipal de Limón"
          src="https://www.google.com/maps?q=Municipalidad+de+Lim%C3%B3n,+Costa+Rica&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  )
}

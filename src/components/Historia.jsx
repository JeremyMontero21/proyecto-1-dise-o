import escudo from '../assets/escudo-limon.png'

export default function Historia() {
  return (
    <section id="historia" className="historia">
      <img
        className="historia__escudo"
        src={escudo}
        alt="Escudo de la Municipalidad de Limón"
      />
      <div>
        <h2>Historia y geografía de Limón</h2>
        <p>
          Puerto Limón nació como puerto marítimo en el siglo XIX y se convirtió
          en la puerta de entrada del Caribe costarricense. Su historia mezcla
          las culturas afrocaribeña, indígena y europea, dando forma a la
          identidad multicultural que distingue hoy a la provincia. Ubicada
          sobre la costa Caribe, limita con Nicaragua al norte y Panamá al sur,
          y es la provincia con mayor extensión de litoral del país.
        </p>
        <a
          className="boton boton--verde"
          href="#/conozcanos/mi-canton/historia-del-canton"
        >
          Leer más
        </a>
      </div>
    </section>
  )
}

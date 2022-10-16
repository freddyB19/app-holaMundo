import games from "../sesion_game/games";

const TiposDeDatos = () => {
  const view = `
  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <p>
          Todos los datos en un algoritmo o programa tienen un tipo asociado con ellos. Un dato puede ser un simple caracter, tal como <strong><em>'b'</em></strong>, o un valor entero tal como <strong><em>35</em></strong>.
        </p>
        <p>
          El tipo determina el <strong>conjunto de valores que puede tomar un dato</strong> y el <strong>tipo de operaciones</strong> que se le pueden aplicar.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <h4>Tipos de Datos</h4>
        <p>Entre los tipos de datos más comunes que existen en los lenguajes de programación, se encuentran los siguientes:</p>

        <p><span class="fw-semibold">Datos Numéricos.</span> Permiten representar valores de forma numérica, esto incluye a los números enteros y los reales.Con este tipo de datos se pueden realizar las operaciones aritméticas comunes.</p>

        <p><span class="fw-semibold">Datos Alfanuméricos (Cadenas).</span> Estos datos son una secuencia de caracteres alfanuméricos, en otras palabras texto. Esto incluye nombres de personas, direcciones, etc.</p>
        <p>Es posible representar números como alfanuméricos, pero éstos pierden sus propiedades matemáticas, es decir, no es posible hacer operaciones aritméticas con datos alfanuméricos.</p>

        <p><span class="fw-semibold">Datos Lógicos.</span> Son aquellos que sólo pueden tener dos valores: cierto o falso ya que representan el resultado de una comparación entre otros datos (numéricos o alfanuméricos).</p>
      </div>
    </div>
  </div>

  ${games()}

  `;
  return view;
}

export default TiposDeDatos;

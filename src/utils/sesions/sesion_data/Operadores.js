import games from "../sesion_game/games";

const Operadores = () => {
  const view = `

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <p>
          Los operadores y las
          operaciones que se pueden realizar con ellos se
          clasifican en:
        </p>

        <h4>Concatenación (o Alfanuméricos)</h4>
        <p>
          Una operación de concatenación involucra dos o mas valores alafanuméricos o cadenas, cuyo contenido se va agregando al resultado final, evaluando de izquierda a derecha. Generalmente representamos esta operación con el operador +, aunque algunos lenguajes de programación usan un símbolo diferente
        </p>
        <p class="bg-dark text-center p-3 rounded">
          <span class="text-warning">"Hola "</span> <span class="text-danger fs-5"> + </span> <span class="text-warning">"mundo"</span> <span class="text-light">dará como resultado</span> <span class="text-warning">"Hola mundo"</span>
        </p>

        <hr class="my-5">

        <h4>Asignación</h4>
        <p>
          La funsión de este operador es asignar valores (Tipo de dato) a nuestras variables. <br>
          Este operador en ocasiones, se considera una <strong>expresión</strong>. Este es un tema por ahora no incluiremos en tu aprendizaje.
        </p>
        <p class="bg-dark text-center p-3 rounded">
          <span class="text-light">variable</span> <span class="text-danger fs-5"> <- </span> <span class="text-warning">"Hola mundo"</span>
        </p>

        <hr class="my-5">

        <h4>Aritméticos</h4>
        <p>
          Posibilitan las operaciones entre datos
          de tipo numérico y dan como resultado otro valor de
          tipo numérico
        </p>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Operación</th>
              <th scope="col">Operador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Suma</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> + </span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Resta</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> - </span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Multiplicación</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> * </span></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>División</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> / </span></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Potenciación </td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> ^ </span></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Módulo <small>(resto de la división entera)</small></td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> % </span></td>
            </tr>
          </tbody>
        </table>

        <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsOperadores">
          Más detalles sobre los Operadores Aritméticos
        </button>

        <div class="modal fade" id="tipsOperadores" tabindex="-1" aria-labelledby="tipsOperadores" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="tipsOperadores">Prioridad de los Operadores Aritméticos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>
                  Las operaciones aritméticas deben evaluarse de acuerdo a la importancia del operador, es decir, de acuerdo a su prioridad, de la siguiente forma:
                </p>
                <ul>
                  <li>Todas las expresiones entre paréntesis se evalúan primero.</li>
                  <li>Las expresiones con paréntesis anidados se evalúan de adentro hacia afuera, el paréntesis más interno se evalúa primero.</li>
                  <li>Dentro de una misma expresión los operadores se evalúan en el siguiente orden
                    <ol>
                      <li>Exponenciación</li>
                      <li>Multiplicación, división, modulo</li>
                      <li>Suma y resta</li>
                    </ol>
                  </li>
                  <li>Los operadores en una misma expresión con igual nivel de prioridad se evalúan de izquierda a derecha</li>
                </ul>
                <div class="bg-dark rounded fs-4 p-2 text-light">
                  <span class="text-secondary mx-3">1</span> <span class="mx-5"></span><span class="mx-2"></span>4 <span class="text-danger">+</span> 2 <span class="text-danger">*</span> 5 <span class="text-danger">=</span> 14 <br>
                  <span class="text-secondary mx-3">2</span> <span class="mx-5"></span><span class="mx-2"></span>4 <span class="text-danger">+</span> 10 <span class="text-danger">=</span> 14 <br>
                  <span class="text-secondary mx-3">3</span> <span class="mx-5"></span><span class="mx-2"></span>23 <span class="text-danger">*</span> 4 <span class="text-danger">/</span> 2 <span class="text-danger">=</span> 46 <br>
                  <span class="text-secondary mx-3">4</span> <span class="mx-5"></span><span class="mx-2"></span>92 <span class="text-danger">/</span> 2 <span class="text-danger">=</span> 46 <br>
                  <span class="text-secondary mx-3">5</span> <span class="mx-5"></span><span class="mx-2"></span>3 <span class="text-danger">+</span> 5 <span class="text-danger">*</span> <span class="text-warning"> ( </span>10 <span class="text-danger">-</span> <span class="text-warning"> ( </span>2 <span class="text-danger">+</span> 4<span class="text-warning"> ) </span><span class="text-warning"> ) </span> <span class="text-danger">=</span> 23<br>
                  <span class="text-secondary mx-3">6</span> <span class="mx-5"></span><span class="mx-2"></span>3 <span class="text-danger">+</span> 5 <span class="text-danger">*</span> <span class="text-warning"> ( </span>10 <span class="text-danger">-</span> 6 <span class="text-warning"> ) </span> <span class="text-danger">=</span> 3 <span class="text-danger">+</span> 5 <span class="text-danger">*</span> 4 <span class="text-danger">=</span> 3 <span class="text-danger">+</span> 20 <span class="text-danger">=</span> 23<br>
                  <span class="text-secondary mx-3">7</span> <span class="mx-5"></span><span class="mx-2"></span>3 <span class="text-danger">+</span> 5 <span class="text-danger">-</span> 14 <span class="text-danger">/</span> 2 <span class="text-danger">=</span> 1 <br>
                  <span class="text-secondary mx-3">8</span> <span class="mx-5"></span><span class="mx-2"></span>3 <span class="text-danger">+</span> 5 <span class="text-danger">-</span> 7 <span class="text-danger">=</span> 8 <span class="text-danger">-</span> 7 <span class="text-danger">=</span> 1 <br>
                  <span class="text-secondary mx-3">9</span> <span class="mx-5"></span><span class="mx-2"></span>2 <span class="text-danger">*</span> <span class="text-warning"> ( </span>1 <span class="text-danger">+</span> 3 <span class="text-danger">*</span> 4 <span class="text-warning"> ) </span> <span class="text-danger">=</span> 26 <br>
                  <span class="text-secondary mx-3">10</span> <span class="mx-5"></span>2 <span class="text-danger">*</span> <span class="text-warning"> ( </span>1 <span class="text-danger">+</span> 12 <span class="text-warning"> ) </span> <span class="text-danger">=</span> 2 <span class="text-danger">*</span> 13 <span class="text-danger">=</span> 26 <br>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-5">

        <h4>Relaciónales</h4>
        <p>
          Los operadores relacionales se utilizan para establecer una relación entre dos valores. Los valores se comparan entre sí y esta comparación produce un resultado de certeza o falsedad (verdadero o falso).
        </p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Operación</th>
              <th scope="col">Operador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mayor que</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> > </span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Menor que</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> < </span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mayor o igual que</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> >= </span></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Menor o igual que</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> <= </span></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Diferente</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> <> </span></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Igual</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> = </span></td>
            </tr>
          </tbody>
        </table>

        <hr class="my-5">

        <h4>Lógicos</h4>
        <p>
          Los operadores lógicos se utilizan para establecer relaciones entre valores lógicos. Estos valores pueden ser resultado de una expresión relacional.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Operación</th>
              <th scope="col">Operador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Conjunción</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> AND <span class="text-light fs-5">,</span>  & <span class="text-light fs-5">,</span> Y </span></td>

            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Disyunción</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> OR <span class="text-light fs-5">,</span>  | <span class="text-light fs-5">,</span> O </span></td>

            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Negación</td>
              <td class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> NOT <span class="text-light fs-5">,</span> ~ <span class="text-light fs-5">,</span> No </span></td>

            </tr>
          </tbody>
        </table>

        <p class = "alert alert-info">
          Hay que aclarar que muchos de estos símbolos pueden ser diferentes dependiendo del lenguaje de programación.
        </p>

        <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsLógicos">
          Más detalles sobre los Operadores Lógicos
        </button>

        <div class="modal fade" id="tipsLógicos" tabindex="-1" aria-labelledby="tipsLógicos" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="tipsLógicos">Prioridad de los Operadores Lógicos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Los operadores relacionales se evalúan en el siguiente orden.</p>
                <ul>
                  <li class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> NOT No ~ </span></li> <br>
                  <li class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> AND Y & </span></li> <br>
                  <li class="bg-dark text-center rounded"><span class="text-danger fs-4 fw-bold"> OR O | </span></li> <br>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  ${games()}
  `;
  return view;
}

export default Operadores;

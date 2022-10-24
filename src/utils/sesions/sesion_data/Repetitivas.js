import games from "../sesion_game/games";


const Repetitivas = () => {
  const view = `
  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <p>
          En programación existen al menos dos tipos de
          estructuras repetitivas, las cuales a su vez tienen
          variantes en los diferentes lenguajes de programación.
          La característica común es que ambos tipos permiten
          ejecutar una o varias instrucciones:
        </p>

        <ul class="list-group mx-auto shadow-sm">
          <li class="list-group-item list-group-item-info">Un número determinado de veces.</li>
          <li class="list-group-item">Mientras se cumpla una condición.</li>
        </ul>

        <p class="mt-3">
          Ahora bien, estás estructuras pueden clasificarse de otra manera,
          esto es debido al conjunto de acciones que pueden ejecutarse en una cantidad especifica
          de veces. Esta cantidad puede ser fija
          (previamente determinada por el programador) o
          puede ser variable
          (estar en función de algún dato dentro del programa).
          En este caso los ciclos se clasifican de la siguiente manera:
        </p>

        <ul class="list-group mx-auto shadow-sm">
          <li class="list-group-item list-group-item-info">Con un número determinado de iteraciones.</li>
          <li class="list-group-item">Con un número indeterminado de iteraciones.</li>
        </ul>

      </div>
    </div>
  </div>

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <p class="my-3">
          A continuación te presentaremos los iteradores más comúnes en los lenguajes de programación.
        </p>

        <h3>Iterador Para-Hacer</h3>
        <small>Repite: Un número determinado de veces </small> <br>
        <small>Repite también: Con un número determinado de iteraciones. </small>

        <p class="mt-3">
          Los iteradores con un determinado número de iteraciones son aquellos en que el número de iteraciones se conoce antes de ejecutarse el ciclo. La forma de esta estructura es la siguiente:
        </p>
        <div class="text-bg-dark rounded fs-5 p-3">
          <p class="text-ligth"><span class="text-primary fw-bold">Para</span> variableControl<span class="text-primary fw-bold"> <- </span> valorInicial  <span class="text-primary fw-bold">Hasta</span> limite  <span class="text-primary fw-bold"> Hacer</span> </p>
          <p class="text-ligth"><span style="margin-left: 40px;">acción 1</span></p>
          <p class="text-ligth"><span style="margin-left: 40px;">acción 2</span></</p>
          <p class="text-ligth"><span style="margin-left: 40px;">...</span></</p>
          <p class="text-ligth"><span style="margin-left: 40px;">acción n;</span></</p>
          <p class="text-ligth"><span class="text-primary fw-bold">FinPara</span></p>
        </div>
        <button type="button" class="mt-3 btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tipsER">
          Aquí se puede analizar lo siguiente
        </button>


        <div class="modal fade" id="tipsER" tabindex="-1" aria-labelledby="tipsER" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="tipsER">Un análisis del código</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>
                  Aquí se puede analizar lo siguiente:
                </p>

                <ul>
                  <li> <strong>variableControl</strong> lleva la cuenta de cuantas iteraciones se han realizado en todo momento.
                      <br> <em>Estas son un nuevo tipo de variables, donde solo son usadas en estos tipos de casos.</em>
                  </li> <br>
                  <li> <strong>valorInicial</strong> es el valor desde donde empezará a contar la variable de control.</li> <br>
                  <li> <strong>limite</strong> es el valor que necesita alcanzar la variable de control para terminar el ciclo.</li>
                </ul>

                <p>
                  En este ciclo la variable de control toma el valor inicial del ciclo y el ciclo se repite hasta que la variable de control llegue al limite superior.
                </p>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>



        <hr class="mt-5">
        <h3>Iterador Mientras-Hacer</h3>
        <small>Repite: Mientras se cumpla una condición</small> <br>
        <small>Repite también: Con un número indeterminado de iteraciones. </small>
        <p class="mt-3">
          El ciclo <code>Mientras-Hacer</code> es una estructura que repetirá un proceso
          <strong>"N"</strong> veces, donde <strong>"N"</strong> puede ser fijo o variable.
          Para esto, la instrucción
          se vale de una condición que es la que debe cumplirse para que se siga
          ejecutando. Cuando la condición ya no se cumple, entonces ya no se ejecuta
          el proceso. La forma de esta estructura es la siguiente:
        </p>
        <div class="text-bg-dark rounded fs-5 p-3">
          <p class="text-ligth"><span class="text-primary fw-bold">Mientras</span> expresión_lógica  <span class="text-primary fw-bold"> Hacer</span> </p>
          <p class="text-ligth"><span style="margin-left: 40px;"> acciones-mientras </span></p>
          <p class="text-ligth"><span class="text-primary fw-bold">FinMientras</span></p>
        </div>

        <hr class="mt-5">
        <h3>Iterador Repetir-Hasta</h3>
        <small>Repite: Mientras se cumpla una condición </small> <br>
        <small>Repite también: Con un número indeterminado de iteraciones. </small>
        <p class="mt-3">
          El ciclo <code>Repetir-Hasta</code> es una estructura similar en algunas características,
          a la anterior. Repite un proceso una cantidad de veces, pero a diferencia del
          <code>Mientras-Hacer</code>, el <code>Repetir-Hasta</code> lo hace hasta que la condición se cumple y no
          mientras, como en el <code>Mientras-Hacer</code>. Por otra parte, esta estructura permite
          realizar el proceso cuando menos una vez, ya que la condición se evalúa al final
          del proceso, mientras que en el <code>Mientras-Hacer</code> puede ser que nunca llegue a entrar
          si la condición no se cumple desde un principio. La forma de esta estructura es la
          siguiente:
        </p>

        <div class="text-bg-dark rounded fs-5 p-3">
          <p class="text-ligth"><span class="text-primary fw-bold">Repetir</span></p>
          <p class="text-ligth"><span style="margin-left: 40px;">secuencias_de_acciones</span></p>
          <p class="text-ligth"><span class="text-primary fw-bold">Hasta Que</span> expresión_lógica</p>
        </div>




      </div>
    </div>
  </div>

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsEER">
          Ejemplo de las estructuras repetitivas
        </button>


        <div class="modal fade" id="tipsEER" tabindex="-1" aria-labelledby="tipsEER" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="tipsEER">Ejemplos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h4 class="display-6">Tabla de multiplicar</h4>
                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/Code_TablaDeMultiplicar.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de tabla de multiplicar en pseudocódigo"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Tabla de multiplicar (pseudocódigo).</p>
                </div>


                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/TablaDeMultiplicar.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de tabla de multiplicar en diagrama de flujos"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Tabla de multiplicar (diagrama de flujos).</p>
                </div>

                <hr class="my-5">

                <h4 class="display-6">Validación de ingreso de notas</h4>
                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/Code_Nota_Valida.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de validación de ingreso de notas en pseudocódigo"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Validar nota ingresada (pseudocódigo).</p>
                </div>

                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/Nota_Valida.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de validación de ingreso de notas en diagrama de flujos"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Validar nota ingresada (diagrama de flujos).</p>
                </div>

                <hr class="my-5">

                <h4 class="display-6">Suma usando iteradores</h4>
                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/Code_Suma_Ciclo_Repetir.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de suma usando iteradores en pseudocódigo"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Suma usando iteradores (pseudocódigo).</p>
                </div>

                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/Suma_Ciclo_Repetir.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de suma usando iteradores en diagrama de flujos"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Suma usando iteradores (diagrama de flujos).</p>
                </div>

                <div class="card mx-auto w-75 shadow-lg">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="images/tips.jpg" class="img-fluid rounded-start w-100 h-100" alt="sugerencias">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Recordatorio</h5>
                        <p class="card-text">Recuerdas cuando en la sesión pasada, <strong>Esctructuras condicionales</strong>, se mencionó que <em>"las proposiciones pueden ser sencillas o compuestas"</em>.</p>
                        <p class="card-text">En algunos de estos ejemplos veras proposiciones sencillas y compuestas. Si no lo recuerdas, dirigete a la sesión <strong>Esctructuras condicionales</strong>, y luego regresas para continuar con tu aprendizaje.</p>
                      </div>
                    </div>
                  </div>
                </div>

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

export default Repetitivas;

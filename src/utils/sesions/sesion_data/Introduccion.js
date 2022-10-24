const Introduccion = () => {
  const view = `
  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        Se define como programación al proceso de dotar a la computadora de un método para resolver un problema tipo y entregar un resultado.
      </div>
    </div>

    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        Se dice también que un programa está compuesto de dos partes:
        <dl class="row mt-3">
        <dt class="col-sm-3">Los cuales son:</dt>
          <dd class="col-sm-9">
            <p class="text-xl-start">
              <em>
                <strong>El código</strong>, que consiste en el conjunto de acciones a ejecutar,
                en programación a cada acción básica se la denomina genéricamente
                como instrucción. Cada instrucción podrá estar compuesta de un
                conjunto de elementos los cuales estudiaremos más adelante.
              </em>
            </p>

            <p>
              <em>
                <strong>La estructura de datos</strong> que consiste en la disposición de memoria
                elegida para almacenar los datos necesarios para resolver el problema,
                ya sea los parámetros o datos de entrada, los resultados intermedios o
                datos de proceso y la información resultante o datos de salida. A estos
                datos en programación se los denomina genéricamente como variables.
              </em>
            </p>
          </dd>
        </dl>

        <p class="mt-3">
          El computador es <em>una máquina que por sí sola no puede hacer nada, necesita
          ser programada, es decir, introducir a su memoria instrucciones que la guíen en
          lo que tiene que hacer</em>. Esta es una tarea que puede resultar
          muy compleja ya que la computadora solamente es capaz de realizar tareas
          muy básicas, por lo tanto hay que <strong>definir claramente cual será al proceso a
          ejecutar para hacer tareas complejas mediante pasos elementales</strong>.
        </p>

        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Un poco más de información
        </button>

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen  modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">CONCEPTOS BÁSICOS DE PROGRAMACIÓN</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Antes de seguir avanzando, es bueno que conoscas algunos de estos conceptos.</p>
                <h3>Variables</h3>
                <p>
                  En programación, las Variables son espacios de trabajo
                  (contenedores) reservados para guardar datos (valores).
                  El valor de una Variable puede cambiar en algún paso
                  del Algoritmo o permanecer invariable; por lo tanto, el
                  valor que contiene una variable es el del último dato
                  asignado a esta.
                </p>
                <hr>
                <h3>Constantes</h3>
                <p>
                  Las Constantes se crean de la misma forma
                  que las variables y consisten en datos que, luego de ser
                  asignados, no cambian en ninguna instrucción del
                  Algoritmo.
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <div class="col-lg-6 mx-auto text-center py-3">
          <div class="container px-5">
            <img src="images/inicio.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Error 404"  loading="lazy">
          </div>
          <h1 display-4 fw-bold font-monospace>¡Continuemos!</h1>
          <p class="lead mb-4">Es momento de seguir adelante</p>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Avanzar
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <!--<div class="modal-dialog"> -->
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <!-- <h1 class="modal-title fs-5" id="exampleModalLabel">¡¡Felicidades!!</h1> -->
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Proximamente</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <!--<div class="col-lg-12 mx-auto text-center">
                    <div class="container px-5">
                      <img src="images/p1.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Felicidades"  loading="lazy">
                      <p class="lead mb-4">Has pasado a un siguiente nivel</p>
                    </div>
                  </div>-->
                  <div class="col-lg-6 mx-auto text-center">
                    <div class="container px-5">
                      <img src="images/pp.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Error 404"  loading="lazy">
                    </div>
                    <h1 display-4 fw-bold font-monospace>¡Ohhh!</h1>
                    <p class="lead mb-4">Por ahora no se encuentra disponible está modalidad.<br> Lo sentimos</p>
                  </div>
                </div>

                <div class="modal-footer mx-auto">
                  <!-- <button type="button" class="btn btn-primary" data-bs-dismiss="modal" disabled>Guardar cambios</button> -->
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>



  `;
  return view;
}

export default Introduccion;

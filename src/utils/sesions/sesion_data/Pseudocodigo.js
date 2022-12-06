import games from "../sesion_game/games";


const Pseudocodigo = () => {
  const view = `
    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p>
            Su principal función es la de representar por pasos la
            solución a un problema o algoritmo, de la forma más
            detallada posible, utilizando un lenguaje cercano al
            de programación.
          </p>
          <p>
            El pseudocódigo <strong>no puede ejecutarse
            en un ordenador</strong> ya que entonces dejaría de ser pseudocódigo,
            como su propio nombre indica, se trata de un código falso
            (pseudo = falso), es un código escrito para que lo entienda
            el ser humano y no la máquina.
          </p>

          <p>
            <strong>Aprender a escribir pseudocódigo</strong> para la resolución de un
            problema permite hacer mucho más sencilla su programación
            en un lenguaje convencional, por lo que si estás interesado
            en comenzar tu formación como programador y no tienes
            conocimientos previos, resulta muy recomendable y conveniente
            formarse en pseudocódigo antes de empezar a estudiar cualquier
            lenguaje de programación.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <h3>Principales características del pseudocódigo</h3>
          <p>
            Su principal característica es la de representar un método que facilita la programación y solución del algoritmo del programa. También se caracteriza por ser una forma de representación, fácil de utilizar y de manipular, que simplifica el paso del programa, al lenguaje de programación.
          </p>
          <p>
            Otra característica que tiene el pseudocódigo es
            su <strong>independencia al código en el que se va a escribir
            el programa</strong>, proporcionando un método que facilita la
            posterior programación y la resolución del algoritmo del
            programa.
          </p>

          <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsPc">
            Ventajas y Desventajas
          </button>

          <div class="modal fade" id="tipsPc" tabindex="-1" aria-labelledby="tipsPc" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="tipsPc">Ventajas y desventajas del pseudocódigo</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Las tareas más complejas o repetitivas pueden representarse de forma más sencilla ya que está escrito en un lenguaje sencillo y no estructurado que permite una transición sencilla al lenguaje de programación, más complejo y estructurado.
                  </p>
                  <p>
                    El pseudocódigo <strong>llega donde el diagrama de flujo no lo hace</strong>.
                    La solución de un diagrama de flujo suele ser la ideal, pero no
                    suele ser fácil de implementar al crear el programa.
                    El pseudocódigo permite que el diseño del programa y su
                    implementación sean muy parecidos.
                  </p>
                  <p>
                    La curva de aprendizaje del pseudocódigo es baja por lo que facilitan enormemente el aprendizaje de la programación y la iniciación a lenguajes de programación más avanzados y complejos.
                  </p>

                  <p>
                    El pseudocódigo, al ser independiente del lenguaje de programación, permite que su uso se pueda aplicar utilizando diferentes lenguajes y permitiendo que el programador no tenga que ser la misma persona que escribió el pseudocódigo.
                  </p>
                  <p>
                    Una de las <strong>desventajas</strong> del uso de pseudocódigo es la <strong>falta de normas</strong>,
                    que puede hacer que la lógica de un programa, resulte complicada de ver
                    por el programador que va a implementar este pseudocódigo
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
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <h3>Estructura de un algoritmo en pseudocódigo.</h3>
          <p>
            Todo algoritmo en pseudocódigo tiene la siguiente estructura general:
          </p>
          <div class="text-bg-dark rounded fs-5 p-3">
            <p class="text-ligth"><span class="text-primary fw-bold">Proceso</span> Suma<span class="text-primary">:</span></p>
            <p class="text-ligth"><span style="margin-left: 40px;">acción 1</span></p>
            <p class="text-ligth"><span style="margin-left: 40px;">acción 2</span></</p>
            <p class="text-ligth"><span style="margin-left: 40px;">...</span></</p>
            <p class="text-ligth"><span style="margin-left: 40px;">acción n;</span></</p>
            <p class="text-ligth"><span class="text-primary fw-bold">FinProceso</span></p>
          </div>

          <ul class="mt-3">
            <li>
              Comienza con la palabra clave Proceso (o alternativamente Algoritmo, son sinónimos) seguida del nombre del programa.
            </li>

            <li>
              Le sigue una secuencia <strong>(Estructura de control secuencial, más adelante hablaremos de esto.)</strong> de instrucciones. Una secuencia de instrucciones es una lista de una o más instrucciones y/o estructuras de control.
            </li>

            <li>
              Finaliza con la palabra <code>FinProceso</code> (o <code>FinAlgoritmo</code>).
            </li>
            <li>
              La identación no es significativo, pero se recomienda para que el código sea más legible.
            </li>

            <li>
              No se diferencia entre mayúsculas y minúsculas. Preferible las minúsculas, aunque a veces se añaden automáticamente los nombres con la primera letra en mayúsculas.
            </li>
          </ul>

        </div>
      </div>
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p>
            Ahora bien, veamos un ejemplo.
          </p>
          <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsEPc">
            Ejemplo de un Pseudocódigo
          </button>


          <div class="modal fade" id="tipsEPc" tabindex="-1" aria-labelledby="tipsEPc" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="tipsEPc">Ejemplo</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="card mx-auto w-75 shadow-lg">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="images/tips.jpg" class="img-fluid rounded-start w-100 h-100" alt="sugerencias">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Recordatorio</h5>
                        <p class="card-text">Recuerdas cuando en la sesión pasada, <strong>Identificadores</strong>, del modulo <strong>Entidades Primitivas</strong>, se mencionó las <small>Palabras reservadas (o privadas)</small> .</p>
                        <p class="card-text">En este ejemplo notaras que algnas palabras como <span class="text-primary fw-bold">Proceso Escribir Leer</span>, entre otras, tiene un color diferente, resaltanto esta propiedad que forma parte de cada lenguaje de programación.</p>
                      </div>
                    </div>
                  </div>
                </div>

                  <div class="text-bg-dark rounded p-3 mt-3 mb-3">
                    <p class="text-ligth"><span class="text-primary fw-bold">Proceso</span> Circulo<span class="text-primary">:</span></p>
                    <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Definir</span> radio, superficie, perimetro  <span class="text-primary fw-bold">como Real;</span> </span></p>
                    <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span>  <span class="text-warning">"Introduce el radio de la circunferencia:"</span><span class="text-primary fw-bold">;</span> </span></</p>
                    <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Leer </span>radio<span class="text-primary fw-bold">;</span> </span></</p>
                    <p class="text-ligth"><span style="margin-left: 40px;">superficie <span class="text-primary fw-bold"><-</span> <span class="text-primary fw-bold">PI</span> <span class="text-danger fw-bold">*</span> radio <span class="text-danger fw-bold">^</span> 2<span class="text-primary fw-bold">;</span></span></</p>
                    <p class="text-ligth"><span style="margin-left: 40px;">perimetro <span class="text-primary fw-bold"><-</span> 2 <span class="text-danger fw-bold">*</span> <span class="text-primary fw-bold">PI</span> <span class="text-danger fw-bold">*</span> radio;</span></</p>
                    <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span> <span class="text-warning">"La superficie es "</span>,superficie<span class="text-primary fw-bold">;</span></span></</p>
                    <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span> <span class="text-warning">"El perímetro es "</span>,perimetro<span class="text-primary fw-bold">;</span></span></</p>
                    <p class="text-ligth"><span class="text-primary fw-bold">FinProceso</span></p>
                  </div>
                  <div class="col-lg-6 mx-auto text-center py-5">
                    <div class="container">
                      <img src="images/EjPc.png" class="img-fluid border rounded-3 shadow-lg mb-4"  alt="Ejemplo en Diagrama de flujo"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Y el diagrama de flujo.</p>
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


    ${games("pseudocodigos-02")}
  `;
  return view;
}

export default Pseudocodigo;

import games from "../sesion_game/games";

const Subprogramas = () => {
  const view = `
  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">

        <p>
          Un problema complejo se puede dividir en pequeños subproblemas
          más sencillos. Estos subproblemas se conocen como <strong>módulos</strong> y a
          su implementación en un lenguaje de programación se le llama
          <strong>subprograma</strong>.
        </p>

        <p>
          Un subprograma puedes inluir cualquier estructura de control
          del mismo modo que haces en un programa. El programa <strong>llama</strong> o <strong>invoca</strong>
          al subprograma, este ejecuta una tarea específica y devuelve el
          "control" al programa que lo llamó.
        </p>

        <p>
          Cuando un programa no devuelve un resultado se le llama
          <em>procedimiento</em>, cuando devuelve un valor se le llama <em>función</em>.
        </p>


      </div>
    </div>
  </div>

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <h3>Funciones</h3>
        <p>
          Una función es una operación que toma uno o más valores (argumentos) y
          devuelve un resultado (valor de la función para los argumentos dados). <br>
          Por ejemplo: <code>f(x) = x / ( 1 + x<sup>2</sup> )</code>
        </p>
        <p>
          Donde: <em>f</em> es el nombre de la función, <em>x</em> es el argumento (también conocido como parámetro formal)
        </p>
        <p>
          La definición de una función se presenta de la siguiente manera:
        </p>
        <div class="text-bg-dark rounded fs-5 p-3 mb-3">
          <p class="text-ligth"><span class="text-primary fw-bold">SubProceso</span> variable_de_retorno<span class="text-primary"> <- </span> <span class="text-danger">Nombre</span> ( <span class="text-warning">argumentos</span> ) </p>
          <p class="text-ligth"><span style="margin-left: 40px;">Bloque de instrucciones</span></p>
          <p class="text-ligth"><span class="text-primary fw-bold">FinSubProceso</span></p>
        </div>

        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tipDetalles1">
          Detalles sobre el código
        </button>

        <p class="mt-5">
          Cuando definimos una función solo le indicamos al algoritmo que esta función
          existe, pero una definición de función no implica la ejecución de las instrucciones
          que la constituyen. Para hacer uso de una función, el algoritmo principal la debe
          llamar.
        </p>
        <div class="text-bg-dark rounded fs-5 p-3 my-3">
          <p class="text-ligth"><span class="text-primary fw-bold">SubProceso</span> resultado<span class="text-primary"> <- </span> <span class="text-danger">suma</span> <span class="text-warning">(</span> a, b <span class="text-warning">)</span> </p>
          <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Definir </span> resultado <span class="text-primary fw-bold">Como Entero;</span></span></p>
          <p class="text-ligth"><span style="margin-left: 40px;">resultado <span class="text-primary fw-bold"> <- </span> a <span class="text-danger fw-bold"> + </span>  b <span class="text-primary fw-bold">;</span> </span></p>
          <p class="text-ligth"><span class="text-primary fw-bold">FinSubProceso</span></p>
          <p class="my-5"></p>
          <p class="my-5"></p>
          <p class="text-ligth"><span class="text-primary fw-bold">Proceso</span> OperaciónSuma</p>
          <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span> <span class="text-warning fw-bold">"El resultado: "</span>, <span class="text-danger fw-bold">suma</span><span class="text-warning fw-bold">( </span>3, 9<span class="text-warning fw-bold"> ) </span> <span class="text-primary fw-bold">;</span> </span></p>
          <p class="text-ligth"><span class="text-primary fw-bold">FinProceso</span></p>
        </div>
        <p class="text-center">Invocaión o llamado de una función.</p>


        <div class="modal fade" id="tipDetalles1" tabindex="-1" aria-labelledby="tipListas" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="tipDetalles1">Detalles</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>
                  Donde:
                </p>
                <ul>
                  <li><strong>variable_de_retorno:</strong>
                    <ul>
                      <li>
                        Si su <em>función/subprograma</em> calcula y devuelve algún valor,
                        complete aquí el nombre de la variable que utilizará para almacenar
                        ese valor; si su función/subproceso no devuelve nada puede eliminar
                        la variable y la flecha de asignación.
                      </li>
                    </ul>
                  </li>
                  <li><strong>nombre:</strong>
                    <ul>
                      <li>
                        Introduzca aquí el nombre que recibirá la función/subproceso.
                      </li>
                    </ul>
                  </li>
                  <li><strong>argumentos:</strong>
                    <ul>
                      <li>
                        Introduzca aquí la lista de argumentos que requiere su
                        función, utlizando comas para separarlos, e ingresando
                        el identificador para cada uno y opcionalmente las
                        palabras clave "por valor" o "por referencia" para
                        indicar el tipo de pasaje; si la función/subproceso no
                        requiere argumentos puede dejar este campo en blanco, y
                        opcionalmente omitir los paréntesis.
                      </li>
                    </ul>
                  </li>
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

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <h3>Procedimientos</h3>
        <p>
          En el caso de los procedimientos, que por definición, no devuelven un valor,
          el valor que se usa para <em>tipoValor</em> es <em>vacio</em>.
        </p>

        <div class="text-bg-dark rounded fs-5 p-3 my-3">
          <p class="text-ligth"><span class="text-primary fw-bold">SubProceso</span> <span class="text-danger">saludo</span> <span class="text-warning">(</span> nombre <span class="text-warning">)</span> </p>
          <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span> <span class="text-warning">"Hola, "</span>, nombre <span class="text-primary fw-bold";</span></span></p>
          <p class="text-ligth"><span class="text-primary fw-bold">FinSubProceso</span></p>
          <p class="my-5"></p>
          <p class="my-5"></p>
          <p class="text-ligth"><span class="text-primary fw-bold">Proceso</span> MostrarSaludo</p>
          <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-danger fw-bold">suma</span><span class="text-warning fw-bold">( </span>"Anna"<span class="text-warning fw-bold"> ) </span> <span class="text-primary fw-bold">;</span> </span></p>
          <p class="text-ligth"><span class="text-primary fw-bold">FinProceso</span></p>
        </div>

      </div>
    </div>
  </div>

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">

      <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipEjemplos">
        Ejemplos de subprogramas
      </button>


      <div class="modal fade" id="tipEjemplos" tabindex="-1" aria-labelledby="tipListas" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="tipEjemplos">Ejemplos</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <h4 class="display-6">Cuadrado de un número</h4>
              <div class="col-lg-6 mx-auto text-center w-75">
                <div class="container">
                  <img src="images/Code_CuadradoDeUnNumero.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de cuadrado de un número en pseudocódigo"  loading="lazy">
                </div>
                <p class="lead mb-4">Cuadrado de un número (pseudocódigo).</p>
              </div>
              <div class="col-lg-6 mx-auto text-center w-75">
                <div class="container">
                  <img src="images/Sub_CuadradoDeUnNumero.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de cuadrado de un número en diagrama de flujos"  loading="lazy">
                </div>
                <p class="lead mb-4">Subprograma (diagrama de flujo).</p>
              </div>
              <div class="col-lg-6 mx-auto text-center w-75">
                <div class="container">
                  <img src="images/Main_CuadradoDeUnNumero.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de cuadrado de un número en diagrama de flujos"  loading="lazy">
                </div>
                <p class="lead mb-4">Bloque principal (diagrama de flujo).</p>
              </div>

              <hr class="my-5">
              <h4 class="display-6">Mensaje de bienvenida</h4>
              <div class="col-lg-6 mx-auto text-center w-75">
                <div class="container">
                  <img src="images/code_Mensaje.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de cMensaje de bienvenida en pseudocódigo"  loading="lazy">
                </div>
                <p class="lead mb-4">Mensaje (pseudocódigo).</p>
              </div>
              <div class="col-lg-6 mx-auto text-center w-75">
                <div class="container">
                  <img src="images/Sub_Mensaje.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de mensaje de bienvenidao en diagrama de flujos"  loading="lazy">
                </div>
                <p class="lead mb-4">Subprograma (diagrama de flujo).</p>
              </div>
              <div class="col-lg-6 mx-auto text-center w-75">
                <div class="container">
                  <img src="images/Main_Mensaje.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de mensaje de bienvenida en diagrama de flujos"  loading="lazy">
                </div>
                <p class="lead mb-4">Bloque principal (diagrama de flujo).</p>
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
    ${games("subprogramas-02")}
  `;
  return view;
}

export default Subprogramas;

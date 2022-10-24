import games from "../sesion_game/games";

const DiagramasDeFlujo = () => {
  const view = `
    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p>
            Numerosas investigaciones han mostrado que el
            Aprendizaje Visual es uno de los mejores métodos para
            enseñar habilidades del pensamiento. Las técnicas que
            utilizan formas graficas para representar ideas e
            información ayudan  a clarificar el
            pensamiento, y a procesar, organizar y priorizar nueva
            información.
          </p>
          <p>
            Los diagramas visuales revelan patrones,
            interrelaciones e interdependencias además de
            estimular el pensamiento creativo.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p>
            La utilización de Diagramas ayuda a:
          </p>
          <ul>
            <li>
              <span class="fw-semibold"><em>Clarificar el pensamiento</em></span>: Ellos pueden ver cómo se
              conectan los procesos y se dan cuenta de cómo
              estos se pueden organizar o agrupar para darles el
              orden lógico correcto.
            </li> <br>
            <li>
              <span class="fw-semibold"><em>Identificar pasos erróneos</em></span>: Sobre un diagrama es
               más fácil identificar los cambios que se requieren
               para el correcto funcionamiento de un programa de
               computador que hacerlo sobre el código.
            </li>
          </ul>
          <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsDF">
            Más detalles sobre los Diagramas de flujo
          </button>

          <div class="modal fade" id="tipsDF" tabindex="-1" aria-labelledby="tipsDF" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="tipsDF">Las ventajas de diseñar un Diagrama de Flujo</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <ul>
                    <li>
                      Forzar la identificación de todos los pasos de una
                      solución de forma clara y lógica.
                    </li> <br>
                    <li>
                      Establecer una visión amplia y objetiva de la solución.
                    </li> <br>
                    <li>
                      Verificar si se han tenido en cuenta todas las posibilidades.
                    </li> <br>
                    <li>
                      Representar gráficamente una solución (es más
                      simple hacerlo con gráficas que mediante palabras)
                    </li> <br>
                    <li>
                      Facilitar a otras personas la comprensión de la
                      secuencia lógica de la solución planteada.
                    </li> <br>
                    <li>
                      Posibilitar acuerdos con base en la aproximación
                      común a una solución de un problema, resolver
                      ambigüedades o realizar mejoras.
                    </li> <br>
                    <li>
                      Establecer posibles modificaciones.
                    </li> <br>
                    <li>
                      Agilizar la codificación (traducción) del algoritmo en
                      un lenguaje de programación
                    </li> <br>
                    <li>
                      Servir como elemento de documentación de la
                      solución del problema.
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
        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">¡¡Atención!!</h4>
          <p>Antes de continuar te sugerimos que veas ésta información primero.</p>
          <hr>
          <p class="mb-0">
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsDF2">
              Sugerencias
            </button>
          </p>

          <div class="modal fade" id="tipsDF2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="tipsDF2" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen  modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="tipsDF2">SIMBOLOGÍA DE LOS DIAGRAMAS DE FLUJO</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/simbol_DF.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de tabla de multiplicar en pseudocódigo"  loading="lazy">
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
    </div>

    ${games()}
  `;

  return view;
}

export default DiagramasDeFlujo;

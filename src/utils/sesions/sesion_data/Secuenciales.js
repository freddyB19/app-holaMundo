import games from "../sesion_game/games";


const Secuenciales = () => {
  const view = `
    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p>
            La estructura de control
            secuencial es la más sencilla. También se la conoce
            como <strong>estructura lineal</strong>. Se compone de instrucciones
            que deben ejecutarse en forma consecutiva, una tras
            otra, <strong>siguiendo una línea de flujo</strong>.
          </p>
          <p>
            Solamente los
            problemas muy sencillos pueden resolverse haciendo
            uso únicamente de esta estructura.
          </p>
          <p>
            Normalmente, la
            estructura secuencial hace parte de soluciones a
            problemas complejos en las que se la utiliza mezclada
            con <em>estructuras iterativas (repetir varias veces un
            conjunto de instrucciones) y condicionales (tomar
            decisiones)</em>.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p>
            Una estructura de control secuencial puede contener
            cualquiera de las siguientes instrucciones:
          </p>
          <ul class="list-group mx-auto shadow-sm">
            <li class="list-group-item list-group-item-info">Declaración variables</li>
            <li class="list-group-item">Asignación de valores</li>
            <li class="list-group-item list-group-item-info">Entrada de datos</li>
            <li class="list-group-item">Procesamiento de datos (operaciones) </li>
            <li class="list-group-item list-group-item-info">Reporte de resultados</li>
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
          <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipESecuencial">
            Ejemplo de una estructura secuencial
          </button>


          <div class="modal fade" id="tipESecuencial" tabindex="-1" aria-labelledby="tipESecuencial" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="tipESecuencial">Ejemplos</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <h4 class="display-6">Suma de dos números</h4>
                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/Code_suma.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de suma en pseudocódigo"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Suma de dos números (pseudocódigo).</p>
                  </div>


                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/Suma.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de suma en diagrama de flujos"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Suma de dos números (diagrama de flujos).</p>
                  </div>

                  <hr class="my-5">

                  <h4 class="display-6">Pedir datos al usuario</h4>
                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/Code_usuario.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de pedir datos al usuario en pseudocódigo"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Datos del usuario (pseudocódigo).</p>
                  </div>

                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/DatosUsuario.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de pedir datos al usuario en diagrama de flujos"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Datos del usuario (diagrama de flujos).</p>
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

export default Secuenciales;

import games from "../sesion_game/games";

const Condicionales = () => {
  const view = `
  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <p>
          La forma más común está compuesta por una proposición (condición) que se evalúa y dos
          bloques de instrucciones que se ejecutan, uno cuando la condición es verdadera (selección simple y doble) y otro cuando ésta es falsa (únicamente en la selección doble).
        </p>
        <p>
          Un bloque de instrucciones puede contener
          una o varias instrucciones que se ejecutan una detrás
          de otra. La estructura condicional tiene tres variantes:
        </p>
        <ul class="list-group mx-auto shadow-sm">
          <li class="list-group-item list-group-item-info">Selección simple.</li>
          <li class="list-group-item">Selección doble</li>
          <li class="list-group-item list-group-item-info">Selección múltiple</li>
        </ul>

        <div class="card mx-auto w-75 shadow-lg my-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="images/mision.jpg" class="img-fluid rounded-start w-100 h-100" alt="sugerencias">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">¡¡ Nueva misión !!</h5>
                <p class="card-text">No te preocupes, solo hablaremos de los primeros puntos de la lista (<strong>Selección simple</strong>, <strong>Selección doble</strong>).</p>
                <p class="card-text">
                  El último lo dejaremos a tu encargo, si quieres saber de que trata es momento que inicies tu propia investigación. Así que te deseamos suerte, en tu nueva misión. No te olvides en regresar por favor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p>
          Las estructuras condicionales simple y doble evalúan
          una proposición (condición) que devuelve como
          resultado únicamente dos valores posibles y
          excluyentes: verdadero o falso.
        </p>

        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tipECondicionales">
          Detalles sobre las estructuras condicionales
        </button>


        <div class="modal fade" id="tipECondicionales" tabindex="-1" aria-labelledby="tipECondicionales" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="tipECondicionales">Detalles</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <p>
                Para que una proposición (frase declarativa) sea valida,
                debe poder afirmarse que es verdadera o falsa.
              </p>
              <p>
                En programación, se utilizan operadores relacionales ( <strong><, =, ></strong> )
                para establecer la relación que existe entre dos
                elementos de la proposición.
              </p>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">OPERADOR</th>
                    <th scope="col">DESCRIPCIÓN</th>
                    <th scope="col">EJEMPLO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td class="bg-dark text-center text-light rounded"><span class="text-danger fs-4 fw-bold"> = </span></td>
                    <td class="text-center">Igual que </td>
                    <td class="bg-dark text-center text-light rounded"> 10 <span class="text-danger fs-4 fw-bold"> = </span> 10 </td>
                    <td class="text-center">  Verdadero </td>

                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td class="bg-dark text-center text-light rounded"><span class="text-danger fs-4 fw-bold"> < </span></td>
                    <td class="text-center">Menor que</td>
                    <td class="bg-dark text-center rounded text-light">100 <span class="text-danger fs-4 fw-bold"> < </span> 20 </td>
                    <td class="text-center">  Falso </td>

                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td class="bg-dark text-center text-light rounded"><span class="text-danger fs-4 fw-bold"> > </span></td>
                    <td class="text-center">Mayor que</td>
                    <td class="bg-dark text-center rounded text-light">15 <span class="text-danger fs-4 fw-bold"> > </span> 5</td>
                    <td class="text-center"> Verdadero </td>

                  </tr>
                </tbody>
              </table>

              <p class="mt-3">
                Adicionalmente, las proposiciones pueden ser sencillas
                o compuestas. Las proposiciones compuestas se forman
                con dos o más proposiciones sencillas unidas por
                operadores lógicos (<span class="text-danger  fw-bold">&</span>, <span class="text-danger fw-bold">|</span>, <span class="text-danger fw-bold">~</span>). Cuando se unen dos
                proposiciones por medio del operador lógico “<span class="text-danger fw-bold">&</span>”,
                significa que ambas proposiciones deben ser
                verdaderas <strong>(conjunción)</strong>. Cuando se unen dos
                proposiciones por medio del operador lógico “<span class="text-danger fw-bold">|</span>”,
                significa que por lo menos una de las dos proposiciones
                debe ser verdadera <strong>(disyunción)</strong>.
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
        <h3>Selección simple</h3>
        <p>
          La estructura condicional de selección simple ejecuta un
          bloque de instrucciones cuando la proposición
          <strong>(condición)</strong> es verdadera; si esta es falsa, no hace nada.
        </p>
        <div class="col-lg-6 mx-auto text-center">
          <div class="container">
            <img src="images/Ss.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Error 404"  loading="lazy">
          </div>
        </div>

        <hr class="my-5">
        <h3>Selección doble</h3>
        <p>
          La estructura condicional de selección doble ejecuta un
          bloque de instrucciones <strong>(A)</strong> cuando la proposición
          <strong>(condición)</strong> es verdadera y un bloque diferente <strong>(B)</strong>
          cuando esta es falsa.
        </p>
        <div class="col-lg-6 mx-auto text-center">
          <div class="container">
            <img src="images/Sd.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Error 404"  loading="lazy">
          </div>
        </div>

      </div>
    </div>
  </div>



  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <p>
          Ahora bien, veamos un ejemplo.
        </p>
        <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipEJCondicionales">
          Ejemplo de una estructura codicionales
        </button>


        <div class="modal fade" id="tipEJCondicionales" tabindex="-1" aria-labelledby="tipEJCondicionales" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="tipEJCondicionales">Ejemplos</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <h4 class="display-6">Mayor de edad</h4>
                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/Code_MayorEdad.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de mayor de edad en pseudocódigo"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Mayor de edad (pseudocódigo).</p>
                </div>


                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/MayorEdad.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de mayor de edad en diagrama de flujos"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Mayor de edad (diagrama de flujos).</p>
                </div>

                <hr class="my-5">

                <h4 class="display-6">Mayor de dos números</h4>
                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/Code_MayorDeDosNumeros.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de mayor de dos números en pseudocódigo"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Mayor de dos números (pseudocódigo).</p>
                </div>

                <div class="col-lg-6 mx-auto text-center w-75">
                  <div class="container">
                    <img src="images/MayorDeDosNumeros.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de mayor de dos números en diagrama de flujos"  loading="lazy">
                  </div>
                  <p class="lead mb-4">Mayor de dos números (diagrama de flujos).</p>
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




    ${games("estructuras-condicionales-02")}
  `;
  return view;
}

export default Condicionales;

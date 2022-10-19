import games from "../sesion_game/games";


const TDatosAvanzados = () => {
  const view = `
    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <h3>Listas</h3>
          <p>
            La Lista es una estructura de datos muy importante en los lenguajes de programación donde:
          </p>

          <ul class="list-group mx-auto shadow-sm">
            <li class="list-group-item list-group-item-info">Representa una colección de elementos ordenados.</li>
            <li class="list-group-item">Puede contener elementos repetidos.</li>
            <li class="list-group-item list-group-item-info">Cada elemento de la lista tiene un índice que lo ubica dentro de la misma.</li>
          </ul>

          <hr class="my-5">
          <h5>Operaciones</h5>
          <p>En general las listas proveen las siguientes operaciones:</p>
          <ul class="list-group mx-auto shadow-sm mb-3">
            <li class="list-group-item list-group-item-info">Representa una colección de elementos ordenados.</li>
            <li class="list-group-item">Construir una lista.</li>
            <li class="list-group-item list-group-item-info">Obtener el tamaño de la lista.</li>
            <li class="list-group-item">Verificar si está vacía.</li>
            <li class="list-group-item list-group-item-info">Obtener el primer elemento de la lista, usualmente llamado <strong>head</strong> o <strong>cabeza</strong>.</li>
            <li class="list-group-item">Agregar un nuevo elemento a la lista.</li>
            <li class="list-group-item list-group-item-info">Obtener el elemento para un índice dado.</li>
            <li class="list-group-item">Entre otras operaciones.</li>
          </ul>

          <div class="col-lg-6 mx-auto text-center w-75">
            <div class="container">
              <img src="images/lista_grafica.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Representación grafica de una lista"  loading="lazy">
            </div>
            <p class="lead mb-4">Representación grafica de una lista.</p>
          </div>

          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tipListas">
            Detalles sobre las listas
          </button>


          <div class="modal fade" id="tipListas" tabindex="-1" aria-labelledby="tipListas" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="tipListas">Detalles</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Existe una amplia variedad de listas, ahora te presentaremos las más comúnes:
                  </p>

                  <h3>Lista Enlazada</h3>
                  <p>
                    Una implementación muy común de lista es la llamada
                    <strong>lista enlazada</strong>, en donde se representa internamente
                    como <strong>Nodos</strong> que referencian al siguiente.
                  </p>

                  <div class="col-lg-6 mx-auto text-center w-75 mb-3">
                    <div class="container">
                      <img src="images/ls.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Representación grafica de una lista Enlazada"  loading="lazy">
                    </div>
                  </div>

                  <h3>Lista Doblemente Enlazada</h3>
                  <p>
                    Existe una variante a la lista enlazada simple,
                    llamada <strong>lista doblemente enlazada</strong>. La idea es que
                    cada nodo, además de conocer al siguiente, conozca
                    al anterior.
                  </p>
                  <div class="col-lg-6 mx-auto text-center w-75 mb-3">
                    <div class="container">
                      <img src="images/lde.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Representación grafica de una lista Doblemente Enlazada"  loading="lazy">
                    </div>
                  </div>

                  <h3>Lista Circular</h3>
                  <p>
                    Otra variante de lista enlazada es aquella en la que
                    el último elemento conoce al primero
                    (y viceversa si es además, doblemente enlazada).
                    De ahí su nombre <em>"circular"</em>, ya que se puede
                    representar como un círculo de nodos.
                    Obviamente esta lista no tiene fin.
                  </p>

                  <div class="col-lg-6 mx-auto text-center w-75 mb-3">
                    <div class="container">
                      <img src="images/lc.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Representación grafica de una lista circular"  loading="lazy">
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">¿Qué es un Nodo?</h5>
                      <strong>Un nodo</strong> representa la información contenida en una única estructura de datos. Estos nodos pueden contener un valor o una condición, o posiblemente servir como otra estructura de datos independiente.
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

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
        <h3>Diccionarios</h3>
        </div>
      </div>
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
        <h3>Tuplas</h3>
        </div>
      </div>
    </div>
    ${games()}
  `;
  return view;
}

export default TDatosAvanzados;

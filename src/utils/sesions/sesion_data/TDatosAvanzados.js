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
          <h3>Tuplas</h3>
          <p>
            Una <strong>tupla</strong> es una secuencia de valores agrupados. Una tupla sirve para agrupar, como si fueran un único valor, varios valores que, por su naturaleza, deben ir juntos.
          </p>
          <p>
            Una tupla puede ser creada poniendo los valores separados por comas y entre paréntesis.
          </p>
          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"> frutas <span class="text-primary fw-bold"> <- </span> <span class="text-danger fw-bold">(</span> <span class="text-warning fw-bold">"Manzanas"</span>, <span class="text-warning fw-bold">"Peras"</span> <span class="text-danger fw-bold">)</span> <span class="text-primary fw-bold">;</span></p>
          </div>
          <p>Para acceder a sus valores usamos los indices, similar a los arreglos.</p>
          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"><span class="text-primary fw-bold"> Escribir </span> frutas<span class="text-danger fw-bold">[</span> 0 <span class="text-danger fw-bold">]</span> <span class="text-primary fw-bold">;   </span><span class="text-secondary fw-bold">    // Manzanas </span></p>
          </div>

          <div class="alert alert-danger" role="alert">
            Es un tipo de <strong>dato inmutable</strong>: una tupla no puede ser modificada una vez que ha sido creada.
          </div

        </div>
      </div>
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <h3>Diccionarios</h3>
          <p>
            Al igual que los diccionarios que usamos habitualmente
            en la vida diaria, los diccionarios son una lista de consulta
            de términos de los cuales se proporcionan valores asociados.
          </p>

          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"> diccionario<span class="text-primary fw-bold"> <- </span> <span class="text-danger fw-bold">{</span></p>
            <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-warning fw-bold">"nombre"</span>: "Ana"</span></p>
            <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-warning fw-bold">"edad"</span>: 23 </span></p>
            <p class="text-ligth"><span class="text-danger fw-bold">}</span><span class="text-primary fw-bold">;</span></p>
          </div>

          <p>Asignar un nuevo valor</p>
          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"> diccionario<span class="text-danger fw-bold">[</span> <span class="text-warning fw-bold">"apellido"</span> <span class="text-danger fw-bold">]</span> <span class="text-primary fw-bold"> <- </span> "Hernández"<span class="text-primary fw-bold">;</span></p>
          </div>

          <p>Mostrar valor de una clave </p>
          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"><span class="text-primary fw-bold"> Escribir </span> diccionario<span class="text-danger fw-bold">[</span> <span class="text-warning fw-bold">"edad"</span> <span class="text-danger fw-bold">]</span><span class="text-primary fw-bold">;</span> <span class="text-secondary fw-bold">     // 23 </span></p>
          </div>
          <div class="card alert alert-primary">
            <div class="card-body">
              <h5 class="card-title">Una Nota sobre los diccionarios</h5>
              En otros lenguajes, a los diccionarios se los llama <em>arrays asociativos, matrices asociativas, o también tablas de hash</em>.
            </div>
          </div>

          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tipDiccionarios">
            Detalles sobre los diccionarios
          </button>


          <div class="modal fade" id="tipDiccionarios" tabindex="-1" aria-labelledby="tipListas" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="tipDiccionarios">Detalles</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Un diccionario es una colección (<strong>no-ordenada o ordenada</strong>, <em>esto depende del lenguaje de programación</em>) de valores que
                    son accedidos a traves de una clave. Es decir, en lugar de
                    acceder a la información mediante el índice numérico, como
                    es el caso de las listas y tuplas, es posible acceder a los
                    valores a través de sus claves, que pueden ser de diversos
                    tipo. <br>
                    Las claves son únicas dentro de un diccionario, es decir que no puede
                    haber un diccionario que tenga dos veces la misma clave, si se
                    asigna un valor a una clave ya existente, se reemplaza el valor
                    anterior.
                  </p>

                  <p>
                    No hay una forma directa de acceder a una clave a
                    través de su valor, y nada impide que un mismo valor
                    se encuentre asignado a distintas claves.
                    La informacion almacenada en los diccionarios,
                    no tiene un orden particular. Ni por clave ni por valor,
                    ni tampoco por el orden en que han sido agregados al
                    diccionario.
                  </p>

                  <p>
                    A continuación veras como es usado este tipo de dato en diferentes lenguajes de programación. <br>
                    Por ahora solo es importante que analices y veas un poco las diferencias en cada uno de estos ejemplos.
                  </p>

                  <div class="col-lg-6 mx-auto text-center w-75 mb-3">
                    <div class="container">
                      <img src="images/a_asociativo_php.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Array Asociativo"  loading="lazy">
                      <p class="lead mb-4">En PHP los diccionarios se les nombra <strong>Array Asociativo</strong>.</p>
                    </div>
                  </div>

                  <div class="col-lg-6 mx-auto text-center w-75 mb-3">
                    <div class="container">
                      <img src="images/tablashashC.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Tablas Hash"  loading="lazy">
                      <p class="lead mb-4">En C# los diccionarios se les nombra <strong>Tablas Hash</strong>.</p>
                    </div>
                  </div>

                  <div class="col-lg-6 mx-auto text-center w-75 mb-3">
                    <div class="container">
                      <img src="images/dict_python.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Diccionarios"  loading="lazy">
                      <p class="lead mb-4">En Python se concocen por el nombre de <strong>Diccionarios</strong>.</p>
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
    ${games("tipos-de-datos-avanzados-01")}
  `;
  return view;
}

export default TDatosAvanzados;

import games from "../sesion_game/games";

const Arreglos = () => {
  const view = `

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p>
            Un Arreglo es una <strong>estructura de datos</strong> (<em>es un tipo de dato</em>) que almacena bajo
            el mismo nombre (variable) a una <strong>colección de datos del
            mismo tipo</strong>.
          </p>

          <div class="card mx-auto w-75 shadow-lg my-5">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="images/mision.jpg" class="img-fluid rounded-start w-100 h-100" alt="sugerencias">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">¡¡ Nueva misión !!</h5>
                  <p class="card-text">Si quieres saber aún más sobre lo que es una estrcutura de datos y su clasificación, lo dejaremos a tu encargo, es momento que inicies tu propia investigación.</p>
                  <p class="card-text">
                    Así que te deseamos suerte, en tu nueva misión. No te olvides en regresar por favor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p>
            Los arreglos se caracterizan por:
          </p>

          <ul class="list-group mx-auto shadow-sm">
            <li class="list-group-item list-group-item-info">Almacenar los elementos en posiciones contiguas de memoria.</li>
            <li class="list-group-item">Tener un mismo nombre de variable que representa a todos los elementos.</li>
            <li class="list-group-item list-group-item-info">Para hacer referencia a esos elementos es necesario utilizar un índice que especifica el lugar que ocupa cada elemento dentro del arreglo.</li>
          </ul>

          <p class="mt-3">Los dos tipos de arreglos mas comunes son:</p>
          <ul>
            <li><strong>Unidimensionales</strong></li>
            <li><strong>Bidimensionales</strong></li>
          </ul>

        </div>
      </div>
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <h3>Vectores</h3> <span><small>Unidimensional</small></span>

          <p class="mt-3">
            Un vector es un arreglo de <strong>"N"</strong> elementos
            organizados en una dimensión donde <strong>"N"</strong> recibe el nombre
            de longitud o tamaño del vector. Para hacer referencia a
            un elemento del vector se usa el nombre del mismo, seguido
            del índice (<em>entre corchetes</em>), el cual indica una posición
            en particular del vector.
          </p>
          <div class="col-lg-6 mx-auto text-center w-75">
            <div class="container">
              <img src="images/vector.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Representación grafica de un vector"  loading="lazy">
            </div>
            <p class="lead mb-4">Representación grafica de un vector.</p>
          </div>

          <p>
            Podemos llenar un vector usando un iterador <code>para-hacer</code> como se muestra a continuación:
          </p>

          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"><span class="text-primary fw-bold">Para</span> i<span class="text-primary fw-bold"> <- </span> 1  <span class="text-primary fw-bold">Hasta</span> 10 <span class="text-primary fw-bold"> Hacer</span> </p>
            <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Leer </span>vector <span class="text-warning fw-bold">[</span> i <span class="text-warning fw-bold">]</span> </span></p>
            <p class="text-ligth"><span class="text-primary fw-bold">FinPara</span></p>
          </div>

          <p>
            Para mostrar su contenido:
          </p>
          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"><span class="text-primary fw-bold">Para</span> i<span class="text-primary fw-bold"> <- </span> 1  <span class="text-primary fw-bold">Hasta</span> 10 <span class="text-primary fw-bold"> Hacer</span> </p>
            <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span>vector <span class="text-warning fw-bold">[</span> i <span class="text-warning fw-bold">]</span> </span></p>
            <p class="text-ligth"><span class="text-primary fw-bold">FinPara</span></p>
          </div>


          <hr class="my-5">

          <h3>Matrices </h3> <span><small class="mb-5">Bidimensional</small></span>


          <p class="mt-3">
            Es un arreglo de <strong>M x N</strong> elementos organizados en dos
            dimensiones donde <strong>"M"</strong> es el numero de filas o reglones
            y <strong>"N"</strong> el numero de columnas. <br>
            Para representar una matriz se necesita un nombre de matriz acompañado de dos índices.
          </p>

          <p>
            Donde <em>" i "</em> indica el renglón y <em>" j "</em> indica la columna, donde se encuentra almacenado el dato. La siguiente figura muestra la representación gráfica de una matriz.
          </p>

          <div class="col-lg-6 mx-auto text-center w-75">
            <div class="container">
              <img src="images/matriz.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Representación grafica de una matriz"  loading="lazy">
            </div>
            <p class="lead mb-4">Representación gráfica de una matriz.</p>
          </div>

          <p>
            Podemos llenar una matriz usando un iterador <code>para-hacer</code> como se muestra a continuación:
          </p>

          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"><span class="text-primary fw-bold">Para</span> i<span class="text-primary fw-bold"> <- </span> 1  <span class="text-primary fw-bold">Hasta</span> 5 <span class="text-primary fw-bold"> Hacer</span> </p>
            <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Para</span> j<span class="text-primary fw-bold"> <- </span> 1  <span class="text-primary fw-bold">Hasta</span> 5 <span class="text-primary fw-bold"> Hacer</span></span> </p>

            <p class="text-ligth"><span style="margin-left: 80px;"><span class="text-primary fw-bold">Escribir </span>matriz <span class="text-warning fw-bold">[</span> i <span class="text-warning fw-bold">] </span><span class="text-warning fw-bold">[</span> j <span class="text-warning fw-bold">]</span> </span></p>
            <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">FinPara</span></span> </p>
            <p class="text-ligth"><span class="text-primary fw-bold">FinPara</span></p>
          </div>

          <p>
            Para mostrar su contenido:
          </p>
          <div class="text-bg-dark rounded fs-5 p-3 mb-3">
            <p class="text-ligth"><span class="text-primary fw-bold">Para</span> i<span class="text-primary fw-bold"> <- </span> 1  <span class="text-primary fw-bold">Hasta</span> 5 <span class="text-primary fw-bold"> Hacer</span> </p>
            <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Para</span> j<span class="text-primary fw-bold"> <- </span> 1  <span class="text-primary fw-bold">Hasta</span> 5 <span class="text-primary fw-bold"> Hacer</span></span> </p>

            <p class="text-ligth"><span style="margin-left: 80px;"><span class="text-primary fw-bold">Escribir </span>matriz <span class="text-warning fw-bold">[</span> i <span class="text-warning fw-bold">] </span><span class="text-warning fw-bold">[</span> j <span class="text-warning fw-bold">]</span> </span></p>
            <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">FinPara</span></span> </p>
            <p class="text-ligth"><span class="text-primary fw-bold">FinPara</span></p>
          </div>


        </div>
      </div>
    </div>

    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">

          <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsArreglos">
            Ejemplo de Arreglos
          </button>


          <div class="modal fade" id="tipsArreglos" tabindex="-1" aria-labelledby="tipsArreglos" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="tipsArreglos">Ejemplos</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h4 class="display-6">Números al azar almacenados en un Vector</h4>
                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/Code_Vector.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de números al azar almacenados en un vector en pseudocódigo"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Números al azar almacenados en un vector (pseudocódigo).</p>
                  </div>


                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/Vector_DF.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de números al azar almacenados en un vector en diagrama de flujos"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Números al azar almacenados en un vector (diagrama de flujos).</p>
                  </div>

                  <hr class="my-5">

                  <h4 class="display-6">Validación de ingreso de notas</h4>
                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/Code_Matriz.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de números al azar almacenados en una matriz en pseudocódigo"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Números al azar almacenados en una matriz (pseudocódigo).</p>
                  </div>

                  <div class="col-lg-6 mx-auto text-center w-75">
                    <div class="container">
                      <img src="images/Matriz_DF.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Ejemplo de números al azar almacenados en una matriz en diagrama de flujos"  loading="lazy">
                    </div>
                    <p class="lead mb-4">Números al azar almacenados en una matriz (diagrama de flujos).</p>
                  </div>

                  <p>
                    En estos ejemplos, se puede ver lo siguiente: <code>azar(100)</code>. Esto es un subprograma (o una funsión), en el siguiente modulo aprenderas sobre esto.
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




    ${games()}
  `;
  return view;
}

export default Arreglos;

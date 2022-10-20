import games from "../sesion_game/games";

const Poo = () => {
  const view = `
  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <h3>Programación Orientada a Objectos (POO)</h3>
        <p>
          La POO es una extensión natural de la actual tecnología de
          programación y representa un enfoque relativamente nuevo y
          distinto al tradicional.
        </p>

        <p>
          Los objetivos de esta modalidad de programación son el mejoramiento
          de la productividad del programador por medio del
          manejo de la complejidad del software a través del uso de clases y sus objetos
          asociados.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <h3>Características de la programación orientada a objetos</h3>
        <p>
          La potencia real de los objetos reside en sus propiedades: abstracción, herencia
          y polimorfismo.
        </p>
        <h5>Abstracción</h5>
        <p>
          La abstracción de datos es un concepto
          fundamental en el diseño de un programa, pues permite definir el dominio y la
          estructura de los datos (atributos), junto con una colección o conjunto de operaciones que tienen acceso a los mismos (métodos). La abstracción permite no
          preocuparse de los detalles accesorios, y generalizar y centrarse en los aspectos
          que permiten tener una visión global del problema.
        </p>
        <div class="card alert alert-primary">
          <div class="card-body">
            <h5 class="card-title">Una nota sobre la POO</h5>
            En la POO, a los subprogramas se les nombra <strong>métodos</strong> y las variables se les nombra <strong>atributos</strong>.
          </div>
        </div>

        <div class="col-lg-6 mx-auto text-center w-75">
          <div class="container">
            <img src="images/clases.png" class="img-fluid border rounded-3 shadow-lg mb-4"  loading="lazy">
          </div>
        </div>

        <p>
          La abstracción es un nuevo tipo de dato definido por el programador; está compuesto por atributos (identificadores o datos) y métodos o acciones que se realizan
          sobre los atributos, definidos en una sola estructura llamada clase.
        </p>

        <div class="col-lg-6 mx-auto text-center w-75">
          <div class="container">
            <img src="images/abstraccion.png" class="img-fluid border rounded-3 shadow-lg mb-4"  loading="lazy">
          </div>
        </div>



        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#tipsAbstraccion">
          Información extra
        </button>


        <div class="modal fade" id="tipsAbstraccion" tabindex="-1" aria-labelledby="tipsAbstraccion" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="tipsAbstraccion">La abstracción y el encapsulamiento</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <h4>Abstracción y Encapsulamiento</h4>
                <p>
                  El encapsulamiento permite concebir al objeto como una caja negra en la que se
                  ha introducido toda la información relacionada con dicho objeto (tanto los datos
                  que almacena el objeto como los métodos que permiten manipularlos); mediante
                  el ocultamiento se restringe el acceso a los datos y a los métodos a partir de los
                  objetos.
                </p>
                <p>
                  La abstracción y el encapsulamiento están íntimamente relacionados con la clase.
                  El propósito de encapsular una definición de tipo de dato es imposibilitar
                  el acceso a los componentes de los objetos. Equivale a empacar datos y/u operaciones
                  dentro de una sola unidad de programación bien definida. Mediante el ocultamiento se restringe el acceso
                  a datos y métodos a partir de los objetos, dependiendo de los modificadores de
                  acceso públicos, privados o protegidos especificados para la clase correspondiente y a los cuales tenga acceso el objeto.
                </p>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-5">

        <h5>Herencia</h5>
        <p>
          La herencia
          es una propiedad que permite a un objeto poseer propiedades de otras clases.
          Además, a estos nuevos objetos creados es posible asignarles nuevos atributos
          y métodos.
        </p>
        <p>
          La clase que puede ser heredada se denomina clase <em>base (<strong>superclase</strong>)</em> y la clase
          que hereda se denomina clase <em>derivada (<strong>subclase</strong>)</em>.
        </p>
        <div class="col-lg-6 mx-auto text-center w-75">
          <div class="container">
            <img src="images/herencia.gif" class="img-fluid border rounded-3 shadow-lg mb-4"  loading="lazy">
          </div>
        </div>

        <hr class="my-5">


        <h5>Polimorfismo</h5>
        <p>
          Esta característica es la capacidad que objetos similares tienen para responder de
          diferentes formas al mismo mensaje, y permite al programador implementar
          múltiples formas de un mismo método, dependiendo cada una de ellas de la clase
          sobre la que se realice la implementación. Esto permite acceder a varios métodos
          distintos utilizando el mismo medio de acceso (el mismo nombre). El polimorfismo está muy relacionado con la herencia.
        </p>
        <div class="col-lg-6 mx-auto text-center w-75">
          <div class="container">
            <img src="images/Polimorfismo.jpg" class="img-fluid border rounded-3 shadow-lg mb-4"  loading="lazy">
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">
        <h3>Ventajas de la programación orientada a objetos</h3>
        <p>Las principales ventajas de la programación orientada a objetos son: </p>
        <ul class="list-group w-75 mx-auto my-3 shadow">
          <li class="list-group-item"> Las herramientas POO nos ayudan a mejorar la complejidad.</li>
          <li class="list-group-item"> Mejora la productividad debido a la reutilización de código (herencia).</li>
          <li class="list-group-item"> Mejora la seguridad y calidad.</li>
          <li class="list-group-item"> Permite generar programas modulares mejor estructurados</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-light border rounded-3 py-3 mb-3">
    <div class="card w-75 mx-auto mb-3">
      <div class="card-body shadow-lg rounded">

      <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#tipsPOO">
        Ejemplo de POO
      </button>


      <div class="modal fade" id="tipsPOO" tabindex="-1" aria-labelledby="tipsPOO" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="tipsPOO">Ejemplo</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="text-bg-dark rounded fs-5 p-3 mb-3">
              <p class="text-ligth"><span class="text-primary fw-bold">clase</span> <span class="text-warning fw-bold">Hipotenusa</span> <span class="text-warning fw-bold"> {</span> </p>
              <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">privado Definir</span>  cat1, cat2 <span class="text-primary fw-bold">Como Real</span>  <span class="text-primary fw-bold">;</span></span> </p>

              <p class="my-5"></p>

              <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">publico</span>  <span class="text-danger fw-bold">asignar_valor</span> <span class="text-warning fw-bold">(</span> <span class="text-primary fw-bold">Real</span> numero_1, <span class="text-primary fw-bold">Real</span> numero_2 <span class="text-warning fw-bold">)</span>  <span class="text-warning fw-bold">{</span></span> </p>
              <p class="text-ligth"><span style="margin-left: 80px;"> cat1<span class="text-primary fw-bold"> <- </span> numero_1</span> </p>
              <p class="text-ligth"><span style="margin-left: 80px;"> cat2<span class="text-primary fw-bold"> <- </span> numero_2</span> </p>
              <p class="text-ligth"><span style="margin-left: 40px;"> <span class="text-warning fw-bold">}</span></span> </p>

              <p class="my-5"></p>

              <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">publico Real</span>  <span class="text-danger fw-bold">calcular_hipo</span> <span class="text-warning fw-bold">(</span>  <span class="text-warning fw-bold">)</span>  <span class="text-warning fw-bold">{</span></span> </p>
              <p class="text-ligth"><span style="margin-left: 80px;"> <span class="text-primary fw-bold">Definir </span> h <span class="text-primary fw-bold">Como Real;</span> </p>
              <p class="text-ligth"><span style="margin-left: 80px;"> h<span class="text-primary fw-bold"> <- </span> cat1<span class="text-danger fw-bold"> ^ </span> 2 <span class="text-danger fw-bold"> + </span> cat2<span class="text-danger fw-bold"> ^ </span> 2 <span class="text-primary fw-bold">;</span></span> </p>
              <p class="text-ligth"><span style="margin-left: 80px;"> <span class="text-primary fw-bold">retornar </span> h</span> </p>
              <p class="text-ligth"><span style="margin-left: 40px;"> <span class="text-warning fw-bold">}</span></span> </p>
              <p class="text-ligth"><span class="text-warning fw-bold">}</span></p>

              <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">Proceso </span>Clases</span></p>
              <p class="text-ligth"><span style="margin-left: 80px;"><span class="text-primary fw-bold">Definir</span> numero_1, numero_2, resultado <span class="text-primary fw-bold">Como Real;</span></span></p>
              <p class="text-ligth"><span style="margin-left: 80px;"><span class="text-info fw-bold">Hipotenusa </span>obj_hipo<span class="text-primary fw-bold">;</span></span></p>
              <p class="my-5"></p>
              <p class="text-ligth"><span style="margin-left: 80px;"><span class="text-primary fw-bold">Escribir </span><span class="text-warning fw-bold">"Ingresa dos número: " </span><span class="text-primary fw-bold">;</span></span></p>
              <p class="text-ligth"><span style="margin-left: 80px;"><span class="text-primary fw-bold">Leer </span>numero_1, numero_2<span class="text-primary fw-bold">;</span></span></p>
              <p class="my-5"></p>
              <p class="text-ligth"><span style="margin-left: 80px;">obj_hipo.<span class="text-danger fw-bold">asignar_valor</span><span class="text-warning fw-bold">( </span> numero_1, numero_2 <span class="text-warning fw-bold">)</span><span class="text-primary fw-bold">;</span></span></p>
              <p class="text-ligth"><span style="margin-left: 80px;">resultado <span class="text-primary fw-bold"> <- </span> obj_hipo.<span class="text-danger fw-bold">calcular_hipo</span><span class="text-warning fw-bold">( </span><span class="text-warning fw-bold">)</span><span class="text-primary fw-bold">;</span></span></p>
              <p class="my-5"></p>
              <p class="text-ligth"><span style="margin-left: 80px;"><span class="text-primary fw-bold">Escribir </span><span class="text-warning fw-bold">"El resultado es = "</span>, resultado<span class="text-primary fw-bold">;</span></span></p>

              <p class="text-ligth"><span style="margin-left: 40px;"><span class="text-primary fw-bold">FinProceso</span></span> </p>

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

export default Poo;

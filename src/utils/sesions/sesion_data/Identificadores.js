import games from "../sesion_game/games";

const Identificadores = () => {
  const view = `
    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p>
            Al asignar nombres (identificadores) a variables, constantes y
            procedimientos (<em>subprogramas, más adelante hablaremos de eso</em>.) se deben tener en cuenta algunas reglas:
          </p>
          <ul class="list-group w-75 mx-auto my-3 shadow">
            <li class="list-group-item">
              Los nombres pueden estar formados por una
              combinación de letras y números <strong>(saldoMes, salario,
              fecha2, baseTriángulo, etc)</strong>.
            </li>
            <li class="list-group-item">
              El primer carácter de un nombre debe ser <strong>una letra</strong>.
            </li>
            <li class="list-group-item">
              La mayoría de los lenguajes de programación
              <em>diferencian las mayúsculas de las minúsculas</em>.
            </li>
            <li class="list-group-item">
              Los nombres beben
              <em>ser muy descriptivos</em>; no utilizar abreviaturas, a
              menos que se justifique plenamente.
            </li>
            <li class="list-group-item">
              No utilizar caracteres reservados <strong>(%, +, /, >, etc)</strong>. <br>
              Se debe tener en cuenta que algunos lenguajes de
              programación no admiten las tildes.
            </li>

            <li class="list-group-item">
              No utilizar palabras reservadas por los lenguajes de
              programación. <br> <br>

              <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                ¿Qué son las palabras reservadas?
              </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Palabras reservadas (privadas)</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Todos los lenguajes de programación definen unas
                      palabras para nombrar sus comandos, instrucciones y
                      funciones. Un identificador definido por el usuario no
                      puede tener el nombre de una palabra reservada.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="list-group-item">
              Existe una convención ampliamente utilizadas,
              los nombres de variables y constantes deben
              empezar con minúscula.
              Si es un nombre compuesto por varias palabras,
              cada una de las palabras (con excepción de la
              primera) deben empezar con mayúscula. Ejemplo:
              fechaInicial, baseTriángulo, etc.
            </li>
          </ul>
          <p>
            El tipo de nombre –identificadores- que se asigne a
            variables, constantes y subprogramas <strong>es muy
            importante</strong>.
          </p>
        </div>
      </div>
    </div>

    ${games("identificadores-01")}
  `;
  return view;
}

export default Identificadores;

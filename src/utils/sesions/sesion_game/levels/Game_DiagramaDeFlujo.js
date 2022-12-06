function* game_diagramaDeFlujo() {
  const questions = [
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            ¿Cuál de los siguientes Diagramas de flujo esta organizado correctamente?
          </div>
        </div>

        <div class="my-5"></div>

        <div  class="row w-75 mx-auto p-3">
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
            <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>

                </div>
              </div>
            </label>
          </div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
            <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    `,
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            De los siguientes simbolos que veras a continuación. ¿Cuál consideras que es el símbolo usado para indicar Inicio y Fin en un diagramade flujo?
          </div>
        </div>

        <div class="my-5"></div>

        <div  class="row w-75 mx-auto p-3">
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
            <label id="ask-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>

                </div>
              </div>
            </label>
          </div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
            <label id="ask-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          <div class="my-3"></div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
            <label id="ask-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
            <label id="ask-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    `,
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            Al parecer hay un intruso dentro de las siguientes imagenes, quiere hacernos creer que forma parte de los símbolos de los diagramas de flujo. Puedes identificar al intruso.
          </div>
        </div>

        <div class="my-5"></div>

        <div  class="row w-75 mx-auto p-3">
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
            <label id="ask-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>

                </div>
              </div>
            </label>
          </div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
            <label id="ask-2-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          <div class="my-3"></div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
            <label id="ask-3-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
            <label id="ask-4-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    `,
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            Me temo que he olvidado por completo para que son usados los diagramas de flujo. Puedes ayudarme a recordar, con las siguientes opciones indicame para que son usados los D.F.
          </div>
        </div>

        <div class="my-5"></div>

        <div  class="row w-75 mx-auto p-3">
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
            <label id="ask-1-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
              <div class="col">
                <div class="card rounded-4">
                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-6 fw-bold text-dark">Hacer operaciones mátematicas.</p>
                    </div>
                  </div>

                </div>
              </div>
            </label>
          </div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
            <label id="ask-2-2-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2">
              <div class="col">
                <div class="card rounded-4">

                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-6 fw-bold text-dark">Comparar la relación entre dos valores.</p>
                    </div>
                  </div>

                </div>
              </div>
            </label>
          </div>

          <div class="my-3"></div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
            <label id="ask-3-3-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3">
              <div class="col">
                <div class="card rounded-4">
                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-6 fw-bold text-dark">Representar graficamente un algoritmo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>

          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
            <label id="ask-4-4-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4">
              <div class="col">
                <div class="card rounded-4">
                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-6 fw-bold text-dark">Comparar la realación entre dos valores.</p>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    `,
  ];

  for (let i = 0; i < questions.length; i++) {
    yield questions[i]
  }
}

export default game_diagramaDeFlujo;

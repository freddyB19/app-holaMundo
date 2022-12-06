function* game_operadores() {
  const questions = [
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            Completa el siguiente código. Debes elegir el operador correcta, para que al momento de comparar si los dos números son iguales su resultado sea verdadero.
          </div>
        </div>

        <div class="my-5"></div>

        <div class="mb-3 row text-bg-dark rounded fs-5 p-3 w-75 mx-auto">
          <div class="d-flex justify-content-center">
            <span class="fw-bold text-ligth me-2"> 10 </span>
            <input type="text" class="form-control text-bg-dark w-50" id="completar_cod" disabled>
            <span class="fw-bold text-ligth mx-2"> 10 </span>
            <span class="text-primary fw-bold mx-2">;</span>
            <span class="text-secondary fw-bold mx-2 fst-italic">// (Verdadero)</span>

          </div>
        </div>
        <div class="my-3"></div>

        <div  class="row w-50 mx-auto p-3">
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
            <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><h1 class="text-primary fs-1 fw-bold"><-</h1></label>
          </div>
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
            <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"><h1 class="text-primary fs-1 fw-bold">=</h1></label>
          </div>
          <div class="my-3"></div>
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
            <label id="ask-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3"><h1 class="text-primary fs-1 fw-bold">+</h1></label>
          </div>
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
            <label id="ask-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4"><h1 class="text-primary fs-1 fw-bold">>=</h1></label>
          </div>
        </div>
      </div>
    `,
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            Es momento de que idenfiques el error en el siguiente código.
          </div>
        </div>

        <div class="my-5"></div>
        <div class="form-check  fs-5 p-3 w-75 mx-auto">
          <div class="d-flex align-items-center justify-content-sm-center">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label id="ask-1" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault1">
              <span class="text-secondary fw-bold">1  |</span> <span style="margin-left: 40px;">mensaje <span class="text-primary fw-bold"> <- </span><span class="text-warning fw-bold"> "Buenos" </span> <span class="text-danger fw-bold"> + </span> <span class="text-warning fw-bold"> " días" </span>  <span class="text-primary fw-bold">; </span> </span>
            </label>
          </div>

          <div class="d-flex align-items-center justify-content-sm-center">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label id="ask-2" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault2">
              <span class="text-secondary fw-bold">2  |</span> <span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span> <span class="text-warning fw-bold">"Mostrar mensaje: "</span>, mensaje<span class="text-primary fw-bold">; </span></span>
            </label>
          </div>

          <div class="d-flex align-items-center justify-content-sm-center">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
            <label id="ask-3" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault3">
              <span class="text-secondary fw-bold">3  |</span> <span style="margin-left: 40px;"><span class="text-secondary fw-bold fst-italic"> // No hay error </span>  </span>
            </label>
          </div>

        </div>
      </div>
    `,
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            ¿Qué tipo de operadores debo usar si quiero comparar el valor entre dos variables?
          </div>
        </div>

        <div class="my-5"></div>


        <div  class="row w-75 mx-auto p-3">
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
            <label id="ask-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>

                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-5 fw-bold text-dark">Operadores de concatenación</p>
                    </div>
                  </div>
                </div>
              </div>



            </label>
          </div>
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
            <label id="ask-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2">
              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>

                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-5 fw-bold text-dark">Operadores Lógicos.</p>
                    </div>
                  </div>
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
                  <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>

                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-5 fw-bold text-dark">Operadores aritmeticos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
          <div class="col-sm-6 d-grid gap-2">
            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
            <label id="ask-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4">

              <div class="col">
                <div class="card rounded-4 w-100" style="height:250px;">
                  <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>

                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-5 fw-bold text-dark">Operadores relacionales.</p>
                    </div>
                  </div>
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
            Completa el código. Coloca el operador correcto para asignarle este valor a la variable: <span class="fw-bold">nombre</span>
          </div>
        </div>

        <div class="my-5"></div>


        <div class="mb-3 row text-bg-dark rounded fs-5 p-3 w-75 mx-auto">
          <div class="d-flex justify-content-center">
            <span class="fw-bold text-ligth me-2"> nombre </span>
            <input type="text" class="form-control text-bg-dark w-50" id="success-outlined-op1">
            <span class="fw-bold text-warning mx-2"> "María" </span>
            <span class="text-primary fw-bold mx-2">;</span>

          </div>
        </div>
      </div>
    `,

  ];

  for (let i = 0; i < questions.length; i++) {
    yield questions[i]
  }
}

export default game_operadores;

function* game_estructuraCondicional() {
  const questions = [
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Teniendo en cuenta la siguiente condición, ¿Cuál de estas instrucciones sera ejecutada?
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-75 mx-auto p-3">
        <div class="d-flex justify-content-center">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
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

      <div class="my-3"></div>

      <div  class="row w-75 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op2">
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
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-op3">
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
          Las Estructuras de selección simple ejecuta:
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-75 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Un bloque de instrucción cuando la condición es verdadera.</p>
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
              <div class="card rounded-4">

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Un bloque de instrucción (A) cuando la condición es verdadera o un bloque diferente, un bloque (B), cuando es falsa .</p>
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
          Las Estructuras de selección simple ejecuta:
        </div>
      </div>

      <div class="my-5"></div>

      <div class="d-flex justify-content-center row w-50 mx-auto p-3">
        <div class="col">
          <div class="card rounded-4 w-100" style="height:250px;">
            <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
            </svg>

          </div>
        </div>
      </div>

      <div class="my-3"></div>

      <div  class="row w-50 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><span class="fs-4 fw-bold">15 <span class="text-danger fs-4 fw-bold"> < </span> 18 </span></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2-2-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"><span class="fs-4 fw-bold">15 <span class="text-danger fs-4 fw-bold"> = </span> 18 </span></label>
        </div>
        <div class="my-3"></div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3-3-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3"><span class="fs-4 fw-bold">15 <span class="text-danger fs-4 fw-bold"> >= </span> 18 </span></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4-4-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4"><span class="fs-4 fw-bold">15 <span class="text-danger fs-4 fw-bold"> - </span> 18 </span></label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
    <div class="card">
      <div class="card-body text-center">
        Dependiendo de una condición, se puede ejecutar un bloque de instrucciones (A) o un bloque de instrucciones (B). A esto se le conoce como:
      </div>
    </div>

    <div class="my-5"></div>
    <div class="d-flex justify-content-center row w-50 mx-auto p-3">
      <div class="col">
        <div class="card rounded-4 w-100" style="height:250px;">
          <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
          </svg>

        </div>
      </div>
    </div>
    <div class="my-3"></div>



    <div  class="row w-75 mx-auto p-3">
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
        <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
          <div class="col">
            <div class="card rounded-4">
              <div class="card-body">
                <div class="text-center">
                  <p class="card-text fs-6 fw-bold text-dark">Selección múltiple.</p>
                </div>
              </div>

            </div>
          </div>
        </label>
      </div>

      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
        <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2">
          <div class="col">
            <div class="card rounded-4">

              <div class="card-body">
                <div class="text-center">
                  <p class="card-text fs-6 fw-bold text-dark">Lista de elementos.</p>
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
            <div class="card rounded-4">
              <div class="card-body">
                <div class="text-center">
                  <p class="card-text fs-6 fw-bold text-dark">Selección doble.</p>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>

      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
        <label id="ask-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4">
          <div class="col">
            <div class="card rounded-4">
              <div class="card-body">
                <div class="text-center">
                  <p class="card-text fs-6 fw-bold text-dark">Operadores.</p>
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

export default game_estructuraCondicional;

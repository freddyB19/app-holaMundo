function* game_estructuraSecuencial() {
  const questions = [
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Por cuál otro nombre se le conoce a las Estructura Secuenciales
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-75 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Estructura líneal.</p>
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
                    <p class="card-text fs-6 fw-bold text-dark">Mapa de sucesos.</p>
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
                    <p class="card-text fs-6 fw-bold text-dark">Estructura iterativa.</p>
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
                    <p class="card-text fs-6 fw-bold text-dark">Conjunto de instrucciones.</p>
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
          Completa el pseudocódigo.
        </div>
      </div>

      <div class="my-5"></div>

      <div class="mb-3 text-bg-dark rounded fs-5 p-3 w-100 mx-auto">
        <p class="fw-bold text-ligth me-2 d-flex justify-content-start">
          <span class="text-secondary fw-bold">1  |</span>
          <span class="fw-bold text-ligth d-flex justify-content-start">
            <input  type="text" class="form-control text-bg-dark w-50 ms-2" id="success-outlined-op1" name="completar_cod-1">
            <span class="ms-2">Suma</span>
          </span>
        </p>
        <p class="fw-bold text-ligth me-2 mb-3">
          <span class="text-secondary fw-bold">2  |</span> <span style="margin-left: 40px;"><span class="fw-bold text-primary">Definir</span> num_1, num_2, resultado  <span class="fw-bold text-primary">como Entero;</span> </span>
        </p>
        <p class="d-flex justify-content-start">
          <span class="text-secondary fw-bold">3  |</span><input style="margin-left: 40px;" id="success-outlined-op2" type="text" class="form-control text-bg-dark w-25" name="completar_cod-2"> <span class="fw-bold text-warning mx-2"> " Ingrese un número: " </span>
          <span class="text-primary fw-bold mx-2">;</span>
        </p>

        <p class="d-flex justify-content-start">
          <span class="text-secondary fw-bold">4  |</span>
          <span style="margin-left: 40px;">
            <span class="fw-bold text-primary mx-2"> Leer </span>
            <span class="text-ligth fw-bold"> num_1 </span><span class="fw-bold text-primary">;</span>
          </span>
        </p>
        <p class="d-flex justify-content-start">
          <span class="text-secondary fw-bold">5  |</span><input style="margin-left: 40px;" id="success-outlined-op3" type="text" class="form-control text-bg-dark w-25" name="completar_cod-3"> <span class="fw-bold text-warning mx-2"> " Ingrese un número: " </span>
          <span class="text-primary fw-bold mx-2">;</span>
        </p>
        <p class="d-flex justify-content-start">
          <span class="text-secondary fw-bold">6  |</span>
          <span style="margin-left: 40px;">
            <span class="fw-bold text-primary mx-2"> Leer </span>
            <span class="text-ligth fw-bold"> num_2 </span><span class="fw-bold text-primary ">;</span>
          </span>
        </p>
        <p class="d-flex justify-content-start">
          <span class="text-secondary fw-bold">7  |</span>
          <span style="margin-left: 40px;" class="d-flex justify-content-start">
            <span class="text-ligth fw-bold mx-2">resultado</span> <input type="text" id="success-outlined-op4" class="form-control text-bg-dark w-25 ms-2"  name="completar_cod-4">
            <span class="text-ligth fw-bold mx-2"> num_1 </span>
            <input type="text" class="form-control text-bg-dark w-25 ms-2" id="success-outlined-op5"  name="completar_cod-5">
            <span class="text-ligth fw-bold mx-2"> num_2 </span><span class="fw-bold text-primary ">;</span>
          </span>
        </p>
        <p class="d-flex justify-content-start">
          <span class="text-secondary fw-bold">8  |</span>
          <span style="margin-left: 40px;">
            <span class="fw-bold text-primary mx-2"> Escribir </span>
            <span class="text-warning fw-bold"> " La suma es: " </span>, <span class="text-ligth fw-bold">resultado</span> <span class="fw-bold text-primary mx-2"> ; </span>
          </span>
        </p>
        <p class="fw-bold text-ligth me-2 d-flex justify-content-start">
          <span class="text-secondary fw-bold">9  | </span><input type="text" id="success-outlined-op6" class="form-control text-bg-dark w-25 ms-2"  name="completar_cod-6">
        </p>
      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          De las siguientes imagenes, ¿Cuál consideras que representa una Estructura Secuencial?
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
          Veamos si eres un experto sobre las Estructura Secuenciales. Dime, ¿qué no se puede hacer dentro de una Estructura Secuencial?
        </div>
      </div>

      <div class="my-5"></div>
      <div  class="row w-75 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Darle valores a variables.</p>
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
                    <p class="card-text fs-6 fw-bold text-dark">Realizar calculos.</p>
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
                    <p class="card-text fs-6 fw-bold text-dark">Definir una condición.</p>
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
                    <p class="card-text fs-6 fw-bold text-dark">Mostrar mensajes.</p>
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

export default game_estructuraSecuencial;

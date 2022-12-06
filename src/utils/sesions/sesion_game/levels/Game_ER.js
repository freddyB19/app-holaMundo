function* game_estructuraRepetitiva() {
  const questions = [
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          ¿Sabes que son los bucles infinitos? ¿Crees que puedas crear uno? A continuación deberas crear uno elige bien.
        </div>
      </div>

      <div class="my-5"></div>
      <div class="mb-3 row text-bg-dark rounded fs-5 p-3 w-75 mx-auto">
        <div>
          <p class="d-flex justify-content-start">
            <span class="text-secondary">1  |</span>
            <span class="d-flex justify-content-center">
              <span class="fw-bold text-primary mx-2"> Mientras </span>
              <input disabled type="text" class="form-control text-bg-dark w-50" id="completar_cod" disabled>

              <span class="fw-bold text-primary mx-2"> Hasta </span>
              <p>
                <span class="text-secondary">2  |</span>
                <span style="margin-left: 40px;">
                  <span class="fw-bold fs-3 text-ligth me-2"> . . . </span>
                </span>
              </p>
            </span>
          </p>
          <span class="text-secondary">3  |</span>
          <span class="text-primary fw-bold mx-2">FinMientas</span>

        </div>
      </div>

      <div  class="row w-50 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><span class="fs-4 fw-bold">Verdadero</span></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2-2-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"><span class="fs-4 fw-bold">15 <span class="text-danger fs-4 fw-bold"> = </span> 18 </span></label>
        </div>
        <div class="my-3"></div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3-3-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3"><span class="fs-4 fw-bold">Falso</span></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4-4-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4"><span class="fs-4 fw-bold">10 <span class="text-danger fs-4 fw-bold"> - </span> 3 </span></label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Analiza la siguiente instrucción.
        </div>
      </div>

      <div class="my-5"></div>
      <div class="mb-3 row text-bg-dark rounded fs-5 p-3 w-75 mx-auto">
        <div>
          <p>
            <span class="text-secondary" >1  |</span>
            <span >
              <span class="fw-bold text-ligth mx-2"> edad </span>
              <span class="fw-bold text-primary me-2"> <- </span>
              <span class="fw-bold text-ligth me-2"> 13 </span>
              <span class="fw-bold text-primary me-2"> ; </span>
            </span>
          </p>


          <p class="d-flex justify-content-start">
            <span class="text-secondary">2  |</span>
            <span class="d-flex justify-content-center">
              <span class="fw-bold text-primary mx-2"> Mientras </span>
              <span class="fw-bold text-ligth mx-2">edad</span>
              <span class="fw-bold text-danger mx-2">>=</span>
              <span class="fw-bold text-ligth mx-2">18</span>



              <span class="fw-bold text-primary mx-2"> Hacer </span>
              <p>
                <span class="text-secondary">3  |</span>
                <span style="margin-left: 40px;">
                  <span class="fw-bold fs-3 text-ligth me-2"> . . . </span>
                </span>
              </p>
            </span>
          </p>
          <span class="text-secondary">4  |</span>
          <span class="text-primary fw-bold mx-2">FinMientas</span>

        </div>
      </div>

      <div  class="row w-50 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><span class="text-primary fs-4 fw-bold">Si</span></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2-2-2-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"> <span class="text-danger fs-4 fw-bold"> No </span></label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Necesito que una instrucción se repita varias veces, pero antes de repitir la instrucción se debe cumplir una condición. ¿Cuál de estos iteradores debo usar?
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
                    <p class="card-text fs-6 fw-bold text-dark">Iterador Repetir-Hasta.</p>
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
                    <p class="card-text fs-6 fw-bold text-dark">Iterador Mientras-Hacer.</p>
                  </div>
                </div>

              </div>
            </div>
          </label>
        </div>

        <div class="my-3"></div>

        <div class="d-flex justify-content-center">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3">
            <div class="col">
              <div class="card rounded-4" style="width: 250px;">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Iterador Para-Hacer.</p>
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
          Puedes predecir cuantas veces se repetirá el mensaje.
        </div>
      </div>

      <div class="my-5"></div>
      <div class="mb-3 row text-bg-dark rounded fs-5 p-3 w-75 mx-auto">
        <div>
          <p>
            <span class="text-secondary" >1  |</span>
            <span >
              <span class="fw-bold text-primary mx-2"> Para </span>
              <span class="fw-bold text-ligth mx-2"> i </span>
              <span class="fw-bold text-primary me-2"> <- </span>
              <span class="fw-bold text-ligth me-2"> 1 </span>
              <span class="fw-bold text-primary mx-2"> Hasta </span>
              <span class="fw-bold text-ligth me-2"> 5 </span>


              <span class="fw-bold text-primary me-2"> Hacer </span>
            </span>
          </p>


          <p class="d-flex justify-content-start">
            <span class="text-secondary" >2  |</span>
            <span class="d-flex justify-content-center" style="margin-left: 40px;">
              <span class="fw-bold text-primary mx-2"> Escribir </span>
              <span class="fw-bold text-warning mx-2">" ¡¡ Bienvenido !! "</span>
              <span class="fw-bold text-primary"> ; </span>
            </span>
          </p>
          <span class="text-secondary">3  |</span>
          <span class="text-primary fw-bold mx-2">FinPara</span>

        </div>
      </div>

      <div class="w-75 mx-auto p-3">
        <div class="mb-3 row">
          <label for="success-outlined-op1" class="col-sm-2 col-form-label">Respuesta: </label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="success-outlined-op1">
          </div>
        </div>
      </div>
    </div>
    `,
  ];
  for (let i = 0; i < questions.length; i++) {
    yield questions[i]
  }
}
export default game_estructuraRepetitiva;

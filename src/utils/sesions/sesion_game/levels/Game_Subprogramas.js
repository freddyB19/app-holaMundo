function* game_subprogramas() {
  const questions = [
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Cuando una función recibe un argumento, a esta también se le conoce como:
        </div>
      </div>

      <div class="my-5"></div>
      <div  class="row w-75 mx-auto p-3" id="respuestas">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1" class="mx-auto btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Operación de una función.</p>
                  </div>
                </div>

              </div>
            </div>
          </label>
        </div>

        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2" class="btn btn-outline-success btn-lg  mx-auto" for="success-outlined-op2">
            <div class="col">
              <div class="card rounded-4">

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Parámetro.</p>
                  </div>
                </div>

              </div>
            </div>
          </label>
        </div>

        <div class="my-3"></div>

        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3" class="btn btn-outline-success btn-lg mx-auto" for="success-outlined-op3">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Datos de una función.</p>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4" class="btn btn-outline-success btn-lg  mx-auto" for="success-outlined-op4">
            <div class="col">
              <div class="card rounded-4" >
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Valor de una función.</p>
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
export default game_subprogramas;

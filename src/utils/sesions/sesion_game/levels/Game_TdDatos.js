function* game_tiposDeDatos() {
  const questions = [
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          ¿Que representa los datos alfanúmericos?
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-50 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><h1 class="text-primary fs-4">Números</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"><h1 class="text-danger fs-4">Verdadero</h1><h1 class="fs-4 text-dark">o</h1><h1 class="text-info fs-4">Falso</h1></label>
        </div>
        <div class="my-3"></div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3"><h1 class="text-warning fs-4">"Cadenas"</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4"><h1 class="text-info fs-4">Listas</h1></label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body">
          Identifica el error en el siguiente código. Solo debes hacer "click" sobre algunas de las líneas para indicar el error.
        </div>
      </div>

      <div class="my-5"></div>

      <div class="form-check  fs-5 p-3 w-50 mx-auto">
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label id="ask-1" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault1">
            <span class="text-secondary fw-bold">1  |</span> <span style="margin-left: 40px;">dato <span class="text-primary fw-bold"> <- </span><span class="text-warning fw-bold"> "23" </span>  <span class="text-primary fw-bold">; </span> </span>
          </label>
        </div>

        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
          <label id="ask-2" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault2">
            <span class="text-secondary fw-bold">2  |</span> <span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span> <span class="text-warning fw-bold">"Resultado: "</span>, dato<span class="text-primary fw-bold">; </span></span>
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
        <div class="card-body">
          ¿Puedes recordar cuantos valores pueden tener los datos lógicos?
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-50 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><h1 class="text-dark fs-4 fw-bold">Uno</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"><h1 class="text-dark fs-4 fw-bold">Dos</h1></label>
        </div>
        <div class="my-3"></div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3"><h1 class="text-dark fs-4 fw-bold">Cinco</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4"><h1 class="text-dark fs-4 fw-bold">Tres</h1></label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="card">
      <div class="card-body">
        Completa el siguiente código. Asigna un valor alfanúmerico a la siguiente variable. No olvides incluir las famosas comillas ("", '')
      </div>
    </div>

    <div class="my-5"></div>

    <div class="mb-3 row text-bg-dark rounded fs-5 p-3 w-75 mx-auto">
      <div class="d-flex justify-content-center">
        <label for="completar_cod" class="col-sm-2 col-form-label text-ligth"> dato<span class="text-primary fw-bold"> <- </span>  </label>
        <input type="text" class="form-control text-bg-dark w-50" id="success-outlined-op1">    <span class="text-primary fw-bold mx-2">;</span>
      </div>
    </div>
    `

  ];

  for (let i = 0; i < questions.length; i++) {
    yield questions[i]
  }
}

export default game_tiposDeDatos;

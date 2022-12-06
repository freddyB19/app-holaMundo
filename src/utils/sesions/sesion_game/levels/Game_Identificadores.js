
function* game_identificadores() {
  const questions = [
    `
    <div class="card">
      <div class="card-body text-center">
        ¿Cual de los siguientes identificadores es correcto?
      </div>
    </div>

    <div class="my-5"></div>

    <div  class="row w-50 mx-auto p-3">
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-fecha" autocomplete="off">
        <label id="ask-1" class="btn btn-outline-success btn-lg" for="success-outlined-fecha">%fecha</label>
      </div>
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-ciudad" autocomplete="off">
        <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-ciudad">$ciudad</label>
      </div>
      <div class="my-3"></div>
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-nombre" autocomplete="off">
        <label id="ask-3" class="btn btn-outline-success btn-lg" for="success-outlined-nombre">1nombre</label>
      </div>
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-edad" autocomplete="off">
        <label id="ask-4" class="btn btn-outline-success btn-lg" for="success-outlined-edad">edad</label>
      </div>
    </div>
    `,
    `
    <div class="card">
      <div class="card-body text-center">
        ¿Cual de estos identificadores es el incorrecto?
      </div>
    </div>

    <div class="my-5"></div>

    <div class="row w-50 mx-auto p-3">
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-5aldo" autocomplete="off">
        <label id="ask-1" class="btn btn-outline-success btn-lg" for="success-outlined-5aldo">5aldo</label>
      </div>
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-Nombre" autocomplete="off">
        <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-Nombre">Nombre</label>
      </div>
      <div class="my-3"></div>
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-ciudad" autocomplete="off">
        <label id="ask-3" class="btn btn-outline-success btn-lg" for="success-outlined-ciudad">+ciudad</label>
      </div>
      <div class="col-sm-6 d-grid gap-2">
        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-fecha_1" autocomplete="off">
        <label id="ask-4" class="btn btn-outline-success btn-lg" for="success-outlined-fecha_1">fecha_1</label>
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
            <span class="text-secondary fw-bold">1  |</span> <span style="margin-left: 40px;"><span class="text-primary fw-bold">Mientras</span> <span class="text-primary fw-bold"> <- </span> 3 <span class="text-primary fw-bold">; </span> </span>
          </label>
        </div>

        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
          <label id="ask-2" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault2">
            <span class="text-secondary fw-bold">2  |</span> <span style="margin-left: 40px;">suma <span class="text-primary fw-bold"> <- </span> <span class="text-primary fw-bold">Mientras</span>  <span class="text-danger fw-bold"> + </span> 10  <span class="text-primary fw-bold">; </span></span>
          </label>
        </div>

        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
          <label id="ask-3" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault3">
            <span class="text-secondary fw-bold">3  |</span> <span style="margin-left: 40px;"><span class="text-primary fw-bold"> Escribir </span> <span class="text-warning fw-bold">"El resultado es: "</span>, suma<span class="text-primary fw-bold">; </span> </span>
          </label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="card">
      <div class="card-body">
        Completa el siguiente código. Es momento de que selecciones un nombre para esta variable, recuerda lo aprendido.
      </div>
    </div>

    <div class="my-5"></div>

    <div class="mb-3 row text-bg-dark rounded fs-5 p-3 w-50 mx-auto">
      <div class="col-sm-10 mx-0">
        <input type="text" class="form-control text-bg-dark w-75" id="completar_cod">
      </div>
      <label for="completar_cod" class="col-sm-2 col-form-label text-ligth"> <span class="text-primary fw-bold"> <- </span> 3 <span class="text-primary fw-bold">;</span></label>

    </div>

    `,
  ]

  for (let i = 0; i < questions.length; i++) {
    yield questions[i]
  }
}

export default game_identificadores;

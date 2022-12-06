function* game_diagramaDeFlujo() {
  const questions = [
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            ¿Que representa los datos alfanúmericos?
          </div>
        </div>

        <div class="my-5"></div>
        <div class="form-check  fs-5 p-3 w-75 mx-auto">
          <div class="d-flex align-items-center justify-content-sm-center">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label id="ask-1" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault1">
              <span class="text-secondary fw-bold">1  |</span> <span style="margin-left: 40px;"><span class="text-primary fw-bold">Definir</span> numero <span class="text-primary fw-bold">como Entero</span> <span class="text-primary fw-bold">; </span> </span>
            </label>
          </div>

          <div class="d-flex align-items-center justify-content-sm-center">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label id="ask-2" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault2">
              <span class="text-secondary fw-bold">2  |</span> <span style="margin-left: 40px;"><span class="text-primary fw-bold">Escribir </span> <span class="text-warning fw-bold">"Ingrese un número entero: "</span><span class="text-primary fw-bold">; </span></span>
            </label>
          </div>
          <div class="d-flex align-items-center justify-content-sm-center">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
            <label id="ask-3" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault3">
              <span class="text-secondary fw-bold">3  |</span> <span style="margin-left: 40px;"><span class="text-primary fw-bold">Leer </span> <span class="text-warning fw-bold">"numero"</span><span class="text-primary fw-bold">; </span></span>
            </label>
          </div>

          <div class="d-flex align-items-center justify-content-sm-center">
            <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
            <label id="ask-4" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault4">
              <span class="text-secondary fw-bold">4  |</span> <span style="margin-left: 40px;"><span class="text-secondary fw-bold fst-italic"> // No hay error </span>  </span>
            </label>
          </div>
        </div>
      </div>
    `,
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            Completa el siguiente pseudocódigo. Parece algo complicado, pero solo debes ingresar las palabras claves para completar este psedocódigo. Sé que puedes, ¡¡vamos!!
          </div>
        </div>

        <div class="my-5"></div>

        <div class="mb-3 text-bg-dark rounded fs-5 p-3 w-75 mx-auto">
          <p class="fw-bold text-ligth me-2 mb-3"><span class="text-secondary fw-bold">1  |</span><span class="fw-bold text-primary"> Proceso </span> Saludo </p>
          <p class="d-flex justify-content-start">
            <span class="text-secondary fw-bold">2  |</span><input style="margin-left: 40px;" type="text" class="form-control text-bg-dark w-25" id="success-outlined-op1"> <span class="fw-bold text-warning mx-2"> " Hola Mundo " </span>
            <span class="text-primary fw-bold mx-2">;</span>
          </p>
          <p class="fw-bold text-ligth me-2 d-flex justify-content-start"><span class="text-secondary fw-bold">3  | </span><input type="text" class="form-control text-bg-dark w-25 ms-2"  id="success-outlined-op2"></p>
        </div>
      </div>
    `,
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            Si quieres crear una aplicación para celulares, una aplicación web o un software. ¿Qué consideras que es lo más recomendable hacer primero?
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
                      <p class="card-text fs-6 fw-bold text-dark">Construir el programa primero y luego el pseudocódigo.</p>
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
                      <p class="card-text fs-6 fw-bold text-dark">Diseñar el pseudocódigo y luego construir el programa con un lenguaje de programación.</p>
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
                      <p class="card-text fs-6 fw-bold text-dark">Simplemente construir el programa.</p>
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
                <div class="card rounded-4">
                  <div class="card-body">
                    <div class="text-center">
                      <p class="card-text fs-6 fw-bold text-dark">Mientras creo la aplicación diseño el psedocódigo.</p>
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
            Completa el siguiente pseudocódigo. Nuevamente aquí, lo sé. Concéntrate. Sé que puedes, ¡¡vamos!!
          </div>
        </div>

        <div class="my-5"></div>

        <div class="mb-3 text-bg-dark rounded fs-5 p-3 w-75 mx-auto">
          <p class="fw-bold text-ligth me-2 d-flex justify-content-start">
            <span class="text-secondary fw-bold">1  |</span>
            <span class="fw-bold text-ligth d-flex justify-content-start">
              <input  type="text" class="form-control text-bg-dark w-50 ms-2" id="success-outlined-op1" name="completar_cod-1">
              <span class="ms-2">Saludo</span>
            </span>
          </p>
          <p class="fw-bold text-ligth me-2 mb-3">
            <span class="text-secondary fw-bold">2  |</span> <span style="margin-left: 40px;"><span class="fw-bold text-primary">Definir</span> nombre <span class="fw-bold text-primary">como Entero;</span> </span>
          </p>
          <p class="d-flex justify-content-start">
            <span class="text-secondary fw-bold">3  |<span style="margin-left: 40px;"><span class="fw-bold text-primary">Escribir </span> <span class="fw-bold text-warning mx-2"> " Ingrese un nombre: " </span>  </span>
            <span class="text-primary fw-bold mx-2">;</span>
          </p>
          <p class="d-flex justify-content-start">
            <span class="text-secondary fw-bold">4  |</span><input style="margin-left: 40px;" id="success-outlined-op2" type="text" class="form-control text-bg-dark w-25" name="completar_cod-2">
            <span class="text-ligth fw-bold mx-2"> nombre </span> <span class="fw-bold text-primary mx-2"> ; </span>
          </p>
          <p class="fw-bold text-ligth me-2 d-flex justify-content-start">
            <span class="text-secondary fw-bold">5  | </span><input type="text" id="success-outlined-op3" class="form-control text-bg-dark w-25 ms-2"  id="completar_cod">
          </p>
        </div>
      </div>
    `,
  ];
  for (let i = 0; i < questions.length; i++) {
    yield questions[i]
  }
}
export default game_diagramaDeFlujo;

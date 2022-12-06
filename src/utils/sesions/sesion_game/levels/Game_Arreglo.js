function* game_arreglo() {
  const questions = [
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Un arreglo puede almacenar:
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
                    <p class="card-text fs-6 fw-bold text-dark">Solamente datos de Verdadero y Falso.</p>
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
              <div class="card rounded-4" >

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Diferentes tipos de datos. Como los números, cadenas, entre otros.</p>
                  </div>
                </div>

              </div>
            </div>
          </label>
        </div>

        <div class="my-3"></div>


        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Datos alfanúmericos. Como las cadenas</p>
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
                    <p class="card-text fs-6 fw-bold text-dark">Un gran número de datos del mismo tipo.</p>
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
          Si tuvieras que acceder al primer elemento o dato de un arreglo. ¿Cuál consideras que sea la posición de este elemento en el arreglo? ¿2, 10, 1 o 4? Dime tu respuesta.
        </div>
      </div>

      <div class="my-5"></div>
      <div  class="row w-50 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><h1 class="fs-3">10</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"><h1 class="fs-3">4</h1></label>
        </div>
        <div class="my-3"></div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3"><h1 class="fs-3">2</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4"><h1 class="fs-3">0</h1></label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Completa el siguiente pseudocódigo. Debes elegir la opción correcta para que poder ver los datos que guarda el arreglo.
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
              <span class="fw-bold text-danger me-2"> <- </span>
              <span class="fw-bold text-ligth me-2"> 0 </span>
              <span class="fw-bold text-primary mx-2"> Hasta </span>
              <span class="fw-bold text-ligth me-2"> 10 </span>
              <span class="fw-bold text-primary me-2"> Hacer </span>
            </span>
          </p>


          <p class="d-flex justify-content-start">
            <span class="text-secondary" >2  |</span>
            <span class="d-flex justify-content-start" style="margin-left: 40px;">
              <span class="fw-bold text-primary mx-2"> Escribir </span><span class="fw-bold text-warning mx-2">" Elemento: "</span><input disabled type="text" class="form-control text-bg-dark w-25" name="completar_cod-3">
              <span class="text-primary fw-bold mx-2">;</span>
            </span>
          </p>
          <span class="text-secondary">3  |</span>
          <span class="text-primary fw-bold mx-2">FinPara</span>

        </div>
      </div>

      <div class="my-3"></div>


      <div  class="row w-50 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><h1 class="fs-3">arreglo</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"><h1 class="fs-3">arreglo<span class="text-primary">[</span>i<span class="text-primary">]</span> </h1></label>
        </div>
        <div class="my-3"></div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3"><h1 class="fs-3">arreglo<span class="text-primary">(</span>i<span class="text-primary">)</span></h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4"><h1 class="fs-3">arreglo<span class="text-danger">+</span>i</h1></label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Anteriormente te presentamos la diferencia entre una matriz y un arreglo. Así que conociendo esto, puedes indicarme ¿Cuantas dimensiones se le conoce que tiene una matriz?
        </div>
      </div>

      <div class="my-5"></div>
      <div  class="row w-50 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1"><h1 class="fs-3">Uno</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2-2-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2"><h1 class="fs-3">Dos</h1></label>
        </div>
        <div class="my-3"></div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3-3-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3"><h1 class="fs-3">Cinco</h1></label>
        </div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4-4-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4"><h1 class="fs-3">Diez</h1></label>
        </div>
      </div>
    </div>
    `,
  ];
  
  for (let i = 0; i < questions.length; i++) {
    yield questions[i]
  }
}

export default game_arreglo;

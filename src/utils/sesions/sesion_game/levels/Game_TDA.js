function* game_tda() {
  const questions = [
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Para ayudarte a entender la diferencia entre una lista y un arreglo te diremos esto.
          Si no sabes cuantos elemetos guardaras deberias usar una lista,
          si ya conoces la cantidad exacta de elementos que guardaras deberias usar un arreglo.
          Teniendo en cuenta esto, si te digo que quiero guardar una gran cantidad de numeros al azar, ¿comó deberia guardarlos?
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-75 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
            <div class="col">
              <div class="card rounded-4 mx-auto" style="height:250px; width: 250px;">
                <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-5 fw-bold text-dark">¿Con una lista?</p>
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
              <div class="card rounded-4 mx-auto" style="height:250px; width: 250px;">
                <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-5 fw-bold text-dark">¿Con un arreglo?</p>
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
        <div class="card-body">
          Identifica el error en el siguiente código. Solo debes hacer "click" sobre algunas de las líneas para indicar el error.
        </div>
      </div>

      <div class="my-5"></div>

      <div class="form-check  fs-5 p-3 w-50 mx-auto">
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label id="ask-2-2" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault1">
            <span class="text-secondary fw-bold">1  |</span> <span style="margin-left: 40px;">coordenadas <span class="text-primary fw-bold"> <- </span> <span class="text-primary fw-bold">(</span> (5,4), (3,2) <span class="text-primary fw-bold">)</span><span class="text-primary fw-bold">; </span></span>
          </label>
        </div>

        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
          <label id="ask-1-1" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault2">
            <span class="text-secondary fw-bold">2  |</span> <span style="margin-left: 40px;">coordenadas<span class="text-primary fw-bold"> [ </span>0<span class="text-primary fw-bold"> ] </span> <span class="text-primary fw-bold"> <- </span> <span class="text-primary fw-bold">(</span>10, 5<span class="text-primary fw-bold">)</span> <span class="text-primary fw-bold">; </span> </span>
          </label>
        </div>
      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Completa el pseudocódigo. Asigna la clave ID y el valor 3 (tiene que ser un número) al siguiente diccionario.
        </div>
      </div>

      <div class="my-5"></div>

      <div class="mb-3 text-bg-dark rounded fs-5 p-3 w-75 mx-auto">

        <p class="d-flex justify-content-start">
          <span class="text-secondary fw-bold">1  |</span>
          <span class="d-flex justify-content-start">
            <span class="text-ligth fw-bold ms-3">dict</span> <span class="text-primary fw-bold ms-2">[</span>  <input type="text" id="success-outlined-op1" class="form-control text-bg-dark w-25 ms-2"  name="completar_cod-4">
            <span class="text-primary fw-bold mx-2"> ] </span>
            <span class="text-primary fw-bold mx-2"> <- </span>

            <input type="text" class="form-control text-bg-dark w-25 me-2" id="success-outlined-op2" name="completar_cod-5">
            <span class="fw-bold text-primary me-2">;</span>
          </span>
        </p>

      </div>
    </div>
    `,
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          De acuerdo a tus conocimientos en tuplas, como tú consideras que se puede acceder a los valores de una tupla.
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-75 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-o" autocomplete="off">
          <label id="ask-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-o">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Mediante el indice.</p>
                  </div>
                </div>

              </div>
            </div>
          </label>
        </div>

        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2">
            <div class="col">
              <div class="card rounded-4">

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Mediante una clave.</p>
                  </div>
                </div>

              </div>
            </div>
          </label>
        </div>

        <div class="my-3"></div>

        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Mediante su longitud.</p>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div class="col-sm-6 d-grid gap-2">
          <input type="radio" class="btn-check" name="options-outlined" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4">
            <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text fs-6 fw-bold text-dark">Mediante un subprograma.</p>
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
        <div class="card-body">
          Identifica el error en el siguiente código. He armado un diccionario con las palabras sobre programación, puedes detectar si existe algún error.
        </div>
      </div>

      <div class="my-5"></div>

      <div class="form-check  fs-5 p-3 w-50 mx-auto" id="resultados-1">
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label id="ask-1-1-1-1" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault1">
            <span class="text-secondary fw-bold">1  |</span> diccionario <span class="text-primary fw-bold"> <- </span> <span class="text-primary fw-bold">{</span>
          </label>
        </div>

        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
          <label id="ask-2-2-2-2" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault2">
            <span class="text-secondary fw-bold">2  |</span> <span style="margin-left: 40px;"><span class="text-warning fw-bold"> " lista " </span><span class="text-ligth fw-bold"> : </span><span class="text-ligth mx-2">  50 </span>  </span>
          </label>
        </div>
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
          <label id="ask-3-3-3-3" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault3">
            <span class="text-secondary fw-bold">3  |</span> <span style="margin-left: 40px;"><span class="text-warning fw-bold"> " variable " </span> <span class="text-ligth fw-bold"> : </span> <span class="text-ligth mx-2">  5 </span> </span>
          </label>
        </div>
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
          <label id="ask-4-4-4-4" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault4">
            <span class="text-secondary fw-bold">4  |</span> <span style="margin-left: 40px;"><span class="text-warning fw-bold"> " iterador " </span> <span class="text-ligth fw-bold"> : </span> <span class="text-ligth mx-2">  15 </span> </span>
          </label>
        </div>
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault5">
          <label id="ask-5-5-5-5" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault5">
            <span class="text-secondary fw-bold">5  |</span> <span style="margin-left: 40px;"><span class="text-warning fw-bold"> " variable " </span> <span class="text-ligth fw-bold"> : </span> <span class="text-ligth mx-2">  20 </span> </span>
          </label>
        </div>
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault6">
          <label id="ask-6-6-6-6" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault6">
            <span class="text-secondary fw-bold">6  |</span> <span style="margin-left: 40px;"><span class="text-warning fw-bold"> " bucle " </span> <span class="text-ligth fw-bold"> : </span> <span class="text-ligth mx-2">  5 </span> </span>
          </label>
        </div>
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault7">
          <label id="ask-7-7-7-7" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault7">
            <span class="text-secondary fw-bold">7  |</span> <span style="margin-left: 40px;"><span class="text-warning fw-bold">  "arreglo " </span> <span class="text-ligth fw-bold"> : </span> <span class="text-ligth mx-2">  2 </span> </span>
          </label>
        </div>
        <div class="d-flex align-items-center justify-content-sm-center">
          <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault8">
          <label id="ask-8-8-8-8" class="text-bg-dark rounded p-2 form-check-label w-100 text-ligth" for="flexRadioDefault8">
            <span class="text-secondary fw-bold">8  |</span> <span class="text-primary fw-bold">}</span><span class="text-primary fw-bold">; </span>
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
export default game_tda;

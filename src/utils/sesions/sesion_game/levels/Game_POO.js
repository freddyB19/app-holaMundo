function* game_poo() {
  const questions = [
    `
    <div class="mx-auto" id="test">
      <div class="card">
        <div class="card-body text-center">
          Estoy diseñado un personaje de videojuegos, pero necesito saber cuales seran las habilidades o acciones que podra realizar el personaje. De la siguiente lista selecciona solo las habilidades que tendra el personaje
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-75 mx-auto p-3" id="resultados">
        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op1" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Super salto</p>
                  </div>
                </div>
              </div>
            </div>



          </label>
        </div>
        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op2" id="success-outlined-op2" autocomplete="off">
          <label id="ask-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Velocidad</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>
        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op3" id="success-outlined-op3" autocomplete="off" >
          <label id="ask-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text text-dark">Maxima velocidad</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>

        <div class="my-3"></div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op4" id="success-outlined-op4" autocomplete="off">
          <label id="ask-3" class="btn btn-outline-success btn-lg" for="success-outlined-op4" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Nombre</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>
        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op5" id="success-outlined-op5" autocomplete="off" >
          <label id="ask-5" class="btn btn-outline-success btn-lg" for="success-outlined-op5" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Guerrero</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>
        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op6" id="success-outlined-op6" autocomplete="off">
          <label id="ask-6" class="btn btn-outline-success btn-lg" for="success-outlined-op6" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Golpe con fuerza</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>
        <div class="my-3"></div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op7" id="success-outlined-op7" autocomplete="off">
          <label id="ask-7" class="btn btn-outline-success btn-lg" for="success-outlined-op7" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Poder</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op8" id="success-outlined-op8" autocomplete="off">
          <label id="ask-8" class="btn btn-outline-success btn-lg" for="success-outlined-op8" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text text-dark">Ataque explosivo</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op9" id="success-outlined-op9" autocomplete="off">
          <label id="ask-9" class="btn btn-outline-success btn-lg" for="success-outlined-op9" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Fuerza</p>
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
          Ya elegimos las habilidades de nuestro personaje, es momento de elegir cuales seran los atributos o caracteristicas del personaje. De la siguiente lista selecciona solo los atributos que tendra el personaje
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-75 mx-auto p-3">
        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op1" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Maxima velocidad</p>
                  </div>
                </div>
              </div>
            </div>



          </label>
        </div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op2" id="success-outlined-op2" autocomplete="off" >
          <label id="ask-2-2" class="btn btn-outline-success btn-lg" for="success-outlined-op2" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text text-dark">Velocidad</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op3" id="success-outlined-op3" autocomplete="off">
          <label id="ask-3-3" class="btn btn-outline-success btn-lg" for="success-outlined-op3" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Ataque con furia</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>

        <div class="my-3"></div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op4" id="success-outlined-op4" autocomplete="off">
          <label id="ask-4-4" class="btn btn-outline-success btn-lg" for="success-outlined-op4" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Guerrero </p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>
        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op5" id="success-outlined-op5" autocomplete="off" >
          <label id="ask-5-5" class="btn btn-outline-success btn-lg" for="success-outlined-op5" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Golpe con fuerza</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>
        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op6" id="success-outlined-op6" autocomplete="off">
          <label id="ask-6-6" class="btn btn-outline-success btn-lg" for="success-outlined-op6" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Super defensa</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>
        <div class="my-3"></div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op7" id="success-outlined-op7" autocomplete="off">
          <label id="ask-7-7" class="btn btn-outline-success btn-lg" for="success-outlined-op7" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Ataque de fuego </p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op8" id="success-outlined-op8" autocomplete="off">
          <label id="ask-8-8" class="btn btn-outline-success btn-lg" for="success-outlined-op8" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text text-dark">Poder</p>
                  </div>
                </div>
              </div>
            </div>

          </label>
        </div>

        <div class="col-sm-4 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op9" id="success-outlined-op9" autocomplete="off">
          <label id="ask-9-9" class="btn btn-outline-success btn-lg" for="success-outlined-op9" style="width: 170px;">
            <div class="col">
              <div class="card rounded w-100" style="height:250px;">
                <svg class="bd-placeholder-img img-fluid rounded" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                </svg>

                <div class="card-body">
                  <div class="text-center">
                    <p class="card-text  text-dark">Fuerza</p>
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
          <p>
            Ya hemos diseñado nuestro personaje. Es momento de diseñar al villano.
            El villano tiene la habilidad de crear personajes similares a él pero más pequeños y con menos
            poder, similares a sus hijos. Si el villano tiene estas habilidades:
          </p>

          <p>
            ¿Cuales son las habilidades que tienen sus hijos, puedes indicarme?
          </p>
        </div>
      </div>

      <div class="my-5"></div>

      <div  class="row w-75 mx-auto p-3">
        <div class="col-sm-6 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op1" id="success-outlined-op1" autocomplete="off">
          <label id="ask-1-1-1" class="btn btn-outline-success btn-lg d-flex align-items-center justify-content-sm-center" for="success-outlined-op1">
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
          <input type="checkbox" class="btn-check" name="options-outlined-op2" id="success-outlined-op2" autocomplete="off">
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
          <input type="checkbox" class="btn-check" name="options-outlined-op3" id="success-outlined-op3" autocomplete="off">
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
          <input type="checkbox" class="btn-check" name="options-outlined-op4" id="success-outlined-op4" autocomplete="off">
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
        <div class="my-3"></div>

        <div class="col-sm-6 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op5" id="success-outlined-op5" autocomplete="off">
          <label id="ask-5-5-5" class="btn btn-outline-success btn-lg" for="success-outlined-op5">
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
        <div class="col-sm-6 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op6" id="success-outlined-op6" autocomplete="off">
          <label id="ask-6-6-6" class="btn btn-outline-success btn-lg" for="success-outlined-op6">
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
        <div class="my-3"></div>
        <div class="col-sm-6 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op7" id="success-outlined-op7" autocomplete="off">
          <label id="ask-7-7-7" class="btn btn-outline-success btn-lg" for="success-outlined-op7">
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
        <div class="col-sm-6 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op8" id="success-outlined-op8" autocomplete="off">
          <label id="ask-8-8-8" class="btn btn-outline-success btn-lg" for="success-outlined-op8">
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
        <div class="my-3"></div>

        <div class="col-sm-6 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op9" id="success-outlined-op9" autocomplete="off">
          <label id="ask-9-9-9" class="btn btn-outline-success btn-lg" for="success-outlined-op9">
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
        <div class="col-sm-6 d-grid gap-2">
          <input type="checkbox" class="btn-check" name="options-outlined-op10" id="success-outlined-op10" autocomplete="off">
          <label id="ask-10-10-10" class="btn btn-outline-success btn-lg" for="success-outlined-op10">
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
        <div class="card-body text-center">
          Para crear un personaje se necesita saber sus
        </div>
      </div>

      <div class="my-5"></div>

      <p class="d-flex justify-content-center card w-75 mx-auto p-3">
        <span class="d-flex justify-content-center">
          <input type="text" class="form-control  w-25 ms-2"  id="success-outlined-op1" name="options-outlined-op1">
          <span class="mx-2"> y </span>
          <input type="text" class="form-control  w-25 ms-2"  id="success-outlined-op2" name="options-outlined-op2">
        </span>
      </p>
    </div>
    `,
    `
      <div class="mx-auto" id="test">
        <div class="card">
          <div class="card-body text-center">
            Repasemos algo rapidamente.
          </div>
        </div>

        <div class="my-5"></div>

        <p class="d-flex justify-content-center card w-100 mx-auto p-3">
          <span class="d-flex justify-content-center">
            <span class="mx-2">En la POO, a los subprogramas se les nombra </span>
            <input type="text" class="form-control  w-25 ms-2" id="success-outlined-op1" name="options-outlined-op1">
          </span>
          <span class="d-flex justify-content-center mt-3">
            <span class="mx-2"> y a las variables se les nombra</span>
            <input type="text" class="form-control  w-25 ms-2" id="success-outlined-op2" name="options-outlined-op2">
          </span>
        </p>
      </div>
    </div>
    `,
  ];

  for (let i = 0; i < questions.length; i++) {
    yield questions[i]
  }
}

export default game_poo;

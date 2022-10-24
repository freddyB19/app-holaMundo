const games = () => {
  const view = `
    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p> Es momento de ponerte aprueba, comencemos</p>
          <div class="mx-auto text-center">
            <button type="button" class="mx-auto btn btn-success" data-bs-toggle="modal" data-bs-target="#game">
              Inicio
            </button>
          </div>
          <div class="modal fade" id="game" tabindex="-1" aria-labelledby="gameLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Proximamente</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                  <div class="col-lg-6 mx-auto text-center">
                    <div class="container px-5">
                      <img src="images/pp.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Error 404"  loading="lazy">
                    </div>
                    <h1 display-4 fw-bold font-monospace>¡Ohhh!</h1>
                    <p class="lead mb-4">Por ahora no se encuentra disponible está modalidad.<br> Lo sentimos</p>
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  `;
  return view;
}

export default games;

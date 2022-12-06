import game_all_levels from "./game_all_levels";
import Game_Error from "./levels/Game_Error";

const games = (level = "") => {
  const view = `
    <div class="bg-light border rounded-3 py-3 mb-3">
      <div class="card w-75 mx-auto mb-3">
        <div class="card-body shadow-lg rounded">
          <p> Es momento de poner a prueba tus conocimientos, comencemos</p>
          <div class="mx-auto text-center">
            <button type="button" id="init-game" class="mx-auto btn btn-success" data-bs-toggle="modal" data-bs-target="#game">
              Inicio
            </button>
          </div>
          <div class="modal fade" id="game" tabindex="-1" aria-labelledby="gameLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Proximamente</h1>
                  <button type="button" id="btn-close-game-1" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form id="form-game">
                    <div data-games="${level}" id="games-questions"></div>
                    <div class="my-4"></div>
                    <div id="results-questions"></div>
                    <div class="my-2"></div>
                    <div class="d-grid gap-2 col-6 mx-auto" id="game-btn-control">
                      <button type="button" class="btn btn-outline-secondary disabled" id="button-view-result" value="Continuar">Verificar</button>
                      <button type="button" class="btn btn-primary" id="button-game" style="display:none;" value="Continuar">Continuar</button>
                      <button type="button" class="btn btn-primary" id="button-save-game" style="display:none;" value="Guardar Partida">Guardar Partida</button>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" id="btn-close-game-2" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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

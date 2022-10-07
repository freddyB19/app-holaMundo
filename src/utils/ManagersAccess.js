
class AccessControlDomlAlert {
  static create(){
    const div_show = document.createElement("div");
    div_show.className = "modal-backdrop fade show";
    document.querySelector("body").classList.add("modal-open");
    document.querySelector("body").append(div_show)

    document.querySelector("body").setAttribute("style", "overflow: hidden; padding-right: 17px;");

  }
}


class AccessModalAlert {
  static create(){
    const modal = document.createElement("div");
    modal.innerHTML = `
      <div class="modal fade show" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-modal="true" role="dialog" style="display: block;">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Título del modal</h5>
              <button type="button" class="btn-close" id="modal-btn-close-1" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div class="modal-body">
              <div class="card mb-3 border-danger" style="max-width: 540px;">
                <div class="row g-0 p-3 mx-auto">
                  <div class="col-md-4">
                    <img src="images/pError.jpg" class="img-fluid rounded-start w-100 h-100" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Al parecer has intentado acceder a un modulo o sesión por el cual aún no posees el acceso, tendras que redirigirte al inicio y tomar la ruta adecuada.</p>
                      <p class="card-text"><small class="text-muted">No pasa nada, continua con tu progreso.</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" id="modal-btn-close-2" class="btn btn-warning" data-bs-dismiss="modal">Comprendido</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.querySelector("#app").append(modal);
  }


}



class ManagersAccess {
  static create_alert(){
    AccessControlDomlAlert.create();
    AccessModalAlert.create();
  }

  static is_usserValidAccess(user, item){
    if (user)
      if(user.player.puntos < item.checkpoint)
        return true;
    return false;
  }
}

export default ManagersAccess;

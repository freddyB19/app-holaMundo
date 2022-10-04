
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
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Título del modal</h5>
              <button type="button" class="btn-close" id="modal-btn-close-1" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" id="modal-btn-close-2" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary">Comprendido</button>
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

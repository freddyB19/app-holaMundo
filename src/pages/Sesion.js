import NavModuleSesion from "./NavModuleSesion";
import DataUser from "../utils/Login/DataUser";
import Views from "../utils/Views";
import ManagersAccess from "../utils/ManagersAccess";
import ManagerControlResponse from "../utils/ManagerControlResponse";

import correctDOMSesion from "../utils/functions/correctDOMSesion";
import error_loadData from "../utils/functions/error_loadData";

import getHash from "../utils/getHash";

class ControlResponseSesion extends ManagerControlResponse {
  static responseCorrect = async (view) => {
    const user = DataUser.getLocal();
    const user_token = DataUser.getSession();
    const data = getHash();
    if(user_token)
      Views.detailSesionView(data.id, user_token.access)
        .then(item => {
          // if (ManagersAccess.is_usserValidAccess(user, item))
          //   ManagersAccess.create_alert();
          view.innerHTML = correctDOMSesion(user, item);

        })
        .catch(err => {
          error_loadData(document.querySelector("#info-sesion"));
        })
    else
      document.querySelector("#info-sesion").innerHTML =  `
      <div class="my-5"></div>

      <div class="d-flex align-items-center mb-3" style="height: 300px">
        <div class="card mb-3 mx-auto " style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="images/access_login.jpg" class="img-fluid rounded-start w-100 h-100" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">¡¡Acceso invalido!!</h5>
                <p class="card-text">Para seguir viendo más información, por favor inicie sesión con su cuenta.</p>
                <p class="card-text"><small class="text-muted">Si no posees una cuenta, primero debes registrarte.</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      `;



  }
}


const preload = () => {
  setTimeout(() => {
    document.querySelector("#preload-sesion").innerHTML = "";
    try {
      ControlResponseSesion.responseCorrect(document.querySelector("#info-sesion"))
    } catch (e) {
      ControlResponseSesion.responseFaild(document.querySelector("#info-sesion"))
    }
  }, 5000);
}

const Sesion = () => {
  preload();

  const view = `
    ${NavModuleSesion()}

      <div id="preload-sesion">
        <div class="d-flex justify-content-center mt-5">
          <div class="spinner-border" style="width: 3rem; height: 3rem; role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <div id="info-sesion"></div>
  `;
  return view;
}

export default Sesion;

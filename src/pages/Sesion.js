import NavModuleSesion from "./NavModuleSesion";
import DataUser from "../utils/Login/DataUser";
import Views from "../utils/Views";
import ManagersAccess from "../utils/ManagersAccess";
import ManagerControlResponse from "../utils/ManagerControlResponse";
import correctDOMSesion from "../utils/functions/correctDOMSesion";

import getHash from "../utils/getHash";

class ControlResponseSesion extends ManagerControlResponse {
  static responseCorrect = async (view) => {
    const user = DataUser.getLocal();
    const data = getHash();
    const item = await Views.detailSesionView(data.id);
    if (ManagersAccess.is_usserValidAccess(user, item))
      ManagersAccess.create_alert();
    view.innerHTML = correctDOMSesion(user, item);
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

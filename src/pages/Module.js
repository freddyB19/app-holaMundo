import NavModuleSesion from "./NavModuleSesion";
import DataUser from "../utils/Login/DataUser";
import ManagersAccess from "../utils/ManagersAccess";
import Views from "../utils/Views";
import ManagerControlResponse from "../utils/ManagerControlResponse";
import correctDOMModule from "../utils/functions/correctDOMModule";
import error_loadData from "../utils/functions/error_loadData";


import getHash from "../utils/getHash";

class ControlResponseModule extends ManagerControlResponse{
  static responseCorrect = async (view) => {
    const user = DataUser.getLocal();
    let hash = getHash();

    Views.detailView(hash.id)
      .then(item => {
        if (ManagersAccess.is_usserValidAccess(user, item))
          ManagersAccess.create_alert();
        view.innerHTML = correctDOMModule(item);
      })
      .catch(err => {
        error_loadData(document.querySelector("#info-module"));
      });

  }
}


const preload = () => {
  setTimeout(() => {
    document.querySelector("#preload").innerHTML = "";
    try {
      ControlResponseModule.responseCorrect(document.querySelector("#info-module"))
    } catch (e) {
      ControlResponseModule.responseFaild(document.querySelector("#info-module"));
    }
  }, 5000);
}


const Module = async () => {
  preload();

  const view = `
    ${NavModuleSesion()}
    <div  class="my-5"></div>

    <div id="preload">
      <div class="d-flex justify-content-center mt-5">
        <div class="spinner-border" style="width: 3rem; height: 3rem; role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div id="info-module"></div>
  `;
  return view;
}

export default Module;

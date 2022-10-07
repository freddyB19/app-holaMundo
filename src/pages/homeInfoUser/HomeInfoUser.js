import Views from "../../utils/Views";
import DataUser from "../../utils/Login/DataUser";
import ManagerControlResponse from "../../utils/ManagerControlResponse";
import correctDOMHomeInfoUser from "../functions/correctDOMHomeInfoUser";


class ControlResponseHomeInfoUser extends ManagerControlResponse {
  static responseCorrect = async (view) => {
    const user = DataUser.getLocal()
    const userProgreso = await Views.detailProgresoPlayerView(user.id);
    console.log(userProgreso);
    view.innerHTML = correctDOMHomeInfoUser(userProgreso);
  }

}


const HomeInfoUser = () => {
  setTimeout(() => {
    document.querySelector('#preload-progreso-player').innerHTML = "";
    try {
      ControlResponseHomeInfoUser.responseCorrect(document.querySelector('#info-progreso-player'))
    } catch (e) {
      ControlResponseHomeInfoUser.responseFaild(document.querySelector('#info-progreso-player'))
    }
  }, 5000);
  return ``;
}

export default HomeInfoUser;

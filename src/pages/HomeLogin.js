import NavHomeLogin from "./NavHomeLogin";
import HomeInfoUser from "./homeInfoUser/HomeInfoUser";
import DataUser from "../utils/Login/DataUser";
const HomeLogin = async () => {
  const user = DataUser.getLocal();
  const view = `
    <div id="login-err"></div>
    ${await NavHomeLogin(user)}

    <div class="container-lg mt-5">
      <div id="preload-progreso-player">
        <div class="d-flex justify-content-center mt-5">
          <div class="spinner-border" style="width: 3rem; height: 3rem; role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      ${HomeInfoUser()}
      <div id="info-progreso-player"></div>
    </div>

  `;
  return view;
}

export default HomeLogin;

import PanelHome from "./panelesNav/PanelHome";
import PanelModulo from "./panelesNav/PanelModulo";
import PanelRegister from "./panelesNav/PanelRegister";
import PanelLogin from "./panelesNav/PanelLogin";

const Nav = () => {
  const view = `
    <div class="container-fluid py-3">
      <nav>
        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Inicio</button>
          <button class="nav-link" id="nav-module-tab" data-bs-toggle="tab" data-bs-target="#nav-module" type="button" role="tab" aria-controls="nav-module" aria-selected="false">Modulos</button>
          <button class="nav-link" id="nav-registro-tab" data-bs-toggle="tab" data-bs-target="#nav-registro" type="button" role="tab" aria-controls="nav-registro" aria-selected="false">Registro</button>
          <button class="nav-link" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="false">Login</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          ${PanelHome()}
        </div>

        <div class="tab-pane fade" id="nav-module" role="tabpanel" aria-labelledby="nav-module-tab" tabindex="0">
          ${PanelModulo()}
        </div>

        <div class="tab-pane fade text-center container" id="nav-registro" role="tabpanel" aria-labelledby="nav-registro-tab" tabindex="0">
          ${PanelRegister()}
        </div>

        <div class="tab-pane fade text-center" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab" tabindex="0">
          ${PanelLogin()}
        </div>

      </div>
    </div>
  `;

  return view;
};

export default Nav;

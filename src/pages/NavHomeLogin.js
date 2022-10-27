import PanelHomeLogin from "./panelesNavHomeLogin/PanelHomeLogin";
import PanelNavModuloLogin from "./panelesNavHomeLogin/PanelNavModuloLogin";
import PanelAcercaDe from "./panelesNavHomeLogin/PanelAcercaDe";
import PanelNosotros from "./panelesNavHomeLogin/PanelNosotros";



const NavHomeLogin = (item) => {
  const view = `
  <nav class="">
    <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Inicio</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-module-tab" data-bs-toggle="pill" data-bs-target="#pills-module" type="button" role="tab" aria-controls="pills-module" aria-selected="false">Modulos</button>
      </li>

      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-acerca-tab" data-bs-toggle="pill" data-bs-target="#pills-acerca" type="button" role="tab" aria-controls="pills-acerca" aria-selected="false">Acerda de...</button>
      </li>

      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-nosotros-tab" data-bs-toggle="pill" data-bs-target="#pills-nosotros" type="button" role="tab" aria-controls="pills-nosotros" aria-selected="false">Nosotros...</button>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
          <strong>@${item.username}</strong>
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" id="logout" href="#">Salir</a></li>

          <!--<li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>-->

        </ul>
      </li>
    </ul>


    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active h-100" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
        ${PanelHomeLogin()}
      </div>
      <div class="tab-pane fade h-100" id="pills-module" role="tabpanel" aria-labelledby="pills-module-tab" tabindex="0">

        <div id="preload-module-login">
          <div class="d-flex justify-content-center mt-5">
            <div class="spinner-border" style="width: 3rem; height: 3rem; role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div id="cards-info" class="px-5 py-3 mt-3"></div>


      </div>

      <div class="tab-pane fade h-100" id="pills-acerca" role="tabpanel" aria-labelledby="pills-acerca-tab" tabindex="0">
        ${PanelAcercaDe()}
      </div>

      <div class="tab-pane fade h-100" id="pills-nosotros" role="tabpanel" aria-labelledby="pills-nosotros-tab" tabindex="0">
        ${PanelNosotros()}
      </div>

    </div>


  </nav>

  `;
  return view;
}

export default NavHomeLogin;

import PanelHomeLogin from "./panelesNavHomeLogin/PanelHomeLogin";
import PanelNavModuloLogin from "./panelesNavHomeLogin/PanelNavModuloLogin";


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
        ${"Acerda de..."}
      </div>

      <div class="tab-pane fade h-100" id="pills-nosotros" role="tabpanel" aria-labelledby="pills-nosotros-tab" tabindex="0">
        ${"Nosotros..."}
      </div>

    </div>


  </nav>

  `;
  return view;
}

export default NavHomeLogin;


/*
<div class="container-fluid py-3">
  <div class="row flex-lg-row justify-content-beetwen">
    <div class="col-lg-4 d-flex flex-nowrap">
       <div class="navbar-expand-md d-flex flex-column flex-shrink-0 p-3 text-bg-dark rounded-4" style="width: 280px; height: 470px;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <!-- <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> -->
          <img src="images/icono2.jpg" alt="" width="40" height="32" class="rounded bi pe-none me-2">
          <span class="fs-4"><span class="text-warning">&lt;</span><span class="text-danger">Hola-Mundo</span><span class="text-warning">&#47;</span><span class="text-warning">&gt;</span></span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto" id="pills-tab" role="tablist" aria-orientation="vertical">
          <li class="nav-item" role="presentation">
            <a href="#" class="nav-link active" id="pills-home-tab" data-bs-target="#pills-home"  aria-controls="pills-home" data-bs-toggle="pill"  type="button" role="tab"  aria-selected="true">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
              Home
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a href="#" class="nav-link text-white" id="pills-module-tab" data-bs-target="#pills-module"  aria-controls="pills-module"  data-bs-toggle="pill"  type="button" role="tab"   aria-selected="false">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
              Modulos
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a href="#" class="nav-link text-white"  id="pills-acerca-tab" data-bs-target="#pills-acerca"  aria-controls="pills-acerca" role="presentation"  data-bs-toggle="pill"  type="button" role="tab"  aria-selected="false">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
              Acerda de...
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a href="#" class="nav-link text-white"  id="pills-nosotros-tab" data-bs-target="#pills-nosotros"  aria-controls="pills-nosotros" role="presentation"  data-bs-toggle="pill"  type="button" role="tab"  aria-selected="false">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
              Nosotros...
            </a>
          </li>
        </ul>

        <hr>
        <div class="dropdown dropup-center dropup">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="${
              (item.image)
              ? `${item.image}`
              : `images/p2.jpg`
            }" alt="Imagen del perfil del usuario ${item.name} ${item.last_name}" width="32" height="32" class="rounded-circle me-2">
            <strong>@${item.username}</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li ><a class="dropdown-item" id="logout" href="#">Salir</a></li>
          </ul>
        </div>

      </div>
    </div>



    <div class="col-lg-8 ">
      <div class="tab-content" id="pills-tabContent">

        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
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
          <div id="cards-info"></div>
        </div>

        <div class="tab-pane fade h-100" id="pills-acerca" role="tabpanel" aria-labelledby="pills-acerca-tab" tabindex="0">
          ${"Acerda de..."}
        </div>

        <div class="tab-pane fade h-100" id="pills-nosotros" role="tabpanel" aria-labelledby="pills-nosotros-tab" tabindex="0">
          ${"Nosotros..."}
        </div>


      </div>

  </div>

</div>




*/

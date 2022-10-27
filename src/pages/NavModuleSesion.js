import DataUser from "../utils/Login/DataUser";


const viewUserLogin = (user) =>{
  let view = "";
  if(user)
    view = `
      <li class="nav-item dropdown">
        <a class="d-flex align-items-center nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="${
            (user.image)
            ? `${user.image}`
            : `images/p2.jpg`
          }" alt="Imagen del perfil del usuario" width="32" height="32" class="rounded-circle me-2">
          <strong>@${user.username}</strong>
        </a>
        <ul class="dropdown-menu">
        <li ><a class="dropdown-item" id="logout" href="#">Salir</a></li>
        </ul>
      </li>
    `;

  return view
}

const userToLogin = (user) => {
  let view = ""
  if(!user)
    view = `
    <hr class="mb-3">
      <form class="row row-cols-lg-auto g-3 align-items-center" id="form-login">
        <div class="col-12">
          <input required type="email" class="form-control" id="floatingInputLoginEmail" placeholder="name@example.com">
        </div>
        <div class="col-12">
          <input disabled required type="password" class="form-control" id="floatingPasswordLoginPassword" placeholder="Password">
        </div>
        <div class="col-12">
          <div id="login-validation"></div>
        </div>
        <div class="col-12" id="button-login">
          <button class="w-100 btn btn-lg btn-primary disabled" id="button-submit-login" type="button">Login</button>
        </div>
      </form>

    `;
  return view;
}

const NavModuleSesion = () => {
  const user = DataUser.getLocal();
  const view = `
    <nav class="navbar bg-light shadow-sm p-3 rounded" id="nav-module-sesion">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="images/icono2.jpg" alt="..." width="40" height="32"class="d-inline-block align-text-top rounded me-2">
          <span class="text-warning">&lt;</span><span class="text-danger">hola-mundo</span><span class="text-warning">&#47;</span><span class="text-warning">&gt;</span>
        </a>
        <button id="button-nav-two"class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><span class="text-warning">&lt;</span><span class="text-danger">Hola-Mundo</span><span class="text-warning">&#47;</span><span class="text-warning">&gt;</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              ${viewUserLogin(user)}

            </ul>
            ${userToLogin(user)}
          </div>
        </div>
      </div>
    </nav>
  `;
  return view;
}

export default NavModuleSesion;

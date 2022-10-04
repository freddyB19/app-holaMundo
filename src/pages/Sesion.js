import NavModuleSesion from "./NavModuleSesion";
import DataUser from "../utils/Login/DataUser";
import Views from "../utils/Views";
import ManagersAccess from "../utils/ManagersAccess";

import getHash from "../utils/getHash";

const viewUserLogin = (user,item) => {
  let view = ``;
  if(user)
    view = `
      <div class="bg-light border rounded-3 py-3 mb-3">
        <div class="card w-75 mx-auto">
          <div class="card-body shadow-lg rounded">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    `;
  return view;
}

const viewUserLogout = (user) => {
  let view = ``;
  if(!user)
    view = `
      <div class="alert alert-info" role="alert">
        Para seguir viendo más información, por favor dirigirse al formulario de registro más cercano.
      </div>
    `;
  return view;
}


const responseCorrect = async (view) => {
  const user = DataUser.getLocal();
  const data = getHash();
  const item = await Views.detailSesionView(data.id);
  if (ManagersAccess.is_usserValidAccess(user, item))
    ManagersAccess.create_alert();


  view.innerHTML = `
  <div class="mb-3"></div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#/modulo/${item.modulo_detail.url}/${item.modulo_detail.id}">${item.modulo_detail.title}</a></li>
        <li class="breadcrumb-item active" aria-current="page">${item.title}</li>
      </ol>
    </nav>
    <h1 class="display-4">${item.title}</h1>
    <hr class="my-4">

    <div class="card text-center my-5  shadow bg-body rounded">
      <div class="card-header text-bg-secondary bg-gradient">
        Introducción
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer text-muted shadow-lg bg-body">
        Sesión: ${item.num_sesion}
      </div>
    </div>

    <div class="mb-5"></div>
    ${viewUserLogout(user)}
    ${viewUserLogin(user, item)}


    <div class="mb-5"></div>
    <div class="mb-5"></div>
  `;
}

const responseFaild = (view) => {
  view.innerHTML = `
    <div class="alert alert-danger mt-5" role="alert">
      <h4 class="alert-heading">Ummmmm!</h4>
        <p>
          Ocurrio un error al momento de optener los datos, por favor intente <a class="alert-link" href="/">recargar la pagina nuevamente</a>.
        </p>
        <hr>
         <p class="mb-0">Lo sentimos. Trataremos de encontrar el error</p>
    </div>
  `;
}


const preload = () => {
  setTimeout(() => {
    try {
      document.querySelector("#preload-sesion").innerHTML = "";
      responseCorrect(document.querySelector("#info-sesion"))
    } catch (e) {
      document.querySelector("#preload-sesion").innerHTML = "";
      responseFaild(document.querySelector("#info-sesion"))
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

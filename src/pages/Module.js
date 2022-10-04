import NavModuleSesion from "./NavModuleSesion";
import DataUser from "../utils/Login/DataUser";
import ManagersAccess from "../utils/ManagersAccess";
import Views from "../utils/Views";
import getHash from "../utils/getHash";


const responseCorrect = async (view) => {
  const user = DataUser.getLocal();
  let hash = getHash();
  let item = await Views.detailView(hash.id);
  if (ManagersAccess.is_usserValidAccess(user, item))
    ManagersAccess.create_alert();

  view.innerHTML = `
    <div class="bd-example mt-5">
      <div class="card text-bg-dark bg-transparent">
        <img src="${item.image_portada}" class="card-img" alt="..." width="100%" height="270">

        <div class="card-img-overlay">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small>Número de sesiones: ${item.levels.length}</small></p>
        </div>
      </div>
    </div>

    <div  class="my-5"></div>

    ${
      (item.levels.length)
      ?
        `
          <div class="row">
            <div class="col-4">
              <ol class="list-group list-group-numbered" id="list-tab" role="tablist">
                ${item.levels.map((item, index) =>
                  (index < 1)
                  ? `<a class="list-group-item list-group-item-action active" id="list-${item.url}-list" data-bs-toggle="list" href="#list-${item.url}" role="tab" aria-controls="list-home">${item.title}</a>`
                  :`<a class="list-group-item list-group-item-action" id="list-${item.url}-list" data-bs-toggle="list" href="#list-${item.url}" role="tab" aria-controls="list-home">${item.title}</a>`
                ).join('')}
              </ol>
            </div>

            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
              ${item.levels.map((item, index) =>
                (index < 1)
                ? `<div class="tab-pane fade show active" id="list-${item.url}" role="tabpanel" aria-labelledby="list-${item.url}-list">${item.title}... <a href="${location.hash}/${item.url}/${item.id}">${location.hash}/${item.url}/${item.id}</a></div>`
                : `<div class="tab-pane fade" id="list-${item.url}" role="tabpanel" aria-labelledby="list-${item.url}-list">${item.title}... <a href="${location.hash}/${item.url}/${item.id}">${location.hash}/${item.url}/${item.id}</a></div>`
              ).join('')}
              </div>
            </div>
          </div>

          <div  class="my-5"></div>
        `
      :
        `
          <p>No hay na'...</p>
        `
    }

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
      document.querySelector("#preload-module").innerHTML = "";
      responseCorrect(document.querySelector("#info-module"))
    } catch (e) {
      document.querySelector("#preload-module").innerHTML = "";
      responseFaild(document.querySelector("#info-module"))
    }
  }, 5000);
}


const Module = async () => {
  preload();

  const view = `
    ${NavModuleSesion()}
    <div  class="my-5"></div>

    <div id="preload-module">
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

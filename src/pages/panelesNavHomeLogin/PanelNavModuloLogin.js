import Views from "../../utils/Views";
import cardModuleLogin from "./CardModuleLogin";


const responseCorrect = async (view) => {
  const cards =  await Views.allModules()
  view.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 g-3 mt-3">
      ${
        cards.map(card => cardModuleLogin(card)).join("")
      }
    </div>
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

const PanelNavModuloLogin = () => {
  setTimeout(() => {
    try {
      document.querySelector("#preload-module-login").innerHTML = "";
      responseCorrect(document.querySelector("#cards-info"))
    } catch (e) {
      document.querySelector("#preload-module-login").innerHTML = "";
      responseFaild(document.querySelector("#cards-info"))
    }
  }, 3400);
}

export default PanelNavModuloLogin;

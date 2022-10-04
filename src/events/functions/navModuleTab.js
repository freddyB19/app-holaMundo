import Views from "../../utils/Views";
import buildcard from "../../utils/functions/functions";


const navModuleTab = (eve) => {
  const app = document.querySelector("#app-mout-card");
  setTimeout(()=>{
    document.querySelector("#pre-load").innerHTML = "";
    Views.allModules()
      .then((response) => {
        app.innerHTML = `
          ${response.map(item =>
            `${buildcard(item)}`
          ).join('')}
        `;

      })
      .catch(err =>{
        app.innerHTML = `
        <div class="alert alert-danger mt-5" role="alert">
          <h4 class="alert-heading">Ummmmm!</h4>
          <p>
            Ocurrio un error al momento de optener los datos, por favor intente <a class="alert-link" href="/">recargar la pagina nuevamente</a>.
          </p>
          <hr>
          <p class="mb-0">Lo sentimos. Trataremos de encontrar el error</p>
        </div>

        `;
      })
  }, 2000);

}


export default navModuleTab;

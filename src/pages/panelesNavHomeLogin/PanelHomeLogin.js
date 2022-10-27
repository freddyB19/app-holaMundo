import DataUser from "../../utils/Login/DataUser";
import formatearFecha from "../../utils/functions/formatearFecha";


const view_progreso = (puntos) => {
  if(puntos <= 10)
    return `<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Example with label" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>`;
  else if(puntos >= 10 && puntos < 25)
    return `<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">25%</div>`;
  else if(puntos >= 25 && puntos < 50)
    return `<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Example with label" style="width: 50%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">50%</div>`;
  else if(puntos >= 50 && puntos < 75)
    return `<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Example with label" style="width: 75%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">75%</div>`;
  else if(puntos >= 75 && puntos < 90)
    return `<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Example with label" style="width: 90%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">90%</div>`;
  else if(puntos >= 90 && puntos < 100)
    return `<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Example with label" style="width: 100%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">100%</div>`;
}


const PanelHomeLogin = () => {
  const user = DataUser.getLocal();
  const view = `
    <div class="container-fluid mt-3">
        <div class="bg-primary bg-gradient bg-opacity-50 py-3 d-flex justify-content-between rounded-4">
          <div class="d-flex justify-content-start ">
            <div class="d-flex align-items-center">
              <span class="mx-3">@${user.username}</span>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <span class="mx-3">ID: ${user.id}</span>
          </div>
        </div>

        <table class="table mt-5 caption-top">
          <caption>Información del usuario</caption>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha de registro</th>
              <th scope="col">Fecha de acceso</th>

            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <td>${user.name.toUpperCase()}</td>
              <td>${user.last_name.toUpperCase()}</td>
              <th scope="row">${formatearFecha(user.time.date_joined)}</th>
              <th scope="row">${formatearFecha(user.time.last_login)}</th>

            </tr>
            <tr>
            </tr>
          </tbody>
      </table>

      <table class="table mt-3 caption-top">
        <caption>Información sobre tu progreso</caption>
        <thead>
          <tr>
            <th scope="col">Progreso</th>
            <th scope="col">Total de puntos</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <td>
              <div class="progress" style="height: 20px;">
                ${view_progreso(user.player.puntos)}
                <!-- <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Example with label" style="width: ${user.player.puntos}%;" aria-valuenow="${user.player.puntos}" aria-valuemin="0" aria-valuemax="100">${user.player.puntos}%</div>-->
              </div>
            </td>
            <th scope="row">${user.player.puntos}</th>
          </tr>
          <tr>
          </tr>
        </tbody>
    </table>


    <p>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Tu proximo movimiento
      </button>
    </p>
    <div class="collapse " id="collapseExample">
      <div class="card card-body d-flex justify-content-center">
        <div class="alert alert-danger" role="alert">
          <!-- Para ver saber cual es tu siguiente paso <a href="#" class="alert-link">pulsa aquí</a>. -->
          Por ahora esta función no se encuentra habilitada.
        </div>
      </div>
    </div>

    </div>

  `;
  return view;
}

export default PanelHomeLogin;

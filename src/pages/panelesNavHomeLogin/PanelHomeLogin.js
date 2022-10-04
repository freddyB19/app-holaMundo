import DataUser from "../../utils/Login/DataUser";

const formatearFecha = (fecha) => {
  const format = new Date(fecha);
  return `${format.toLocaleDateString()} ${format.toLocaleTimeString()}`;
}



const PanelHomeLogin = () => {
  const user = DataUser.getLocal();
  const view = `
    <div class="container-fluid mt-3">
        <div class="bg-primary bg-gradient bg-opacity-50 py-3 d-flex justify-content-between rounded-4">
          <div class="d-flex justify-content-start ">
            <div class="d-flex align-items-center">
              <img src="${user.image}" alt="" width="72" height="72" class="rounded-circle me-2 mx-3">
              <span class="">@${user.username}</span>
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
              <th scope="col">Fecha de tu ultimo acceso</th>

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
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Example with label" style="width: 12%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">12%</div>
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
        <div class="alert alert-info" role="alert">
          Para ver saber cual es tu siguiente paso <a href="#" class="alert-link">pulsa aquí</a>.
        </div>
      </div>
    </div>

    </div>

  `;
  return view;
}

export default PanelHomeLogin;

class ManagerControlResponse {
  static responseFaild = (view) => {
    view.innerHTML = `
      <div class="alert alert-danger mt-5" role="alert">
        <h4 class="alert-heading">Mmmmmm!</h4>
          <p>
            Ocurrio un error al momento de optener los datos, por favor intente <a class="alert-link" href="/">recargar la pagina nuevamente</a>.
          </p>
          <hr>
           <p class="mb-0">Lo sentimos. Trataremos de encontrar el error</p>
      </div>
    `;
  }

}

export default ManagerControlResponse;

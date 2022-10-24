const error_loadData = (mount) => {
  mount.innerHTML = `
    <div class="alert alert-danger mt-5" role="alert">
      <h4 class="alert-heading">Mmmmmm!</h4>
      <p>
        Ocurrio un error al momento de optener los datos, por favor intente <a class="alert-link" href="/">recargar la pagina nuevamente</a>.
      </p>
      <p>
        Si el error persiste, te recomendamos que reinicies tu sesión de usuario.
      </p>
      <hr>
      <p class="mb-0">Lo sentimos. Trataremos de encontrar el error</p>
    </div>
  `;
}

export default error_loadData;

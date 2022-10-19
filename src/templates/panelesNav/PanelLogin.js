const PanelLogin = () => {
  const view = `
    <div class="my-5">
      <div class="form-signin w-50 m-auto py-5 shadow p-3 mb-5 bg-body rounded">
        <form id="form-login-two" method="POST">
          <h1 class="h3 mb-3 fw-normal">Login</h1>

          <div class="form-floating">
            <input required type="email" class="form-control" id="floatingInputLoginEmail" placeholder="name@example.com">
            <label for="floatingInputLoginEmail">Email</label>
          </div>
          <div class="form-floating">
            <input disabled required type="password" class="form-control" id="floatingPasswordLoginPassword" placeholder="Password">
            <label for="floatingPasswordLoginPassword">Contraseña</label>
          </div>
          <div id="login-validation"></div>
          <div id="button-login" class="my-3">
            <button class="w-100 btn btn-lg btn-primary disabled" id="button-submit-login" type="button">Login</button>
          </div>
          <p class="mt-5 mb-3 text-muted">© 2022</p>

        </form>

      </div>
    </div>
  `;
  return view;
}

export default PanelLogin;

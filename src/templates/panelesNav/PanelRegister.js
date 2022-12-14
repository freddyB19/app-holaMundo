const PanelRegister = () => {
  const view = `
    <div class="my-5 py-3 px-3 needs-validation" novalidate>
      <div class="shadow-lg p-3 mb-5 bg-body rounded rounded-4 w-75 p-3 m-auto ">

        <form class="form-floating p-4 eeds-validation" novalidate  id="form-register" method="POST">
          <h1 class="h3 mb-3 fw-normal">Registro</h1>
          <div class="form-floating my-5 position-relative">
            <input required type="text" pattern="[A-Za-z]{3,}" class="form-control" id="first-name" placeholder="Nombre" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback">
            <div class="invalid-tooltip mt-2" id="first-name-validation">
            </div>
            <div id="first-namedHelpBlock" class="form-text">
              La longitud del campo debe ser mayor a '3' y solo puedes ingresar Letras.
            </div>
            <label for="first-name">Nombre</label>

          </div>


          <div class="form-floating my-5 position-relative">
            <input required type="text" pattern="[A-Za-z]{3,}" class="form-control" id="last-name" placeholder="Apellido(s)">
            <div class="invalid-tooltip mt-2 mx-auto" id="last-name-validation">
            </div>
            <div id="last-namedHelpBlock" class="form-text">
              La longitud del campo debe ser mayor a '3' y solo puedes ingresar Letras.
            </div>
            <label for="last-name">Apellido(s)</label>
          </div>

          <div id="username_validation"></div>
          <div id="email_validation"></div>

          <div class="input-group position-relative">
            <span class="input-group-text fs-3">@</span>
            <div class="form-floating">
              <input required type="email" class="form-control" id="email-register" placeholder="name@example.com">
              <label for="email-register">Email</label>
              <div class="invalid-tooltip mt-2" id="email-register-validation"></div>
            </div>
          </div>
          <div id="email-registerHelpBlock" class="form-text mb-5">
            Debes ingresar el formato correcto de un email para registrate.
          </div>


          <div class="input-group position-relative">
            <span class="input-group-text fs-3">#</span>
            <div class="form-floating">
              <input required type="text" pattern="[A-Za-z0-9_@#$]{3,}" aria-describedby="inputGroupPrepend" class="form-control" id="username" placeholder="Username">
              <label for="username">Username</label>
              <div class="invalid-tooltip mt-2" id="username-validation"></div>
            </div>
          </div>
          <div id="usernameHelpBlock" class="form-text mb-5 ">
            El nombre de usuario debe ser mayor a tres caracteres.
          </div>
          <div id="username-error"></div>


          <div class="input-group">
            <span class="input-group-text fs-3">*</span>
            <div class="form-floating has-validation">
              <input required minlength="5" aria-describedby="inputGroupPrepend" type="password" class="form-control" id="floatingPasswordRegiPass" placeholder="Password">
              <label for="floatingPasswordRegiPass">Contrase??a</label>
            </div>
          </div>
          <div id="pass-error"></div>
          <div id="floatingPasswordRegiPassHelpBlock" class="form-text mb-5">
            La contrase??a debe ser mayor a 5 caracteres y contener letras, n??meros y tal vez algunos caracteres especiales.
          </div>


          <div class="input-group">
            <span class="input-group-text fs-3">*</span>
            <div class="form-floating">
              <input required minlength="5" type="password" class="form-control" id="floatingPasswordRegiPassConfi" placeholder="Password Confirmaci??n">
              <label for="floatingPasswordRegiPassConfi">Contrase??a Confirmaci??n</label>
            </div>
          </div>
          <div id="pass-error-cf"></div>
          <div id="usernameHelpBlock" class="form-text mb-5">
            Asegurate de que ambas contrase??as coincidan.
          </div>


          <div id="button-register" class="d-grid gap-2 d-md-flex justify-content-center mt-5">
            <input type="button" id="button-submit-register" class="btn btn-primary btn-lg" value="Registrar">
          </div>

        </form>
      </div>
    </div>
  `;
  return view;
}

export default PanelRegister;

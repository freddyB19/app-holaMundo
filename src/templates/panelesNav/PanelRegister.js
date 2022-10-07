const PanelRegister = () => {
  const view = `
    <div class="my-5 py-3 px-3 needs-validation" novalidate>
      <div class="shadow-lg p-3 mb-5 bg-body rounded rounded-4 w-75 p-3 m-auto ">

        <form class="form-floating p-4 eeds-validation" novalidate  id="form-register" method="POST">
          <h1 class="h3 mb-3 fw-normal">Registro</h1>
          <div class="form-floating mb-3 position-relative">
            <input required type="text" pattern="[A-Za-z]{3,}" class="form-control" id="first-name" placeholder="Nombre" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback">
            <label for="first-name">Nombre</label>
            <div class="invalid-tooltip mt-2" id="first-name-validation">
            </div>
          </div>


          <div class="form-floating mb-3 position-relative">
            <input required type="text" pattern="[A-Za-z]{3,}" class="form-control" id="last-name" placeholder="Apellido(s)">
            <label for="last-name">Apellido(s)</label>
            <div class="invalid-tooltip mt-2 mx-auto" id="last-name-validation">
            </div>
          </div>

          <div class="input-group mb-3 position-relative">
            <span class="input-group-text">@</span>
            <div class="form-floating">
              <input required type="email" class="form-control" id="email-register" placeholder="name@example.com">
              <label for="email-register">Email</label>
              <div class="invalid-tooltip mt-2" id="email-register-validation"></div>
            </div>
          </div>

          <div class="input-group mb-3 position-relative">
            <span class="input-group-text">#</span>
            <div class="form-floating">
              <input required type="text" pattern="[A-Za-z0-9_@#$]{3,}" aria-describedby="inputGroupPrepend" class="form-control" id="username" placeholder="Username">
              <label for="username">Username</label>
              <div class="invalid-tooltip mt-2" id="username-validation"></div>
            </div>
          </div>
          <div id="username-error"></div>



          <div class="input-group mb-3">
            <input type="file" class="form-control" id="image-data" name="image">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">*</span>
            <div class="form-floating has-validation">
              <input required minlength="5" aria-describedby="inputGroupPrepend" type="password" class="form-control" id="floatingPasswordRegiPass" placeholder="Password">
              <label for="floatingPasswordRegiPass">Password</label>
            </div>
          </div>
          <div id="pass-error"></div>

          <div class="input-group mb-3">
            <span class="input-group-text">*</span>
            <div class="form-floating">
              <input required minlength="5" type="password" class="form-control" id="floatingPasswordRegiPassConfi" placeholder="Password Confirmación">
              <label for="floatingPasswordRegiPassConfi">Password Confirmación</label>
            </div>
          </div>
          <div id="pass-error-cf"></div>

          <div id="button-register" class="d-grid gap-2 d-md-flex justify-content-center mt-5">
            <input type="button" id="button-submit-register" class="btn btn-primary btn-lg" value="Enviar">
          </div>

        </form>
      </div>
    </div>
  `;
  return view;
}

export default PanelRegister;

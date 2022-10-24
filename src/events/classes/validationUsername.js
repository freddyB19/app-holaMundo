import ValidationsUsernameEmail from "./ValidationsUsernameEmail";

const domUsernameBad = (count) => {
  count.innerHTML = `
    <div class="alert alert-warning mt-3 alert-dismissible fade show" role="alert">
      <strong>Nombre de usuario invalido</strong>:
      <br> Ya exite un registro de este nombre de usuario.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  document.querySelector("#button-submit-register").setAttribute("disabled", "");
}

class ValidationsUsername extends ValidationsUsernameEmail {
  static is_bad = (input = null) =>{
    input.value = "";
    domUsernameBad(document.querySelector("#username_validation"));
  }

}

export default ValidationsUsername;

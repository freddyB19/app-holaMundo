import ValidationsUsernameEmail from "./ValidationsUsernameEmail";

const domEmailBad = (count) => {
  count.innerHTML = `
    <div class="alert alert-warning mt-3 alert-dismissible fade show" role="alert">
      <strong>Email invalido</strong>:
      <br> Ya exite un email con este registro
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  document.querySelector("#button-submit-register").setAttribute("disabled", "");
}

class ValidationsEmail extends ValidationsUsernameEmail{
  static is_bad = (input = null) =>{
    input.value = "";
    domEmailBad(document.querySelector("#email_validation"));
  }

}

export default ValidationsEmail;

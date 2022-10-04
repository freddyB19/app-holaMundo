class CleanRegisterForm {
  static clear = (form) => {
    form.querySelector("#first-name").value = "";
    form.querySelector("#last-name").value = "";
    form.querySelector("#email-register").value = "";
    form.querySelector("#username").value = "";
    form.querySelector("#floatingPasswordRegiPass").value = "";
    form.querySelector("#floatingPasswordRegiPassConfi").value = "";

    CleanRegisterForm.removeAllClass(form);
  }
  static removeAllClass =  (form) => {
    form.querySelector("#first-name").classList.remove("is-valid");
    form.querySelector("#last-name").classList.remove("is-valid");
    form.querySelector("#email-register").classList.remove("is-valid");
    form.querySelector("#username").classList.remove("is-valid");
    form.querySelector("#floatingPasswordRegiPass").classList.remove("is-valid");
    form.querySelector("#floatingPasswordRegiPassConfi").classList.remove("is-valid");
  }
}
export default CleanRegisterForm;

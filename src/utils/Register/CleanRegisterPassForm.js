class CleanRegisterPassForm {
  static clear(form){
    form.querySelector("#floatingPasswordRegiPass").value = "";
    form.querySelector("#floatingPasswordRegiPassConfi").value = "";
  }
}

export default CleanRegisterPassForm;

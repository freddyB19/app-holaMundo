class ClearLoginForm {
  static clear(form){
    form.querySelector("#floatingInputLoginEmail").value = "";
    form.querySelector("#floatingPasswordLoginPassword").value = "";
  }
}

export default ClearLoginForm;

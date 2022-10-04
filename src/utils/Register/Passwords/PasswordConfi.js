
class CleanInputsPasswords {
  static clean(pass1, pass2){
    pass1.password1.value = "";
    pass2.password2.value = "";
  }
}

class DataTagsValidationPasswordConfi {
  constructor(input){
    this.formValidationPC = input.parentElement.parentElement.parentElement;
    this.inputsIneed(this.formValidationPC);

  }
  inputsIneed(input){
    this.password1 = input.querySelector("#floatingPasswordRegiPass");
    this.password2 = input.querySelector("#floatingPasswordRegiPassConfi");
    this.containerMessages = input.querySelector("#pass-error-cf");
  }

  getInputPassword1(){
    return {password1: this.password1};
  }

  getInputPassword2(){
    return {password2: this.password2};
  }

  getInputsPasswords(){
    return {password1: this.password1, password2: this.password2};
  }

  is_confi(){
    return this.password1.value != this.password2.value;
  }

  getContainerMessage(){
    return {containerMessages: this.containerMessages};
  }

}



class ValidationPasswordConfiDOMCreateAlert {
  static create_alert(container, message){
    container.containerMessages.innerHTML = `
      <div class="alert alert-warning mt-3 alert-dismissible fade show" role="alert">
        <strong>Error!</strong> ${message}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  }
}

class ValidationPasswordConfiDOM {
  static changeDOM(objectPass, cod1, cod2 = null){
    if(cod1 === "error"){
      if( cod2 === "no-correct"){
        objectPass.password1.classList.add("is-invalid");
        objectPass.password2.classList.add("is-invalid");
      }
      else if( cod2 === "not-confi")
        objectPass.password2.classList.add("is-invalid");

      else if( cod2 === "no-pass-error"){
        objectPass.password1.classList.remove("is-invalid");
        objectPass.password2.classList.remove("is-invalid");
      }

    }
    else if(cod1 === "correct")
      objectPass.password2.classList.remove("is-invalid");

  }
}


class ValidationPasswordConfi {
  static is_inputValid(input){
    let valid = true;
    let message = "";
    let band = false;
    const inputsValidations = new DataTagsValidationPasswordConfi(input);

    if(inputsValidations.password2.value.length === 0)
      valid = false;
    if(inputsValidations.password1.value.length >= 1){
      if(inputsValidations.is_confi()){
        valid = false;
        band = true;
        message = "Las contraseñas no coinciden";
        ValidationPasswordConfiDOM.changeDOM(inputsValidations.getInputsPasswords() ,"error", "no-correct", inputsValidations.getContainerMessage());
        CleanInputsPasswords.clean(inputsValidations.getInputPassword1(), inputsValidations.getInputPassword2());

      }
      else {

        if([...inputsValidations.password1.classList].includes("is-invalid"))
          if(inputsValidations.is_confi()){
            valid = false;
            band = true;
            message = "en la confirmación de la contraseña";
            ValidationPasswordConfiDOM.changeDOM(inputsValidations.getInputPassword2() ,"error", "not-confi", inputsValidations.getContainerMessage());
          }
          else {
            ValidationPasswordConfiDOM.changeDOM(inputsValidations.getInputsPasswords() ,"error", "no-pass-error", inputsValidations.getContainerMessage());
          }

        else
          ValidationPasswordConfiDOM.changeDOM(inputsValidations.getInputPassword2(), "correct");
      }

    }
    if(band)
      ValidationPasswordConfiDOMCreateAlert.create_alert(inputsValidations.getContainerMessage(), message);

    return valid;
  }
}

export default ValidationPasswordConfi;

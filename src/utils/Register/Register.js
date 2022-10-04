import ValidationPassword from "./Passwords/Password";
import ValidationPasswordConfi from "./Passwords/PasswordConfi";
import ValidationUsername from "./Username/Username";
import ValidationNameAndLastNameAndEmail from "./Others/EmailNameLastName";


class ManagerValidationInpust {
  static apply(validation, input){
    return validation.is_inputValid(input);
  }
}

class FormInputsValidations {
  static apply(form){
    let list_validations = [];

    list_validations.push( ManagerValidationInpust.apply(ValidationNameAndLastNameAndEmail, form.querySelector("#first-name")));
    list_validations.push( ManagerValidationInpust.apply(ValidationNameAndLastNameAndEmail, form.querySelector("#last-name")));
    list_validations.push( ManagerValidationInpust.apply(ValidationNameAndLastNameAndEmail, form.querySelector("#email-register")));
    list_validations.push( ManagerValidationInpust.apply(ValidationUsername, form.querySelector("#username")));
    list_validations.push( ManagerValidationInpust.apply(ValidationPassword, form.querySelector("#floatingPasswordRegiPass")));
    list_validations.push( ManagerValidationInpust.apply(ValidationPasswordConfi, form.querySelector("#floatingPasswordRegiPassConfi")));


    return !list_validations.includes(false);
  }
}


class ManagerFormInputsValidations {
  static apply(validatios, form){
    return validatios.apply(form)
  }
}

class Register{
  constructor(form){
    this.form = form;
  }

   is_valid(){
    let allValidations = ManagerFormInputsValidations.apply(FormInputsValidations, this.form);
    return allValidations;
  }

}


export default Register;


class ValidationPasswordDOMCreateAlert {
  static create_alert(input, list_errors){
    input.parentElement.parentElement.parentElement.querySelector("#pass-error").innerHTML = list_errors.map(error =>
      `
      <div class="alert alert-warning mt-3 alert-dismissible fade show" role="alert">
        <strong>Error!</strong> ${error}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `
    ).join("");
  }
}

class ValidationPasswordDOM {
  static changeDOM(input, list_errors){
    if(list_errors.length >= 1) input.classList.add("is-invalid");
    ValidationPasswordDOMCreateAlert.create_alert(input, list_errors);
  }
}


class ValidationPassword {
  static is_inputValid(input){
    let valid = true;
    let errors = [];
    if(input.value.length == 0){
        valid = false;
        errors.push("Este campo es requerido");
      }

    else{
      if(input.value.length >= 1 && input.value.length <= 5){
        valid = false;
        errors.push("Contraseña muy corta");
      }

      if(Number(input.value) == input.value){
        valid = false;
        errors.push("Tu contraseña es de solo numeros");
      }

      if(input.value.match(/\d+/) === null){
        valid = false;
        errors.push("Tu contraseña es de solo caracteres");
      }

    }
    ValidationPasswordDOM.changeDOM(input, errors)


    return valid;
  }
}

export default ValidationPassword;

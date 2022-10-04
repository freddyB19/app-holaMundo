
class ValidationNameAndLastNameAndEmailDOM {
  static changeDOM(input = null, cod1 = null, cod2 = null){
    if(cod1 === "error"){
      input.classList.add("is-invalid")
      if(input.type === "email") input.parentElement.parentElement.classList.add("mb-5");
      else input.parentElement.classList.add("mb-5");

      if(cod2 === "length-0") input.parentElement.querySelector(".invalid-tooltip").textContent = "Este campo es requerido";
      else if(cod2 === "length-3" && input.type === "text") input.parentElement.querySelector(".invalid-tooltip").textContent = "La longitud del campo es muy corta [Min: 5]";


      else if(cod2 === "invalid-data" && input.type === "text") input.parentElement.querySelector(".invalid-tooltip").textContent = "Solo puedes Ingresar Caracteres";
      else if(input.type === "email"){input.parentElement.querySelector(".invalid-tooltip").textContent = "Email Incorrecto";}
    }
    else if(cod1 === "correct"){
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      input.parentElement.classList.remove("mb-5");

    }
  }
}

class ValidationNameAndLastNameAndEmail {
  static is_inputValid(input){
    let valid = true;

    if(!input.validity.valid){
      valid = false;
      ValidationNameAndLastNameAndEmailDOM.changeDOM(input, "error");
      if(input.type === "text")
        if(input.value.length < 3){
          (input.value.length === 0)
          ? ValidationNameAndLastNameAndEmailDOM.changeDOM(input, "error", "length-0")
          : ValidationNameAndLastNameAndEmailDOM.changeDOM(input, "error", "length-3")
        }else ValidationNameAndLastNameAndEmailDOM.changeDOM(input, "error", "invalid-data");

      else {
        (input.value.length === 0)
        ? ValidationNameAndLastNameAndEmailDOM.changeDOM(input, "error", "length-0")
        : ValidationNameAndLastNameAndEmailDOM.changeDOM(input, "error", "invalid-data");
      }



    } else {ValidationNameAndLastNameAndEmailDOM.changeDOM(input, "correct")};


    return valid;
  }
}

export default ValidationNameAndLastNameAndEmail;

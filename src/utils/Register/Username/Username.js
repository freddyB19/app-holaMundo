class ValidationUsernameDOMCreateAlert {
  static create_alert(input){
    input.parentElement.parentElement.parentElement.querySelector("#username-error").innerHTML = `
      <div class="alert alert-warning mt-3 alert-dismissible fade show" role="alert">
        <strong>Solo debe ingresar</strong>:
        <br> <strong>*</strong>Letras: [a-zA-Z], <br> <strong>*</strong>Números: [0-9], <br> <strong>*</strong>Caracteres: [ <strong>_</strong> <strong>@</strong> <strong>#</strong> <strong>$</strong> ]
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  }
}


class ValidationUsernameDOM {
  static changeDOM(input = null, cod1 = null, cod2 = null){
    if(cod1 === "error"){
      input.classList.add("is-invalid");
      input.parentElement.parentElement.classList.add("mb-5");


      if(cod2 === "none") input.parentElement.querySelector("#username-validation").style.display = "block";
      else if(cod2 === "length-0") input.parentElement.querySelector("#username-validation").textContent = "Este campo es requerido";
      else if(cod2 === "length-3") input.parentElement.querySelector("#username-validation").textContent = "Nombre de usuario muy corto";
      else if(cod2 === "invalid-data"){
        input.classList.add("is-invalid");
        input.parentElement.parentElement.classList.remove("mb-5");
        input.parentElement.querySelector("#username-validation").style.display = "none";

        ValidationUsernameDOMCreateAlert.create_alert(input);
      }


    } else if ( cod1 === "correct"){
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    }

  }
}


class ValidationUsername {
  static is_inputValid(input) {
    let valid = true;
    if(!input.validity.valid){
      valid = false;

      if(input.parentElement.querySelector("#username-validation").style.display == "none")
        ValidationUsernameDOM.changeDOM(input, "error", "none");
      if(input.value.length === 0)
        ValidationUsernameDOM.changeDOM(input, "error", "length-0");
      else
        if( input.value.length >= 1 && input.value.length <= 3 )
          ValidationUsernameDOM.changeDOM(input, "error", "length-3");
        else
          ValidationUsernameDOM.changeDOM(input, "error", "invalid-data");

    }else ValidationUsernameDOM.changeDOM(input, "correct");

    return valid;
  }
}

export default ValidationUsername;

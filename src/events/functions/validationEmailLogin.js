const validationEmailLogin = (eve) => {
  const form = eve.target.parentElement.parentElement;
  if(eve.target.value.length != 0)
    form.querySelector("#floatingPasswordLoginPassword").removeAttribute("disabled");
  else if (!form.querySelector("#floatingPasswordLoginPassword").getAttribute("disabled")){
    form.querySelector("#button-submit-login").classList.add("disabled");
    form.querySelector("#floatingPasswordLoginPassword").setAttribute("disabled", "");
  }

  if(eve.target.value.length != 0 && form.querySelector("#floatingPasswordLoginPassword").value.length != 0)
  form.querySelector("#button-submit-login").classList.remove("disabled");


}

export default validationEmailLogin;

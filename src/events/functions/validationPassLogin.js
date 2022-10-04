const validationLoginPassword = (eve) => {
  const form = eve.target.parentElement.parentElement;
  if(eve.target.value.length != 0 && form.querySelector("#floatingInputLoginEmail").value.length != 0)
    form.querySelector("#button-submit-login").classList.remove("disabled");
  else if(![...form.querySelector("#button-submit-login").classList].includes("disabled"))
    form.querySelector("#button-submit-login").classList.add("disabled");
}

export default validationLoginPassword;

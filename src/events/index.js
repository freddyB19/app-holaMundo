import navModuleTabLogin from "./functions/navModuleTabLogin";
import navModuleTab from "./functions/navModuleTab";

import logout from "./functions/logout";
import login from "./functions/login";
import register from "./functions/register";
import validation from "./functions/validationUsernameAndEmailRegister";
import accessInvalid from "./functions/accessInvalid";


import validationLoginPassword from "./functions/validationPassLogin";
import validationEmailLogin from "./functions/validationEmailLogin";

import ValidationsUsername from "./classes/validationUsername";
import ValidationsEmail from "./classes/validationEmail";




const events = async () => {
  const formRegister = document.querySelector("#form-register");
  const formLogin  = document.querySelector("#form-login");
  const inputLoginEmail = document.querySelector("#floatingInputLoginEmail");
  const passwordLoginPassword = document.querySelector("#floatingPasswordLoginPassword");



  await document.querySelector("#app").addEventListener("click", (eve)=>{
    if (eve.target.id === "nav-module-tab")
      navModuleTab(eve);
    else if(eve.target.id === "pills-module-tab")
      navModuleTabLogin()

    else if(eve.target.id === "logout")
      logout(eve)
    else if(eve.target.id === "button-submit-login")
        login(eve)

    else if(eve.target.id === "button-nav-two" || eve.target.className === "navbar-toggler-icon"){
      const inputLoginEmail = document.querySelector("#floatingInputLoginEmail");
      const passwordLoginPassword = document.querySelector("#floatingPasswordLoginPassword");

      if(inputLoginEmail)
          inputLoginEmail.addEventListener("input", validationEmailLogin);
      if(passwordLoginPassword)
        passwordLoginPassword.addEventListener("input", validationLoginPassword);

    }

    else if(eve.target.id === "modal-btn-close-2" || eve.target.id === "modal-btn-close-1")
      accessInvalid()

  });

  if(formRegister){
    await document.querySelector("#username").addEventListener("change", async (eve) => {
      if(eve.target.value.length >= 1 ){
        if(await validation({"username": eve.target.value}))
        {
          ValidationsUsername.is_fine(document.querySelector("#username_validation"));
          console.log("No existe registro con este username");
        }

        else{
          ValidationsUsername.is_bad(eve.target);
          console.log("Existe un registro con este username");
        }

      }
    });
    await document.querySelector("#email-register").addEventListener("change", async (eve) => {
      if(eve.target.value.length >= 1 ){
        if(await validation({"email": eve.target.value})){
          ValidationsEmail.is_fine(document.querySelector("#email_validation"));
          console.log("No existe registro con este email");
        }

        else{
          ValidationsEmail.is_bad(eve.target);
          console.log("Existe un registro con este email");
        }

      }
    });

    await formRegister.addEventListener("click", (eve) => {
      if(eve.target.id == "button-submit-register")
        register(eve.target.parentElement.parentElement);
    });
  }


  if(formLogin)
    await formLogin.addEventListener("click", async (eve) => {
      if(eve.target.id === "button-submit-login")
        login(eve)
    });

  if(inputLoginEmail)
      await inputLoginEmail.addEventListener("input", validationEmailLogin);
  if(passwordLoginPassword)
    await passwordLoginPassword.addEventListener("input", validationLoginPassword);

};

export default events;

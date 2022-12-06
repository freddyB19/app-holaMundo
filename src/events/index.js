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

import game_all_levels from "../utils/sesions/sesion_game/game_all_levels";
import viewQuestionsGame from "./functions/ViewQuestionsGame";

import redirect from "../utils/redirect";

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

    else if(eve.target.id === "init-game"){
      let control_game = null;
      document.querySelector("#form-game").addEventListener("click", (eve) => {
        if(["success-outlined-op1", "success-outlined-op2", "success-outlined-op3", "success-outlined-op4", "success-outlined-op5", "success-outlined-op6", "success-outlined-op7", "success-outlined-op8", "success-outlined-op9", "success-outlined-op10"].includes(eve.target.id) || ["flexRadioDefault1", "flexRadioDefault2", "flexRadioDefault3", "flexRadioDefault4", "flexRadioDefault5", "flexRadioDefault6", "flexRadioDefault7", "flexRadioDefault8"].includes(eve.target.id)){
          const btn = document.querySelector("#button-view-result");
          btn.className = "btn btn-primary";
          btn.classList.remove("disabled");
        }
      });

      document.querySelector("#button-view-result").addEventListener("click", (eve) => {
        document.querySelector("#button-view-result").style = `display: none;`;
        document.querySelector("#button-game").style = `display: block;`;
        document.querySelector("#results-questions").innerHTML = `
        <div class="card w-75 mx-auto">
          <div class="card-body">
            Respuesta Correcta
          </div>
        </div>
        `;
      });

      document.querySelector("#button-game").addEventListener("click", (eve) => {
        let data_question = control_game.next();
        if(!data_question.done)
          viewQuestionsGame(data_question);
        else{
          document.querySelector("#game-btn-control").removeChild(document.querySelector("#button-view-result"));
          document.querySelector("#button-save-game").style = `display: block;`;
          document.querySelector("#results-questions").innerHTML = ``;
          document.querySelector("#games-questions").innerHTML = `
            <h1 class="display-4">!!Fin del juego¡¡</h1>
          `;
        }

        document.querySelector("#button-game").style = `display: none;`;
        document.querySelector("#button-view-result").style = `display: block;`;
        document.querySelector("#button-view-result").className = `btn btn-outline-secondary disabled`;
        document.querySelector("#results-questions").innerHTML = ``;
      })
      document.querySelector("#button-save-game").addEventListener("click", (eve) => {
        redirect()
      });

      const game = document.querySelector("#games-questions");
      control_game = game_all_levels[game.dataset.games]();
      viewQuestionsGame(control_game.next())

      document.querySelector("#game").addEventListener("click", (eve) => {
        if(eve.target.id === "btn-close-game-1" || eve.target.id === "btn-close-game-2"){
          document.querySelector("#button-view-result").className = "btn btn-outline-secondary disabled";
          document.querySelector("#button-view-result").style = `display: block;`;
          document.querySelector("#button-game").style = `display: none;`;
          document.querySelector("#results-questions").innerHTML = ``;
          control_game = game_all_levels[game.dataset.games]();
          // viewQuestionsGame(control_game.next())
        }
      });

    }


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

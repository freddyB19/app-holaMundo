import Login from "../../utils/Login/Login";
import ValidationLoginResponseDOM from "../../utils/Login/ValidationLogin";
import ClearLoginForm from "../../utils/Login/ClearLoginForm";
import DataUser from "../../utils/Login/DataUser";
import redirect from "../../utils/redirect";
import getHash from "../../utils/getHash";



const login = async (eve) => {
  const form = eve.target.parentElement.parentElement;

  const user_login = new Login({
    email: form.querySelector("#floatingInputLoginEmail").value,
    password: form.querySelector("#floatingPasswordLoginPassword").value
  });
  form.querySelector("#button-login").innerHTML = `
    <button class="w-100 btn btn-lg btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
  `;



  try {
    let data = await user_login.is_valid();
    DataUser.saveSession(data);
    DataUser.saveLocal(data);
    location.reload();

  } catch (e) {
    ValidationLoginResponseDOM.create_alert(form, "Credenciales invalidas");
    form.querySelector("#button-login").innerHTML = `
      <button class="w-100 btn btn-lg btn-primary disabled" id="button-submit-login" type="button">Sign in</button>
    `;
  }
  finally {
    ClearLoginForm.clear(form);
  }

}

export default login;

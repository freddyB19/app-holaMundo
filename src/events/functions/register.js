import Register from "../../utils/Register/Register";
import Views from "../../utils/Views";

import registerRedirec from "../../utils/Register/registerRedirect";
import CleanRegisterForm from "../../utils/Register/CleanRegisterForm";
import CleanRegisterPassForm from "../../utils/Register/CleanRegisterPassForm";

const getDataForm = (form) => {
  let formdata = new FormData();
  formdata.append("email", form.querySelector("#email-register").value);
  formdata.append("name", form.querySelector("#first-name").value);
  formdata.append("last_name", form.querySelector("#last-name").value);
  formdata.append("username", form.querySelector("#username").value);
  formdata.append("password", form.querySelector("#floatingPasswordRegiPass").value);
  formdata.append("password2", form.querySelector("#floatingPasswordRegiPassConfi").value);

  if(form.querySelector("#image-data").files[0])
    formdata.append("image", form.querySelector("#image-data").files[0]);

  return formdata;
}


const register = (form) => {

  let vailidForm = new Register(form);

  setTimeout(async () => {
    if(vailidForm.is_valid()){
      form.querySelector("#button-register").innerHTML = `
        <button class="btn btn-primary btn-lg" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      `;
      try {
        const response = await Views.RegisterUserView(getDataForm(form));
        registerRedirec();
      } catch (e) {
        console.log(e);
      } finally {
        CleanRegisterForm.clear(form)
      }
      form.querySelector("#button-register").innerHTML = `
        <input type="button" id="button-submit-register" class="btn btn-primary btn-lg" value="Enviar">
      `;
      CleanRegisterPassForm.clear(form);
    }
  }, 3800);

}

export default register;

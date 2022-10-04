import Register from "../../utils/Register/Register";

import registerRedirec from "../../utils/Register/registerRedirect";
import CleanRegisterForm from "../../utils/Register/CleanRegisterForm";
import CleanRegisterPassForm from "../../utils/Register/CleanRegisterPassForm";

const register = (form) => {

  let vailidForm = new Register(form);
  if(vailidForm.is_valid()){
    registerRedirec();
    CleanRegisterForm.clear(form)
  }
  CleanRegisterPassForm.clear(form);

}

export default register;

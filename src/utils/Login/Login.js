import Views from "../Views"


class ValidationLoginResponse {
  static async apply(form){
    return  await Views.loginView(form);
  }
}


class ManagerValidationLogin {
  static apply(validation, form){
    return validation.apply(form)
  }
}

class Login {
  constructor(form){
    this.form = form;
  }

  is_valid(){
    return ManagerValidationLogin.apply(ValidationLoginResponse , this.form);
  }

}

export default Login;

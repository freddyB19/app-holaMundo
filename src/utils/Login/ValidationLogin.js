
class ValidationLoginResponseDOM {
  static create_alert(form, error){
    form.querySelector("#login-validation").innerHTML = `
      <div class="alert alert-warning mt-3 alert-dismissible fade show" role="alert">
        <strong>Error!</strong> ${error}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `
  }
}

export default ValidationLoginResponseDOM;

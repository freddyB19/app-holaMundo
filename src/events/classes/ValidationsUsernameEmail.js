
class ValidationsUsernameEmail {
  static is_fine = (mount) =>{
    mount.innerHTML = ``;

    document.querySelector("#button-submit-register").removeAttribute("disabled");
  }
}

export default ValidationsUsernameEmail;

const registerRedirect = () => {
  document.querySelector("#nav-registro-tab").classList.remove("active");
  document.querySelector("#nav-registro").classList.remove("active");

  document.querySelector("#nav-login-tab").classList.add("active");
  document.querySelector("#nav-login").classList.add("show", "active");

}
export default registerRedirect;

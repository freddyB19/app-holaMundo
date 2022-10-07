import navModuleTabLogin from "./functions/navModuleTabLogin";
import navModuleTab from "./functions/navModuleTab";

import logout from "./functions/logout";
import login from "./functions/login";
import register from "./functions/register";
import accessInvalid from "./functions/accessInvalid";


const ManagerFunctionsEvents = {
  "nav-module-tab": navModuleTab,
  "pills-module-tab": navModuleTabLogin,
  "logout": logout,
  "button-submit-login": login,

  "button-nav-two": null,
  "navbar-toggler-icon": null,
  "modal-btn-close-1": accessInvalid,
  "modal-btn-close-2": accessInvalid,
}
export default ManagerFunctionsEvents

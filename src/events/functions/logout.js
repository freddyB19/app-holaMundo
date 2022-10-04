import Views from "../../utils/Views";
import redirect from "../../utils/redirect";
import DataUser from "../../utils/Login/DataUser";

const logout = (eve) => {
  Views.logoutView()
    .then((response) => {
      DataUser.clear();
      redirect()
    })
    .catch((err) => {
      console.log(err);
    })
}

export default logout;

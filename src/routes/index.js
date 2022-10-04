import Header from "../templates/Header";
import Footer from "../templates/Footer";
import Home from "../pages/Home";
import HomeLogin from "../pages/HomeLogin";
import Module from "../pages/Module";
import Error404 from "../pages/Error404";
import Sesion from "../pages/Sesion";


import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";


const urlpatterns = (url) => {
  if(url === "/error/false")
    return Error404;
  else if(url === "/"){
    if(localStorage.getItem("user"))
      return HomeLogin;
    return Home;
  }
  else if(!url.match(/\d\/\d/))
    return Module;
  else if(url.match(/\d\/\d/))
    return Sesion;
}



const router = async () => {
  const header = document.querySelector("#Header-main");
  const app = document.querySelector("#app");
  const footer = document.querySelector("#Footer-main");
  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = urlpatterns(route);

  app.innerHTML = await render();
  header.innerHTML = await Header();
  footer.innerHTML = await Footer();
};

export default router;

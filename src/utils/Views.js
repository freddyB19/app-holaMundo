import getData from "./getData";

class Views {
  static async allModules(){
    let response = await getData({
      type: "list",
      url: "/modulos-list/",
    });

    //console.log(response);
    return response;
  }

  static async detailView(id){
    let response = await getData({
      type: "detail",
      paylod: {id: id},
      url: "/modulos-detail/"
    });
    return response;
  }

  static async detailSesionView(id){
    let response = await getData({
      type: "detail",
      paylod: {id: id},
      url: "/sesion-detail/"
    });
    return response;
  }

  static async detailProgresoPlayerView(id){
    let response = await getData({
      type: "detail",
      paylod: {id: id},
      url: "/player/progreso-detail/"
    });
    return response;
  }

  static async loginView(user){
    let response = await getData({
      type: "login",
      paylod: user,
      url: "/login/"
    });
    return response;
  }

  static async logoutView(){
    let response = await getData({
      type: "login",
      url: "/logout/"
    });
    return response;
  }

}


export default Views;

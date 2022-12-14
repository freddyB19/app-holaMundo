import getData from "./getData";

class Views {
  static async allModules(){
    let response = await getData({
      type: "game",
      method: 1,
      url: "/modulos-list/",
    });

    return response;
  }

  static async detailView(id){
    let response = await getData({
      type: "game-detail",
      method: 1,
      paylod: {id: id},
      url: "/modulos-detail/"
    });
    return response;
  }

  static async detailSesionView(id, token = null){
    let response = await getData({
      type: "game-detail",
      method: 1,
      paylod: {id: id, token: token},
      url: "/sesion-detail/"
    });
    return response;
  }

  static async detailProgresoPlayerView(id, token = null){
    let response = await getData({
      type: "game-detail",
      method: 1,
      paylod: {id: id, token: token},
      url: "/player/progreso-detail/"
    });
    return response;
  }

  static async loginView(user){
    let response = await getData({
      type: "user",
      method: 0,
      paylod: user,
      url: "/login/"
    });
    return response;
  }

  static async logoutView(){
    let response = await getData({
      type: "user",
      method: 0,
      url: "/logout/"
    });
    return response;
  }

  static async RegisterUserView(data){
    let response = await getData({
      type: "user",
      method: 0,
      paylod: data,
      url: "/register/"
    });
    return response;
  }
  static async ValidationEmailOrUsername(data){
    let response = await getData({
      type: "user",
      method: 0,
      paylod: data,
      url: "/register/validated/"
    });


    return response;
  }

}


export default Views;

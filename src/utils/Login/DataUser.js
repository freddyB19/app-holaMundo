class DataUser {
  static saveSession(data){
    sessionStorage.setItem("token", JSON.stringify(data.token));
  }

  static getSession(data = "token"){
    return JSON.parse(sessionStorage.getItem(data));

  }

  static saveLocal(data){
    localStorage.setItem("user", JSON.stringify(data));
  }

  static getLocal(data = "user"){
    return JSON.parse(localStorage.getItem(data));
  }

  static clear(){
    localStorage.clear();
    sessionStorage.clear();
  }

}

export default DataUser;

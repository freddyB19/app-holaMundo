const API = "https://app-hola-mundo.onrender.com"

// action = {type: ... , paylod: {...}, url: ... }

const getMethod = (action) => {
  const methods = {
    0: "POST",
    1: "GET",
    2: "PUT"
  }
  return methods[action.method];
}

const getUrlPath = (action) => {
  const api_account = {
    "user": "/account",
  }
  const api_game = {
    "game": "/game",
  }
  if(action.type === "user" || action.type === "user-detail")
    return (api_account[action.type]) ? `${api_account[action.type]}${action.url}` : `${"/account"}${action.url}${action.paylod.id}/`;
  return (api_game[action.type]) ? `${api_game[action.type]}${action.url}` : `${"/game"}${action.url}${action.paylod.id}/`;
}

const getData = async (action) => {
  const options = {
    method: getMethod(action),
  }

  if(action.url === "/register/")
    options.body = action.paylod;
  else {
    if(["/sesion-detail/", "/player/progreso-detail/"].includes(action.url)){
      options.headers = {
        'Content-type': 'application/json',
        "Authorization": `Bearer ${action.paylod.token}`
      }

    }
    else{
      options.headers = {
        'Content-type': 'application/json',
      }
    }

    if(options.method === "POST")
      options.body = JSON.stringify(action.paylod);
    else
      options.paylod = JSON.stringify(action.paylod);
  }

  const url = `${API}${getUrlPath(action)}`
  return new Promise( async (resolve, reject) => {
    try {
      const response =  await fetch(url, options);
      if(response.status !== 400 && response.status !== 404){
        let data = "Success";
        if(response.status != 204)
          data = await response.json();

        return resolve(data);
      }
      return reject(new Error("Error de la api: 11  " + url));

    } catch (e) {
      reject(new Error("Error de la api asdasd: " + url + "\n " + e));

    }

  })
}


export default getData;

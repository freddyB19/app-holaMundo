const API = "http://127.0.0.1:8000"

// action = {type: ... , paylod: {...}, url: ... }

const getMethod = (action) => {
  if(["create", "register", "login"].includes(action.type))
    return "POST";
  else if(["detail", "list"].includes(action.type))
    return "GET";
  return "PUT";
}

const getUrlPath = (action) => {
  let url = null;
  if(["create", "list", "register", "login"].includes(action.type)){
      if(action.type === "register" || action.type === "login" )
        url = `/account${action.url}`;
      else
        url = `/game${action.url}`
  } else if (["detail", "update", "delete"].includes(action.type)) {
      url = `/game${action.url}${action.paylod.id}/`;
  }
  return url;
}

const getData = async (action) => {
  const options = {
    method: getMethod(action),
    headers: {
      'Content-type': 'application/json',
    },
  }
  if(options.method === "POST")
    options.body = JSON.stringify(action.paylod);
  else
    options.paylod = JSON.stringify(action.paylod);

  const url = `${API}${getUrlPath(action)}`
  return new Promise( async (resolve, reject) => {
    try {
      const response =  await fetch(url, options);
      if(response.status !== 400){
        let data = "Success";
        if(response.status != 204)
          data = await response.json();

        return resolve(data);
      }
      return reject(new Error("Error de la api: " + url));

    } catch (e) {
      reject(new Error("Error de la api asdasd: " + url));

    }



  })
}


export default getData;

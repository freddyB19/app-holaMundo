
const resolveRoutes = (route) => {
  if(!route.article){
    // Validamos si hiso login
    return "/";
  }

  return `/${route.article}/${route.id}`;
}


export default resolveRoutes;

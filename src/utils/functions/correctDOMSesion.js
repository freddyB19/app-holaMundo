const viewUserLogin = (user,item) => {
  let view = ``;
  if(user)
    view = `
      <div class="bg-light border rounded-3 py-3 mb-3">
        <div class="card w-75 mx-auto">
          <div class="card-body shadow-lg rounded">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    `;
  return view;
}

const viewUserLogout = (user) => {
  let view = ``;
  if(!user)
    view = `
      <div class="alert alert-info" role="alert">
        Para seguir viendo más información, por favor dirigirse al formulario de registro más cercano.
      </div>
    `;
  return view;
}


const correctDOMSesion = (user, item) => {
  const view = `
  <div class="mb-3"></div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#/modulo/${item.modulo_detail.url}/${item.modulo_detail.id}">${item.modulo_detail.title}</a></li>
        <li class="breadcrumb-item active" aria-current="page">${item.title}</li>
      </ol>
    </nav>
    <h1 class="display-4">${item.title}</h1>
    <hr class="my-4">

    <div class="card text-center my-5  shadow bg-body rounded">
      <div class="card-header text-bg-secondary bg-gradient">
        Introducción
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer text-muted shadow-lg bg-body">
        Sesión: ${item.num_sesion}
      </div>
    </div>

    <div class="mb-5"></div>
    ${viewUserLogout(user)}
    ${viewUserLogin(user, item)}


    <div class="mb-5"></div>
    <div class="mb-5"></div>

  `;
  return view;
}

export default correctDOMSesion;

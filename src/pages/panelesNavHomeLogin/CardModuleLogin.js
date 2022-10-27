import image from "../../utils/functions/img_card";
const cardModuleLogin = (item) => {
  const view = `

      <div class="col">
        <div class="card rounded-4" style="height:345px;">
          <img src="images/modulo_sesion/${image[item.id]}" class="card-img-top h-50" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
            <div class="text-center">
              <a href="/#/modulo/${item.url}/${item.id}" class="btn btn-outline-primary btn-sm my-3">Ver más</a>
            </div>
            <p class="card-text"><small class="text-muted">Número de sesiones: ${item.count}</small></p>
          </div>
        </div>
      </div>
  `;
  return view;
}

export default cardModuleLogin;

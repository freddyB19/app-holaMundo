import image from "./img_card";

const buildcard = (item) => {
  const card = `
    <div class="card mt-5 mb-3">
      <div class="row g-0">
        <div class="col-md-4 ">
          <img src="images/modulo_sesion/${image[item.id]}" class="img-fluid rounded-start h-100" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>

            <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->

            <div class="text-end">
              <a href="/#/modulo/${item.url}/${item.id}" data-id="${item.id}" class="btn btn-primary mb-3">Ver más</a>
            </div>

            <p class="card-text"><small class="text-muted">Número de sesiones: ${item.count}</small></p>
          </div>
        </div>
      </div>
    </div>

  `;
  return card;
};

export default buildcard;

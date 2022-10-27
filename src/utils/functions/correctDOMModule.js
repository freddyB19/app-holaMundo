import image from "./img_portada";

const correctDOMModule = (item) => {
  const view  = `
    <div class="bd-example mt-5">
      <div class="card text-bg-dark bg-transparent">
        <img src="images/modulo_sesion/${image[item.id]}" class="card-img" alt="..." width="100%" height="270">

        <div class="card-img-overlay">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.introduccion}</p>
          <p class="card-text"><small>Número de sesiones: ${item.levels.length}</small></p>
        </div>
      </div>
    </div>

    <div  class="my-5"></div>

    ${
      (item.levels.length)
      ?
        `
          <div class="row">
            <div class="col-4">
              <ol class="list-group list-group-numbered" id="list-tab" role="tablist">
                ${item.levels.map((item, index) =>
                  (index < 1)
                  ? `<a class="list-group-item list-group-item-action active" id="list-${item.url}-list" data-bs-toggle="list" href="#list-${item.url}" role="tab" aria-controls="list-home">${item.title}</a>`
                  :`<a class="list-group-item list-group-item-action" id="list-${item.url}-list" data-bs-toggle="list" href="#list-${item.url}" role="tab" aria-controls="list-home">${item.title}</a>`
                ).join('')}
              </ol>
            </div>

            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
              ${item.levels.map((item, index) =>
                (index < 1)
                ? `<div class="tab-pane fade show active alert alert-info mx-auto text-center" id="list-${item.url}" role="tabpanel" aria-labelledby="list-${item.url}-list">
                    Ver más sobre <a href="${location.hash}/${item.url}/${item.id}" class="btn btn-outline-success">${item.title}</a>
                  </div>`
                : `<div class="tab-pane fade alert alert-info mx-auto text-center" id="list-${item.url}" role="tabpanel" aria-labelledby="list-${item.url}-list">
                    Ver más sobre <a href="${location.hash}/${item.url}/${item.id}" class="btn btn-outline-success">${item.title}</a>
                  </div>`
              ).join('')}
              </div>
            </div>
          </div>

          <div  class="my-5"></div>
        `
      :
        `
          <p>No hay na'...</p>
        `
    }

  `;
  return view;
}
export default correctDOMModule;

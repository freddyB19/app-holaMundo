import formatearFecha from "../../utils/functions/formatearFecha";

const correctDOMHomeInfoUser = (item) => {
  const view = `
    <hr class="my-4">
    <h4 class="mb-3 h4">Ultimos avances:</h4>
    <div class="row mb-2">
    ${item.results.map(info =>
      `

        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <!-- <strong class="d-inline-block mb-2 text-primary">World</strong> -->
              <h3 class="mb-0"><span class="text-muted">Sesión:</span> ${info.path}</h3>
              <div class="mb-1 text-muted">Creado el: ${formatearFecha(info.created)}</div>
              ${(info.puntos === 0)
                ? `<p class="card-text mb-auto">Es aquí donde empieza tu camino.</p>`
                : `<p class="card-text mb-auto">Aquí obtuviste un total de ${info.puntos} puntos.</p>`
              }

              <!--<a href="#" class="stretched-link">Continue reading</a>-->
            </div>
          </div>
        </div>
      `
    ).join("")}
    </div>
    <div class="mt-3"></div> 
  </div>
  `;
  return view;
}

export default correctDOMHomeInfoUser;

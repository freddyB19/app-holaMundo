import messagess_header from "../utils/functions/messagess_header";

const Header = () => {
  const view = `
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="p-4 p-md-5 mb-4 rounded text-bg-dark d-block w-100">
            <div class="col-md-6 px-0">
              <h1 class="display-4 fst-italic">&lt;Hola-Mundo&#47;&gt;</h1>
              <p class="lead my-3">${messagess_header()}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  return view;
}

export default Header;

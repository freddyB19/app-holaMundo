const PanelModulo = () => {
  const view = `
    <div class="w-75 mx-auto">
    <div id="pre-load">
    <div class="d-flex justify-content-center mt-5">
      <div class="spinner-border" style="width: 3rem; height: 3rem; role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

      <div class="card mt-5 mb-3">
        <div class="row g-0">
          <div class="col-md-4 ">
            <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
            </svg>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="placeholder-glow">
                <span class="placeholder col-6 placeholder-lg"></span>
              </p>

              <p class="placeholder-wave">
                  <span class="placeholder placeholder-sm col-12"></span>
                  <span class="placeholder placeholder-sm col-11"></span>
                  <span class="placeholder placeholder-sm col-4"></span>

              </p>


              <div class="text-end">
                <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-4" aria-hidden="true"></a>
              </div>

              <p aria-hidden="true">
                <span class="placeholder placeholder-xs col-3"></span>
              </p>


            </div>
          </div>
        </div>
      </div>

    </div>




      <div id="app-mout-card"></div>


    </div>
  `;
  return view;
}

export default PanelModulo;

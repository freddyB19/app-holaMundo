const PanelHome = () => {
  const view = `
    <div class="container my-5">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 mb-3">¿Por qué aprender a programar?</h1>
          <p class="lead">La programación ayuda a desarrollar diferentes capacidades,  permite adquirir conocimientos, enseña a pensar, a desarrollar un pensamiento analítico y a resolver problemas.</p>
          <p class="lead">Aprender a programar, nos enseña a trabajar en equipo. Con el aprendizaje de la programación, todos los conocimientos individuales y habilidades se ponen en común y fomentan la colaboración</p>
          <p class="lead">Finalmente, sin duda otro de los principales beneficios de aprender a programar, es que la programación es una especialidad del presente, pero también del futuro. La programación se encuentra fuertemente relacionada con diferentes especialidades y profesiones de futuro como la ciberseguridad, el análisis de datos, la creación de videojuegos o la robótica.</p>


          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img class="rounded-lg-3" src="images/p2.jpg" alt="" width="720">
        </div>
      </div>
    </div>


  <div class="px-4 pt-5 my-5 text-center rounded-3 border shadow-lg">
    <h1 class="display-4 fw-bold font-monospace"><span class="text-warning">&lt;</span><span class="text-danger">Hola-Mundo</span><span class="text-warning">&#47;</span><span class="text-warning">&gt;</span></h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Nuestra app esta enfocada en que puedas adquirir todos los conocimientos básicos que son necesarios para adentrarse en el mundo de la programación, y de esta forma puedas desarrollar cualquier aplicación sin importar la tecnología.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
    <div class="overflow-hidden" style="max-height: 30vh;">
      <div class="container px-5">
        <img src="images/p2.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
      </div>
    </div>
  </div>


    `;
  return view;
}

export default PanelHome;

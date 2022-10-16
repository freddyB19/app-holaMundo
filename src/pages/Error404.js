const Error404 = () => {
  document.querySelector("#Header-main").remove();
  document.querySelector("#Footer-main").remove();

  const view = `
    <div class="col-lg-6 mx-auto text-center py-5">
      <div class="container px-5">
        <img src="images/404_1.gif" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Error 404"  loading="lazy">
      </div>
      <h1 display-4 fw-bold font-monospace>Upsss!</h1>
      <p class="lead mb-4">Creo que te has perdido un poco. No te preocupes, solo debemos <a class="" href="/">regresar a casa</a></p>

    </div>
  `;
  return view;
}

export default Error404;

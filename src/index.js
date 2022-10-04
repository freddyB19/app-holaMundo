 // npm install autoprefixer css-loader node-sass postcss-loader sass-loader style-loader --save-dev
import router from "./routes";

const components = () => {
  return import('lodash').then(({default:_}) => {
    return router;
  })
  .catch(err => "Un error a ocurrido cargando el componente" + err);
}


components().then(comp => {
  window.addEventListener("load", comp);
  window.addEventListener("hashchange", comp);
})

import _ from 'lodash';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import events from "./events";


const components = () => {
  return import("lodash").then(({default:_}) => {
    return events;
  })
  .catch(err => "Error en 'another' " + err);
}

components().then(comp => {
  window.addEventListener("load", comp);
  // unload DOMContentLoaded
})

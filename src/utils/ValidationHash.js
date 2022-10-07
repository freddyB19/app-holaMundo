const VALIDHASH = [
  "introduccion/1",
  "introduccion/1/introduccion-01/12",


  "entidades-primitivas/2",
  "entidades-primitivas/2/identificadores-01/1",
  "entidades-primitivas/2/tipos-de-datos-02/2",
  "entidades-primitivas/2/operadores-03/3",

  "representacion-del-algoritmo/3",
  "representacion-del-algoritmo/3/diagrama-de-flujo-01/4",
  "representacion-del-algoritmo/3/pseudocodigos-02/5",

  "nivel-intermedio/4",
  "nivel-intermedio/4/estructuras-secuenciales-01/6",
  "nivel-intermedio/4/estructuras-condicionales-02/7",
  "nivel-intermedio/4/estructuras-repetitivas-03/8",
  "nivel-intermedio/4/arreglos-04/9",

  "nivel-avanzado/5",
  "nivel-avanzado/5/tipos-de-datos-avanzados-01/10",
  "nivel-avanzado/5/poo-02/11"

]

class ValidationHash {
  static is_valid(hash){
    return VALIDHASH.includes(hash);
  }
}

export default ValidationHash;

//Comprobar si la paridad de la siguiente matriz es la correcta:

let matriz = [
  [1, 0, 0, 1, 1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 0, 0, 0],
  [1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 0, 0, 0, 1],
];
//Se suman los 1 de la matriz para ver si devuelven un número par o impar
function sumMatriz(matriz) {
  let sum = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      sum += matriz[i][j];
    }
  }
  return sum;
}

console.log(sumMatriz(matriz));
//Comprueba la paridad del número devuelto e indica si la matriz tiene algun fallo de paridad
let sumatorio = sumMatriz(matriz);

function esPar() {
  if (sumatorio % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(sumatorio));

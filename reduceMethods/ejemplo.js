//EJEMPLO 1 SUMA TOTAL DE UN LISTADO DE NUMEROS
let numbers = [2, 7, 4, 6];

const getTotals = (numbersArray) => {
  let result = numbersArray.reduce((accum, current) => {
    return accum + current;
  }, 0);
  return result;
};

let total = getTotals(numbers);
console.log(total);

// const numerosMenoresasiente = (lista) => {
//    return lista.filter((x) => x < 7).reduce((acc, el) => acc + el, 0);
// };
const numerosMenoresasiente = (lista) =>
  lista.filter((x) => x < 7).reduce((acc, el) => acc + el, 0);

const nuevoNumeros = numbers
  .filter((x) => x < 6)
  .reduce((acc, el) => acc + el, 0);

console.log(numerosMenoresasiente(numbers));
console.log(nuevoNumeros);

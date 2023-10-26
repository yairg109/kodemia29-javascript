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

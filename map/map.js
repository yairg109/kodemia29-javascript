// RETORNA UN NUEVO ARRARY MODIFICADO PERO EL ORIGINAL SE QUEDA IGUAL
/*
Transforma los elementos de un array original 
Ejemplo. El libro para colorear
*/

//Exercise : Para cada nombre de la lista obtener el nombre en mayusculas
let nombres = ["yair", "mayra", "angel", "anette"];

const nombresMayus = (lista) => {
  //map parametros--- item.index. array
  //Si es necesario regresar algo
  let resultado = lista.map((item) => {
    return item.toUpperCase();
  });
  console.log(resultado);
};

console.log("Lista Orginal");
console.log(nombres);
console.log("YA CON EL MAP");
nombresMayus(nombres);

let sizes = [
  { unit: "in", length: 2, form: "circle" },
  { unit: "in", length: 3, form: "rectangule" },
  { unit: "in", length: 24, form: "hexgaone" },
  { unit: "in", length: 10, form: "trapecio" },
];
//OPERADOR DE PROPAGAGION : PARA COPIAR Y PEGAR COSAS ITERABLES
const nuevoFigure = (listaObjetos) => {
  let result = listaObjetos.map((item) => {
    return { ...item, unit: "cm", length : item.length*2.54 };
  });
  console.log(result)
};
nuevoFigure(sizes)

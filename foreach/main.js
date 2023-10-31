//Dado el array de objetos necesitamos conocer el precio promedio de los productos de la lista

//Es un metodo de los arrays para recorrer sus elemenetos pero no devuelve nada

/*
Ejemplo: Queremos Retornar la primera letra de los nombres de 
una lista
*/

let nombres = ["yair", "mayra", "angel", "anette"];

/*
1. Analisis del problema: Necesitamos recorrer cada elemento del arreglo
2. De cada elemento tomamos el primer caracter
3. Ese elemento lo guardamos en otro array 
4. Mostramos el nuevo array
*/
//Son tres parametros: item,index,array
//Solo puedo pasar lo que necesito
let nuevoArray = [];
nombres.forEach(function (item) {
  let inicial = item.charAt(0);
  nuevoArray.push(inicial);
});
console.log(nuevoArray);
//ES OTRA FORMA DE ESCRIBIRLO
const iniciales = (array) => array.forEach((item) => console.log(item.charAt(0)));
  

console.log("metodo de iniciales")
iniciales(nombres)
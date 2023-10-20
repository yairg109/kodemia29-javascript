//SE REQUIERE- generar las iniciales de una persona usando su nombre
//completo

function nombreCompleto(text) {
  let inicialesNombre = " ";
  i;
}

let people = [];
function createPerson(name, age, email) {
  let persona = {};
  persona.name = name;
  persona.age = age;
  persona.email = email;
  console.log(persona);
}

createPerson("yair", 26, "yairramirezgaona@gmail.com");
//--------------------------------------------
// SI ESPERAS ESTAR LISTO, ESPERARAS TODA LA VIDA
/*
1. Separar la frase en palabras dadas por el espacio
2. Split. para separar las palabras con el espacio
3. Obtener una array de palabras
4. Evaluar la posicion de cada palabra 
5. Saber la posicion de la palabra con un for hasta el lenght de la array
6. Evaluar % si es non o par
7. Solo Ocupar los non para concatenarlos en una variable 
8. Mostrar la frase
*/
/*function nuevaFraseNon(text) {
  let arreglo = text.split(" ");
  let nuevaFrase = "";
  for (let i = 0; i < arreglo.length; i++) {
    if (i % 2 !== 0) {
      nuevaFrase += arreglo[i] + " ";
    }
  }
  return nuevaFrase;
}
let frase = nuevaFraseNon("SI ESPERAS ESTAR LISTO, ESPERARAS TODA LA VIDA")
*/ //console.log(frase)

function nuevaFraseNons(text) {
  let arreglo = text.split(" ");
  let nuevaFrase = "";
  for (let i = 0; i < arreglo.length; i++) {
    nuevaFrase += arreglo[i] + " ";
  }
  return nuevaFrase;
}

let frases = nuevaFraseNons("SI ESPERAS ESTAR LISTO, ESPERARAS TODA LA VIDA");
console.log(frases);
//NUEVO EJERCICIO DE OBEJTOS ESTUDIANTES

/*
1.- Entregar el promedio general del score de los koders
2.- Obtener una nueva lista que contenga únicamente aquellos koders cuyo score sea mayor que 9
3.- Saber cuantos koders hay de alguna generación específica:
      1 -> no hay koders de esta generación
      9 -> hay 1 koder de la generación 9
      12 -> hay 2 koders de la generación 12
*/
let koders = [
  {
    name: "Said Barrera",
    generation: 12,
    score: 9.2,
  },
  {
    name: "Helena Fuentes",
    generation: 8,
    score: 8.7,
  },
  {
    name: "Gerardo Cabrera",
    generation: 12,
    score: 9.9,
  },
  {
    name: "Brenda Guerrero",
    generation: 8,
    score: 8.4,
  },
  {
    name: "Alejandro Fuentes",
    generation: 7,
    score: 8.6,
  },
  {
    name: "Sandra Tellez",
    generation: 9,
    score: 9.9,
  },
];
//VARIABLE GLOBAL PARA EL NUMERO DE ELEMENTOS DEL OBJETO
let cantidadElementos = koders.length;

function promedioTotal(koders) {
  let score = 0;
  let promedio = 0;
  for (i = 0; i < cantidadElementos; i++) {
    score += koders[i].score;
  }
  promedio = score / cantidadElementos;
  return promedio;
}

let total = promedioTotal(koders);
console.log(total);

//---------------------------------------------
function mayorNueve(koders) {
  let nombres = [];
  for (i = 0; i < cantidadElementos; i++) {
    if (koders[i].score > 9) {
      nombres.push(koders[i].name);
    }
  }
  return nombres;
}

let nombresmayornueve = mayorNueve(koders);
console.log(nombresmayornueve);
//---------------------------------------------

function generacion(koders, generacion) {
  let cantidadKoders = 0;


  for (let i = 0; i < cantidadElementos; i++) {
    if (koders[i].generation == generacion) {
      cantidadKoders++;
    }
  }
   return cantidadKoders>0 ? "hay: " +cantidadKoders+ " koders en la generacion "+ generacion  : "No existen Koeders en esa generacion"
}

let estudiantes = generacion(koders, 12);
console.log(estudiantes);

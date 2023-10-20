//RETO
let
anguage = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}
console.log(text)
//-----------------------------------------
//FUNCIONES DECLARATIVAS
let miFuncion =function(a,b){
    return a+b
}
console.log(miFuncion(1,2))

for(let i = 0; i<=3 ; i++){
    console.log("Hola")
// }

function textLimit(texto, n1) {
    let nueva = "";
    if (n1 > texto.length) {
        nueva = "nel";
    } else {
        nueva = texto.slice(0, n1);
    }
   return nueva
}

let prueba = textLimit("YAIR RAMIREZ GAONA",4);
console.log(prueba)

//--------------------------------
// - Teniendo el texto: "La mejor forma de predecir el futuro es creándolo"
// crear una función que me devuelva la cantidad de palabras cuya longitud sea par, y la cantidad de palabras cuya longitud sea non.

// -pares: 6
// -nones: 3

// .split
// */
function contadorPalabras(text) {
  let nuevaPalabra = "";
  //EXPRESIONES REGULARES DE PATRONES DE BUSQUEDA
  primerEspacio = /^ /;
  ultimoEspacio = / $/;
  //Generamos la nueva palabra para quitar espacios
  text = text.replace(espaciosBlancos, " ");
  text = text.replace(primerEspacio, " ");
  text = text.replace(ultimoEspacio, " ");
  nuevaPalabra = text.split();
  //contarPalabras = nuevaPalabra.length;
  return nuevaPalabra;
}
function contadorPalbras(text) {
  let palabrapar = "";
  let palabranon = "";
  numeroPalabras = text.length;
  for(i=0;i<=numeroPalabras;i++){


  }
}
let textos = "como estas";
console.log(contadorPalabras(textos));

let hola = "hola como";
let nsplit = hola.split(" ");
let nuemero = nsplit.length;

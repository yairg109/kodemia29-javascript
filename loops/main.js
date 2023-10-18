// //RETO 
// let
// anguage = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x;
// }
// console.log(text)
// //-----------------------------------------
// //FUNCIONES DECLARATIVAS
// let miFuncion =function(a,b){
//     return a+b
// }
// console.log(miFuncion(1,2))

// for(let i = 0; i<=3 ; i++){
//     console.log("Hola")
// // }

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

function paresImpares(text){
    
}


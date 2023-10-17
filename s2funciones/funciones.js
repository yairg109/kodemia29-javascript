// // FUNCION DE SUMA DE DOS NUMEROS 

// function Suma(n1,n2){
//     let resultado = n1 +n2
//     return resultado
// }
// console.log(Suma(2,1))


// //FUNCION PARA SABER SI UN NUMERO ES PAR O IMPAR

// function numeroParImapar(n1){
//     let resultado=n1%2
//     if(resultado ===0){
//         console.log("Tu numero es par")
//     }else if(resultado ===1){
//         console.log("Tu numero no es par")
//     }else{
//         console.log("No es nada bro")
//     }
// }
// numeroParImapar(9)

//EJEMPLO DE SWITCH  PARA EL EJEMPLO DE MASCOTA
console.log("------Bienvenido al nombre de tu mascota-------")

function elNombredemiMascota(Especie){
    switch(Especie){
        case "gato":
             console.log("tu gato deberà llamarse : Michiflais")
            break;
        case "perro":
            console.log("Tu perro deberà llamarse : Milaneso")
            break;
        case "ave":
            console.log("Tu ave deberá llamarse : Piolín")
            break;
        default:
            console.log("Por favor escribe el nombre de tu especie : especie no conocida")
            break;
    }
}
elNombredemiMascota("yair")

//funcion de dados


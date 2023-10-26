//FUNCION NORMAL
function suma(a, b) {
  return a + b;
}

let resultado = suma(2, 3);

console.log(resultado);

//ARROW FUNCTION
//-- Cuando existen de una sola linea tiene unreturn implicito

const multiplicar = (n1, n2, n3) => n1 * n2 * n3;
let resultado2 = multiplicar(3,4,5)
console.log(resultado2)

const dividir = (n1,n2) =>{
    return n2/n1
}

//CALL BACKS

const sumar=(a,b,callback)=>{
    return callback(a,b)
}
sumar(11,2,(a,b))=>{
    console.log(a+b)
}


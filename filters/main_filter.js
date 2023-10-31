// METODOS DE FILTRADO

/*
Es una forma de devolver un arreglo pero que cumpla con ciertas condiciones
con cierto criterio
*/
const numeros = [1, 2, 4, 5, 6, 8, 1, 2, 3, 4, 5];

const numerosFiltrados = numeros.filter((x) => x > 1);
console.log(numerosFiltrados);

//Solo retorna verdadero o falso
const metodoSome = numeros.some(x => x===0)
console.log(metodoSome)

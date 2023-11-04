//todas las funciones que se comuncican con bases de datos
//deberan de ser asyncronicos

//FIREBASE necesito colocar un punto json al final
//FUNCION GET PARA LEER 
const getAllusers = async () => {
  let response = await fetch();
  //Extraer en formato json es como await
  let data = await response.json();
  console.log(response);
  console.log(data)
};

getAllusers();

//FUNCION POST 
const createUser = async(userObject)=>{
    let response = await fetch(,{
        method:"POST",
        body:JSON.stringify(userObject),
    })
}
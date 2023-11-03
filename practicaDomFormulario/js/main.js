//LA LISTA DE USUARIOS
let usersList = [];

const pasarInformacion = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let foto = document.getElementById("foto").value;
  let id = Date.now().toString();

  let user = { name, email, foto, id };
  return user;
};
//METODO DE DOM PARA LA SELECCION DEL ELEMENTO EN HTML "GUARDAR"
//getElementById("nombre") seleccion del elemento por ID

let btnGuardar = document.getElementById("btn-guardar");

//ACTIVAR el elemento DOM
btnGuardar.addEventListener("click", () => {
  usersList.push(pasarInformacion());

  console.log(usersList);
});

const printUsers = (array) => {
  array.array.forEach((element) => {
    
  });
};

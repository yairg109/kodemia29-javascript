
//LA LISTA DE USUARIOS
let usersList=[]

const pasarInformacion= ()=>{
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let foto = document.getElementById("foto").value
    let id = Date.now().toString()

    let user = {name,email,foto,id}
    return user
}
let btnGuardar = document.getElementById("btn-guardar")  
btnGuardar.addEventListener("click",()=>{

    usersList.push(pasarInformacion())
    console.log(usersList)
})
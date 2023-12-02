const yair = {
  name: "yair",
  age: 20,
  cursosAprobados: ["Curso HTML", "Curso Practici"],
  //Es una forma de crear un metodo
  aprobarCurso: function () {},
  aprobarMuchosCursos(nuevoCurso) {
    //this hace referencia al mismo metodo
    this.cursosAprobados.push(nuevoCurso);
  },
};

// yair aprueba otro curso
//yair.cursosAprobados.push("Curso Responsive");

//CREAR EL MOLDE == clase

function Student(name, age, curso) {
  (this.name = name), (this.age = age), (this.curso = [curso]);
}

Student.prototype.agregarCursos = function (nuevoCurso) {
  this.curso.push(nuevoCurso);
};

//Instancia

const mama = new Student("Angelica", 50, "corteCabello");

//Creacion de prototipos como clases
//Sintaxis mas moderna
//el metodo constructor
class Student2 {
  constructor(name, age, cursosAprobado) {
    this.name = name;
    this.age = age;
    this.cursosAprobado = cursosAprobado;
  }

  aprobarCurso(nuevoCursos) {
    this.cursosAprobado.push(nuevoCursos);
  }
}

// const estudiantePrimaria = new Student2(
//     "Miguel",
//     14,
//     [
//         "cursoMate",
//         "CursoEspañol"
//     ]
// )

//Punto importante ---- Simpre definir el tipo de dato en especial array cen los parametros cuando creamos instalacias
const Miguelito = new Student2("Miguel", 14,["Mate"]);

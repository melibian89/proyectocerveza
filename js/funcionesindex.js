//pedir la confirmacion de edad

var warning = 'Eres mayor de 18 años?';
if (confirm(warning)) {
    console.log ('Bienvenido');
}
else {
    console.error ('Nopuedes ingresar solo es para mayores de 18 años');
}

//Saludo a usuario

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Buen dia!";
} else if (time < 20) {
  greeting = "Buenas tardes!";
} else {
  greeting = "Buenas noches!";
}
document.getElementById("demo").innerHTML = greeting;


function mifuncionboton() {
    
    document.getElementById("boton").innerHTML = x;
  }

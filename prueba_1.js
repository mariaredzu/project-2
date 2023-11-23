var nombre = prompt("Fill in with your name");
var apellido = prompt("Fill in with your lastname");

var contenedor = document.getElementById("rellenar");


var parrafo = document.createElement("p");
var texto = document.createTextNode("Bienvenido " + nombre + " " + apellido);

parrafo.appendChild(texto);


contenedor.appendChild(parrafo);
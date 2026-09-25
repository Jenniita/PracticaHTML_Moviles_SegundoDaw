let h1 = document.getElementById("titulo-h1");
let nodo2 = document.querySelector("#nodo2");

//Para cambiar el contenido del h1 desde la consola
//console.log((h1.textContent = "soy un h1"));
//Tambien se podria poner directamente h1.textContent = "soy un h1"

console.log(nodo2);

//Se pueden hacer operaciones desde la consola, y te da el resultado directo
let suma = 4 + 5;
console.log(suma);

//console.log("Muestra")
//alert("hola")

//BOTON MENU
const botonMenu = document.querySelector("#menu-icono");
const contenidoMenu = document.querySelector(".navegador");

//EVENTO
botonMenu.addEventListener("click" , ()=>{
    contenidoMenu.classList.toggle("mostrar");
})
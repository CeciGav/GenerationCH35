//Programación sincrónica
function two () {
    console.log("dos");
}

function one () {
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("**************")

//Programación asíncrona
/* setTimeOut recibe una función anónima y establece un tiempo de ejecución 
para cumplir con la condición de asinc */

const twoAsync = () => {
    setTimeout( () => {
    console.log("dos Async");
    }, 5000);
}

const oneAsync = () => {
    setTimeout(function() {
    console.log("uno Async");
    }, 3000);
    twoAsync();
    console.log("tres Async");
}

oneAsync();

/*
Trabajando con promesas mediante fetch API
*/
const url = "https://jsonplaceholder.typicode.com/users";

//Usando fetch
fetch(url)
    //Si se cumple la promesa vamos a traer los datos de la API y se convertiran en tipo jason para poder mostrarlos en consola
    .then(data => data.json())
    .then(data => {
        console.log(data); //Mostrando en consola todos los usuarios de la API
        console.log(data[0].name); //Mostrando en consola el usuario con índice 0 y trayendo solamente su nombre
    })
    .catch(error => console.error("¡Ups!, Algó salió mal", error)); //Mensaje de error
/*
==Arrays==
* Es una variable coleccion o agrupacion de elementos en una misma variable, cada uno de ellos ubicado por la posicion que ocupa el array. 
* Los arrays se utilizan para almacenar y organizar datos de manera mas eficiente.
*/
//Crear un array
const numeros = [1, 2, 3, 4, 5];

//Array cadena de texto
const comida = ["tacos", "camarones", "burritos", "galleta suave"];
console.log(comida);

//Array mixto
const mixto = [
    "pluma",
    8,
    true,
    {nombre:"Ceci"}
];
console.log(mixto);

//Array vacío
const lista = [];
console.log(lista);
//agregar elementos a mi array vacío
lista[0] = "leche";
lista[1] = "té";
lista[3] = "café";
lista[2] = "pan";
console.log(lista);

//Otra manera de agregar arrays
const frutas = new Array("mandarina", "plátano", "peras", "papayas");
/* Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar 
a llamar un nuevo Objeto de tipo Array */
console.log(frutas);

//Longitud de un array
console.log(frutas.length);

//Acceder a los elementos del Array, acorde a su índice
console.log(frutas[3]);
console.log(frutas[4]); //undefined xq el índice siempre inicia en 0

//Modificar un elemento del array por el índice
const cremería = ["jamón", "salchicha", "queso manchego", "quesillo", "yogurt"];
console.log(cremería);
//cambiamos un elemento de quesillo a queso de mesa
cremería[3] = "queso de mesa";
cremería[0] = "yakult";
console.log(cremería);

//Arreglo de arreglos o multidimencional
console.log("Arreglo de arreglos");

const estados = ["estado de México", "Jalisco", "Yucatán", "Sonora", "Oaxaca", "CDMX"];

const platillos = ["guajolocombo", "torta ahogada", "panuchos", "dogos", "tlayuda", "tacos?"];

const menú = [estados, platillos];

console.log(menú[0][2]);
console.log(`En ${menú[1][0]} también se come ${menú[0][2]}`);

//En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.

/*
Métodos de Arrays

Método de cola (queue). Los métodos de cola implican agregar elementos al final del array y eliminar 
elementos al inicio  del array. Sigue el principio de FIFO (first-in-first-out) lo que significa 
el primer elemento añadido es el primer elemento eliminado.
push
shift
unshift

Método de pila (stack). Implica agregar elementos al final del array y eliminar elementos al final del array. 
Sigue el principio LIFO (last-in-first-out) que significa: el último elemento añadido es el primer elemento en ser eliminado.
el último elemento (L) que se agrega(I) es el primero(F) en ser eliminado(O), ese es LIFO
push
pop

*/
console.log("métodos de Arrays");
const ch35 = ["Daniboy", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);

//pop() eliminar el último elemento del array
let popch35 = ch35.pop();
console.log(popch35);
console.log(ch35);

//push() agregar el final del array
let pushch35 = ch35.push("Moni");
console.log(ch35);

//shift() quitar primero del array
let shiftch35 = ch35.shift();
console.log(ch35);

//unshift agregar el principio del array
let unshiftch35 = ch35.unshift("Danyboy");
console.log(ch35);

//reverse () cambia el sentido de ordenamiento del array
let reversech35 = ch35.reverse();
console.log(ch35);

/*
Investigar:
sort
forEach
slice
splice
indexOf
*/

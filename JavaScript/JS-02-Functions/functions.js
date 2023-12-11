/*
Funciones. Son bloques de código con instrucciones que se pueden
reutilizar las veces que sean necesarias.
Algunas funciones reciben parámetros y otras no reciben parámetros
*/

//Función que nos permita saludar
function saludar() {
    console.log("Hola desde una función");
}
//Ejecutar la función con el nombre de la función y los parámetros
saludar();

//Hoisting. Característica de una función que nospermite invocarla desde antes de su inicialización, es decir, se puede invocar antes del bloque de código o después
//Se invoca en la línea 12 y en la 19
function saludar() {
    console.log("Hola invocando la función con hoisting");
}
saludar();

//Funciones que retornan algo. Para que una función retorne algo (String, operación, variable, etc) necesitamos indicarle al código de la función que vamos a retornar  mediante la palabra return
function greeting() {
    return "Hola desde una función que retorna";
}
console.log(greeting());

//Función que retorna y recibe parámetros
function sumar(x, y) {
    return x + y;
}
let resultado = sumar(255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//Calcular el cuadrado de un número
function calCuadrado (numero) {
    return numero * numero;
}
let resultCuadrado = calCuadrado(5);
console.log(resultCuadrado);

//---Funciones flecha (Arrow function)---. Es una manera de declarar una función por declaración, sintetizando código y haciéndolo más legible.
//Función para calcular el cubo de un número
const calCubo = (number) => {
    return number * number * number;
}
let resultCubo = calCubo(3);
console.log(resultCubo);

//Funciones anónimas. Son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que la utilicemos
//Las funciones anónimas no permitien el hoisting, no se pueden invocar antes de inicializarlas
const mensaje = function () {
    return "Este es un mensaje desde una función anónima";
}
console.log(mensaje());

/* EJEMPLO ARTURO
var alimentaAlGato = (gato) => {
    if (gato === 'hambriento') {
      return 'Alimenta al gato';
    } else {
      return 'No alimentes al gato';
    }
  } */

//Callbacks. -- VA A EJECUTAR OTRA FUNCIÓN -- Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar ésa función de forma genérica desde su código
//FunctionB
const functionB =  function () {
    console.log("Ejecutando función B");
}
//FunctionA que mandará llamar a la función B
const functionA = function (callback) {
    callback();
}
functionA(functionB);
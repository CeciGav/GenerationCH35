// comentarios de una sola línea

/*comentarios
multilinea*/


//alert ("Hola mundo");


//console.log("Este es un mensaje para mi consola")

/*var nombre = prompt("Ingresa tu nombre");
alert("Hola, " + nombre +" Bienvenido a la ch y la pizza");*/

/*var numero1 = parseInt (prompt("Ingresa el primer numero"));
var numero2 = parseInt (prompt("Ingresa el segundo numero"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicación:" + (numero1 * numero2));
console.log("división:" + (numero1 / numero2));*/

/*var edad = prompt("Por favor, ingresa tu edad:");

if (edad >= 18) {
    alert("Eres mayor de edad. ¡Bienvenido!");
  } else {
    alert("Eres menor de edad. Lo sentimos, debes ser mayor de 18 años para continuar.");
  } MI ALERT*/


  //DATOS Y VARIABLES
  //scope es el alcance de nuestras variables
  
  /*var, let, const const la diferencia es el alcance:
  VAR tiene un alcance global
  LET tiene un alcance local
  CONST se mantiene sin ningún cambio*/

  /*STRING: cadena de texto (siempre lleva comillas "")
  NUMBER: númro
  NULL: nulo
  UNDEFINED: no está asignado o definido*/

  /*Todas nuestras variables deben ser declaradas con nombres específicos y 
  claros, sin espacios, no deben iniciar con números*/

 /* let nombre = "Daniel";
  let invitadxsExtras = 2;
  let esMayorEdad = true;
  let edad = 24;
  let invitadeEspecial = null;
  let horaDeSalida = undefined; */
  //CAJITAS DE PAPELERÍAS CON DATOS 

//  console.log(nombre); //LO VEO EN LA CONSOLA
   //document.write(nombre); //SE VE EN EL DOCUMENTO */

  /*Encasillamiento o tipado no es útil para el mantenimiento del código ya que lo hace más legible y fácil de enternder
  Nos ayuda a la prevnción de errores para redicir la probabilidad de los mismos
  Mejora el rendimiento de nuestro programa */

/*  let numero = 15;
  let texto = "hola"; */

  // con encasillamiento

/*  let numeroEncasillado = Number = 15;
  let textoEncasillado = String = "hola"; */

  //typeof palabra reservada para saber qué tipo de dato tenemos

//  console.log(typeof(nombre));

/*  let funcionNumber = console.log (typeof Number (nombre));
  metodoParseInt = console.log(typeof parseInt (nombre));
  metodoParseFloat = console.log(typeof parseFloat (nombre)); */

  //parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en éste cambio


/* var numero1 = "4";
var numero2 = "5";

console.log("Tipo de variable numero1: "+typeof(numero1));
/*
typeof solo devuelve el tipo de variable que estas utilizando
*/
//console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
//console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));
/*
Number: tranforma tu variable a una variable numerica
parseInt: tranforma tu variable a un tipo de variable entera
en el ejmplo lo utilizamod para sumas dos variables tipo string
*/
//console.log(numero1+numero2);
//console.log(parseInt(numero1)+parseInt(numero2));
//console.log(Number(numero1)+Number(numero2));
  
  /* conversion de number a string

  console.log(typeof String(edad));
  console.log(typeof edad.toString()); 

  Conversión de boolean a number

let numero = Number (esMayorEdad);

console.log(typeof(numero)); 

let texto = String(esMayorEdad);

console.log(typeof(texto));
console.log(typeof esMayorEdad.toString()); */

/* let negación = !esMayorEdad; 

console.log (negación); */

//concatenar básicamente unir strings

/* let saludo = "Hula humane ";
let frase = "el futuro es hoy";

texto = saludo + frase;

console.log(texto); */


// SESIÓN CON DANI

/*
Tipos de datos
> - String (Cadenas de texto)
> - Number (numericos)
> - Booleans (booleanos; true or false)
> - Null (nulos)
> - Undefined (Indefinidos)
> - Objects (Objects)
> - Objects (Arrays)

console.log(); Nos permite visualizar en consola del navegador el codigo de js.
console.warn(); Muestra un mensaje de advertencia
console.error(); Muestra un mensaje de error
console.table();
*/

let firstName;
firstName="Cecilia";
let lastName="Gavia";

console.log(firstName+" "+lastName);
console.log("Mi nombre es "+firstName+" mi apellido es "+lastName);

/*
ECMAScript 6 (ES6). Interpolacion de cadenas
> - backticks ``
> - Para variables ${}
> - Texto para string
*/

let age = 26;
//sin salto de linea
console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age} años`);
//con salto de linea
console.log(`Mi nombre es ${firstName}
mi apellido es ${lastName}
tengo ${age} años`);

//console.warn();
console.warn(`Precaucion, no es buena practica dejar sin punto y coma`);
//console.error();
console.error(`Status 404`);

/*
-Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
-Los arrays se pueden manipular mediante métodos específicos.
-Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
Un array posee n canditad de elementos.
- Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
*/

let arreglo1 = []; //este es un array vacío
console.log(`Array vacío $[arreglo1]`);
//los elementos de un array se separan mediante comas
let cars = ["volkswagen", "BMW", "Mazda", "Kia"]; //array de string
console.log(cars);
//longitud e índice son diferentes. Longitud (length) es el número de elementos y el índice corresponde a cada elemento a partir del 0.
console.log(typeof(cars));

console.log(typeof(cars)); //Output: objet
let salariesMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200]; //Array numbers
console.log(salariesMxn.length); //Output: 12
console.log(salariesMxn);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
  firstName: "Cecilia Gavia",
  lastName: "Chávez",
  age: 29,
  country: "México"
}

console.log(employee);
//mostrando mi array como table
console.table(employee);
//mostrando mi objeto como tabla
console.table(cars);





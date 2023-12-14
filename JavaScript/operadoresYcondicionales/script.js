/*Operador
Es un signo que especifica que debe efectuar una determinada operación
*/

/*Operadores aritméticos (+,-,*,/,%,++,--)
Operadores de asignación (=)
Operadores lógicos (&&, ||, !)
Operadores de comparación (==,===,!=, !==, <,>, >=, <=)
Operadores de cadena (toLowerCase, toUpperCasa, trim, toString, concat, +)
*/

/*
Operadores aritméticos
+ : suma, se utiliza para sumar dos números
- : resta, para restar un número de otro
* : multi, para multiplicr dos números
/ : división, se utiliza para dividir un número entre otro
% : residuo, se utiliza para obtener el resto de una división
++ : incremento, aumento de uno en uno la cantiad o el número
-- : decremento, disminuye de uno en uno la contidad o el número
*/

let num1 = 5;
 let num2 = 8;
 let num1a = num1;
 num1a++;
 let num1d = num1;
 num1d--;
 console.log(`
 ${num1} + ${num2} = ${num1+num2}
 ${num1} - ${num2} = ${num1-num2}
 ${num1} * ${num2} = ${num1*num2}
 ${num1} / ${num2} = ${num1/num2}
 ${num1} % ${num2} = ${num1%num2}
 ${num1} -- = ${num1d}
 ${num1} ++ = ${num1a}
`);

let numero1 = 10;
let numero2 = 8;

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicación = numero1 * numero2;
división = numero1 / numero2;
residuo = numero1 % numero2;
incremento = numero1;
incremento ++;
decremento = numero2;
decremento --;

console.log(suma);
console.log(resta);
console.log(multiplicación);
console.log(división);
console.log(residuo);
console.log(incremento);
console.log(decremento);


//Ejemplo de cómo aplicar descuento
let precioReal = 1000;
let porceDes = 20;

let cantidadDesc = (precioReal + porceDes)/100;
let precioConDesc = precioReal - cantidadDesc;

console.log("Precio Real: $" + precioReal);
console.log("Porcentaje de descuento: " + porceDes);
console.log("Cantidad de descuento: $" + cantidadDesc);
console.log("Precio con descuento: $" + precioConDesc);

//* Usando los operadores para un descuento
let precioRel = 200;
let descuenta = 20;

console.log(`
kilo de carnita ${precioRel}
descuento %${descuenta}
cantidad menos a pagar ${precioRel*(descuenta/100)}
Precio con descuento ${precioRel*(1-(descuenta/100))}
`);

//ME PERDÍ TENGO QUE BUSCAR EL CÓDIGO

/*
(!==) Desigualdad estricta, éste operador verifica si dos valores no son iguales, pero
a diferencia de (!=) en ésta caso ambos valores deben teenr el mismo tipo y valor
*/

let num7 = 41;
let num8 = "50";

if(num7 !== num8){
    console.log("Los valores son diferentes");
} else {
    console.log("Los valores son iguales");
}

//(>): Mqyor que, básicamente nos indica si un valor es mayor que otro

let puntuciónFinal = 85;
let puntuaciónRequerida =75;

console.log(puntuciónFinal > puntuaciónRequerida);

//(<): Menor que nos indica si un valor es menor que otro

let años = 20;
let edadLímite = 30;

console.log(años < edadLímite);

//(>=): Mayor o igual que y nos dice si un valor es mayor o igual a otro

let edad = 40;
let edadNecesaria = 18;

console.log(edad >= edadNecesaria);

//(>=) Menor o igual que y nos indica si un valor es menor o igual a otro

let temperatura = 14;
let temperaturaMáxima= 21;

console.log(temperatura <= temperaturaMáxima);

/*
ejercicio 1 
un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
*/
let numm1 = 1;
let numm2 = 8;

console.log(numm1 >= num2);

/*
ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
*/

let var0 = "hole";
let var1 = "hola";

if(var0 !== var1){
    console.log("Los valores son diferentes");
} else {
    console.log("Los valores son iguales");
}

// Operador lógicos

//&& AND se utiliza cuando las 2 condiciones deben de cumplirse
let mayoriaDeEdad = 18;
let tieneIne = true;

if(mayoriaDeEdad >= 18 && tieneIne) {
    console.log("Tienes la mayoría de edad para rentar éste estapacio"); 
} else { 
    console.log("No tienes edad suficiente para rentar éste espacio");
}

// || OR se utiliza cuando se debe cumplir una condición u otra
let esPrime = false;
let descuento = true; 

if (esPrime || descuento) {
    console.log("Califica para descuento");
} else {
    console.log("No califica para descuento");
}

// ! NOT se utiliza para negar el valor de una condición
let esDíaLibre = false;

if (!esDíaLibre) {
    console.log("Se trabaja");
} else {
    console.log("Se descansito");
}

//Operadores de cadena

//toLowerCase cambia la cadena de texto a minúsculas
let mensajeUsuario = "bienvenide e le tierre";
let camnioMinúsculas = mensajeUsuario.toLowerCase();
console.log(camnioMinúsculas);

//toUpperCase hace el cambio de nuestro string a mayúsculas 
let saludo = "Felez Neveded";
let cambioMayúsculas = saludo.toUpperCase();
console.log(cambioMayúsculas);

//trim quita los espacios
let aviso = "  la ch Y La Pizza   ";
let sinEspacios = aviso.trim();
console.log(sinEspacios);

//toString convierte un tipo de dato number en string
let numm10 = 26;
let cadenas = numm10.toString();
console.log(cadenas);

//concat Concatenar o juntar los datos
let nombre = "Cecilia";
let apellido = "Gavia";
let nombreComplete = nombre.concat (" ",apellido);
console.log(nombreComplete);

/* Expresiones

Expresión aritmética
let operación = 14 + 25 * 12; combina la suma con la multiplicación

Expresión de cadena
let notificación = "Casi," + "Año Nuevo"; expresión concatedano

Expresiól lógica
let es MayorEdad = (23 > 18) && (23 < 65);

Expresión de asignación
let frasco = chocolates; asigna el valor a la variable

*/

/*
TAREA
lista para hacer hockets  utilizar funcion y operadores logicos para revisar si tenemos los ingredientes y la cantidad necesaria (yo entendi que para 12 personas)
*/

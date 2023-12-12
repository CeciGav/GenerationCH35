console.log("hola bb cómo has estado, tal vez no sepas quién soy, o tal vez, me hayas olviiidaaaadoooo, bb yo no soi tan maalo, bb sabes k, t amo");
/*
Control de flujo y estructura de control
*
Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de 
las facilidades y ventajas que nos proporcionan para escribir y depurar código, podemos mencionar las siguientes:
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
*/
/*
*Declaración de la sentencia if-else
*Palabra reservada if para comenzar la declaración, se coloca un paréntesis () donde se debe colocar 
una expresión lógica (true|false), se abren y cierran llaves para indicar qué sentencia va a ejecutar si la condición se cumple (true),
*Después de la llave {} declarada para el bloque de ejecución if, colocamos la palabra reservada else, 
para este ejemplo no es necesario colocar mas expresiones dentro de un () 
*simplemente colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejecutado 
en caso de que la condición no se cumpla (false).
*/
let n = 15;
if (n > 10) { //Si en lugar de 10 dijera 20, en la consola diría false
    console.log(true);
} else {
    console.log(false);
}

/*
if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas 
 *en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/

//If anidados
let edadd = 26;
if (edadd < 18) {
    console.log("Eres menor de edad, retírate");
} else if (edadd >= 18 && edadd < 65) {
    console.log("Eres un adulto joven, éntrale");
} else {
    console.log("Eres un adulto mayor")
}

/*
*Sentencia switch
*La sentencia switch es otro tipo de estructura de control de flujo, que, 
nuevamente se encuentra en diversos lenguajes de programación.
*Es bastante parecida a la sentencia del if-else, pero va a ser diferente en cuanto a comportamiento, 
ya que no se basa en una bifurcación (partición de caminos), sino que se secciona en múltiples casos (case) que, 
dependiendo de la expresión que cumpla con un caso específico, será la secuencia que se va a ejecutar, dentro de la declaración.
*Declaración:
*se empieza por colocar la palabra reservada switch, seguido de estos, colocamos paréntesis () donde se 
debe colocar el valos que va a indicar que sentencia/caso a ejecutar.
*falta indicar el bloque de código que se limita a ésta sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de código falta colocar los casos para cada valor que se desee, establecer según 
sea el valor indicado dentro de nuestro paréntesis ().
*Cada uno de éstos casos se separa de la siguiente manera:
* case valor : instrucción a ejecutar si el valor empata con éste caso.
*Después, para indicar que la ejecución de las sentencias debe  cortarse cuando se cumpla, se coloca la instrucción
*break: 
*Cuando terminemos d estabecer los casos que necesotemos declarar ennuestra sentencia, debemos colocar un valor por defecto, defaúlt.
*Esta última sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata 
con ingún otro dentro de la sentencia o en ninguno de los casos.
* dfaúlt : mensaje no disponible. 
*/

let dia = "martes";
switch (dia){
    case "lunes" :
        console.log("Inicio de semana");
        break;
    case "martes" :
        console.log ("Nadie hace fiesta los martes");
        break;
    case "miércoles" :
        console.log ("miércoles de galleta suave");
        break;
    case "jueves" :
        console.log (" juevebes casi viernes");
        break;
    case "viernes" :
        console.log ("viernes de disfraces");
        break;
    case "sábada" :
        console.log ("sábado de lokiar");
        break;
    case "momingo" :
        console.log ("recupérate de la cruda xq mañana es lunes");
        default :
        console.log ("ya se acabaron los días de la semana no mames, ya no hay más");
        break;
} // termina switch

/*
*Operador ternario
*Expresión considicional if-else más simple y legible
*Principalmente se usa para simplificar condiciones de una sola expresión.
*también puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el código se puede volver confuso y poco legible.
* Su declaración es la siguienete:
*Palabra reservada var, let o const:
*se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguido de éste operador, 
hay que colocar una expresión lógica, esta va dentro de un paréntesis (), despues hay que colocar ésta caracter ? 
que indica el camino a seguir, dependiendo de si se cumple (o no) la expresión.
*Para separar ek resultado true de false debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ajecutar.
*Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar
*/

//Ejemplo de operador ternario
let verificación = n > 5 ? "Si es mayor" : "No es mayor"
console.log (verificación);
/*
Cuando usar if-else u cuando usar switch?
-if-else : cuando necesitemos tomar decisiones bajo condiciones más flexibles.
-Siwtch : cuando tengamos un conjunto fijo de valores para comparar una expresión.
*/


// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

//EJERCICIO 1 
let edad = 26;
if (edad < 18) {
    console.log("Eres menor de edad, aún no puedes votar");
} else if (edad >= 18 && edad < 65) {
    console.log("Puedes votar");
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

//EJERCICIO 2
function nDivisible(numero) {
    if (numero % 7 === 0 && numero % 8 === 0) {
        return true;
    } else {
        return false;
    }
}

let numeros = [56, 7, 8, 0, 224, 73];

numeros.forEach(num => {
    let resultado = nDivisible(num);
    console.log(`${num} es divisible entre 7 y 8? ${resultado}`);
});



/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
//EJERCICIO 3
function nDivisible49(numero) {
    if (numero % 4 === 0 && numero % 9 === 0) {
        return true;
    } else {
        return false;
    }
}

const numAle = Math.floor(Math.random() * 100) + 1;

const resultado = nDivisible49(numAle);
console.log(`¿El número aleatorio ${numAle} es divisible entre 4 o 9? ${resultado}`);



/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
//EJERCICIO 4
let movie = "acción";
switch (movie){
    case "acción" :
        console.log("Kignsman 3");
        break;
    case "drama" :
        console.log ("Nightmare Alley");
        break;
    case "comedia" :
        console.log ("The Rocky Horror Picture Show");
        break;
    case "romance" :
        console.log ("Weathering with you");
        break;
    case "suspenso" :
        console.log ("Last night in Soho");
        break;
    case "terror" :
        console.log ("Suspiria (original o remake)");
        break;
    case "animación" :
        console.log ("El gato con botas: EL último deseo");
        break;
}



/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
//EJERCICIO 5
function accCajero(opcion) {
    if (opcion === 1) {
        console.log("Retirar de dinero");
    } else if (opcion === 2) {
        console.log("Transferencia");
    } else if (opcion === 3) {
        console.log("Depósito");
    } else if (opcion === 4) {
        console.log("Pago de servicios");
    }
}    
accCajero(1); 
accCajero(2);
accCajero(3);
accCajero(4);



/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
//EJERCICIO 6
function convDivisas(cantidad, opcion) {
    let resultado = 0;
    
    switch (opcion) {
        case 1:
            resultado = cantidad / 20;
            console.log(`${cantidad} pesos mexicanos equivale a ${resultado.toFixed(2)} dólares estadounidenses`);
            break;
        case 2:
            resultado = cantidad / 23; 
            console.log(`${cantidad} pesos mexicanos equivale a ${resultado.toFixed(2)} euros`);
            break;
        case 3:
            resultado = cantidad / 0.18;
            console.log(`${cantidad} pesos mexicanos equivale a ${resultado.toFixed(2)} yenes japoneses`);
            break;
        case 4:
            resultado = cantidad / 26;
            console.log(`${cantidad} pesos mexicanos equivale a ${resultado.toFixed(2)} libras esterlinas`);
            break;
        case 5:
            resultado = cantidad / 19; 
            console.log(`${cantidad} pesos mexicanos equivale a ${resultado.toFixed(2)} francos suizos`);
            break;
    }
}
convDivisas(1000, 1);
convDivisas(500, 2);
convDivisas(1500, 3);
convDivisas(2000, 4);
convDivisas(2500, 5);
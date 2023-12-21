/* Paradigmas de programación (forma de ver las cosas)

Programacióm imperativa: Se basa en instrucciones detallas ejecutando un flujo o una secuencia determinada

Programación basada en eventos: Se basa en la gestión y respuesta de eventos 
(crear un archivo, abrirlo, arrastrarlo).

Programación declarativa: Se basa en explicar lo que queremos obtener + cómo lo vamos a hacer

Programación orientada a objetos: Toma cierta información o estructura del mundo real (objetos) 
para poder explicar ciertas cosas comos sua características (propiedades o atributos)
y sus comportamientos o acciones (métodos).
- Ejemplo = Perrito.
Atributos: Color de pelaje, número de patas, tamaño.
Métodos: Correr, olfatear, saltar.
*/

/* Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear 
instancias(hacerlo presente) de este tipo objeto.
Deben ir de lo más general a lo más específico */

class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    teléfono = "";

//Objetos
//El constructor es una función especial, cuya finalidad es la de construir o inicializar objetos
//Para inicializar un objeto es necesario definir un contructor que tomará los atributos
//Clases=molde, objeto=gomita, construcctor=chef, atributos=ingredientes, métodos=comportamientos

    constructor (nombre,apellido, edad, email, teléfono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.teléfono = teléfono;
    };

    comer (){
        console.log("Bon apetit");
    }//método comer
    
    bailar (){
        console.log("Dale hasta el suelo");
    }//método bailar

    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.teléfono);
    }
    //Siempre debe haber un proceso de construcción
}

let usuario1 = new persona ("Cecilia", "Gavia", "26", "cecigav@gmail.com", "3334865231");
let usuario2 = new persona ("Anna", "Fernandez", "26", "anna@gmail.com", "3334442585");
let usuario3 = new persona ("Rubén", "Norte", "28", "rub@gmail.com", "3321458796");
let usuario4 = new persona ("Eli", "Kerber", "29", "elikk@gmail.com", "3334254761");
let usuario5 = new persona ("Arturo", "Boot", "26", "arturo@gmail.com", "3336520194");

console.log(usuario1);//Imprimir un objeto completo
console.log(usuario4.email);//Imprimir un atributo específico
console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email);

usuario1.comer();//Invocar el método
usuario1.bailar();
usuario1.mostrarInfo();
console.log(usuario1.teléfono, usuario2.apellido);


// Pilares de la programacion orientada a objetos

/*
    Herencia
    Polimorfismo
    Abstraccion
    Encapsulamiento
*/

//Herencia nos permite heredar a las clases inferiores para poder optimizar un prograama

class arrendadxr extends persona { //subclase
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor ( nombre,
        apellido,
        edad,
        email,
        teléfono,
        capacidad,
        costo,
        nombreLugar) {
        super (nombre, apellido, edad, email, teléfono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;

    }

    mostrarInfo() {
        console.log("capacidad: ", this.capacidad);
        console.log("costo: ", this.costo);
        console.log("Nombre del lugar: ", this.nombreLugar);
    }
}

let arrendadxr1 = new arrendadxr ("Rocio", "Hernandez", 29, "rocio@gmail.com", "557726374", 100, 50000, "salonG")

console.log(arrendadxr1);
console.log(arrendadxr1.costo);
arrendadxr1.mostrarInfo();

class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();

  /*
  Polimorfismo: Tener objetos de diferntes tipos que pueden ser manipulados en común
  La posibilidad de realizar cambios en distintos objetos que comparten..?
  ====Polimorfismo====
Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.
  */
 class producto {
    marca = "";
    precio = 0;

        constructor(marca,precio) {
            this.marca = marca;
            this.precio = precio;
        }


    mostrarDescripción(){
        console.log("Marca ");
        console.log("Precio ");
    }
 }
 let producto1 = new producto("Celine", 200);

 //Encapsulamiento ocultar la implementación de un objeto y sólo mostrar los datos necesrios

 class Usuario{
    #contraseña;

    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo;
        this.#contraseña = contraseña;
    }

    verificarContraseña(contraseña) {
        return this.#contraseña === contraseña;
     }

 }

 /* Abstracción no es nada más que traer objetos del mundo real y  poder aplicarlos a la programación mediante clases,
 métodos, constructores y objetos  Los objetos de tipo JSON en un formato de intercambio de datos ligero,
 accesible, estructirado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y servidor.
 Esto gracias a que son más flexibles y generalmente se ejecutan con fetch
 */

let objetoJson = {
    "nombre": "Juanín",
    "apellido": "Maldito",
    "edad": 30,
    "email": "jm@gmail.com",
    "teléfono": "3352689741",

 }
 console.log(objetoJson);

 let objetoLiteral = {
    "nombre": "Juanín",
    "apellido": "Maldito",
    "edad": 30,
    "email": "jm@gmail.com",
    "teléfono": "3352689741",

 }
 console.log(objetoLiteral);

 //PINCIPIOS SOLID

/*
1er-Principio de resoonsabilidad única (Single Responsability Principle)
Una clase de tener aisgnada una tarea o responsabilidad específica y estano no debería de cambiar

2do-Principio abierto/cerrado (open/closed principle OCP)
Una clase puede estar abierta a extensiones ya agregar nuevas funcionalidades, pero sin generar cambios en la misma

3er-Principio de sustitución de Liskov (Likov Sustittution Principle LSP)

4to-Principio de segregación de interfaces (Interface Segregation Principle ISP)
Delimitar los métodos que necesito y dejar fuera los inncesarios

5to-Principio de invensión de dependencia (Dependency Inversión Principle DIP)
Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones.
Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.
En resumen, el principio de inversión de dependencia sugiere que las clases de alto nivel no deberían depender directamente de las clases de bajo nivel, sino más bien de abstracciones o interfaces. Esto permite flexibilidad en el diseño del software, ya que las clases específicas pueden ser intercambiadas fácilmente siempre y cuando cumplan con la misma interfaz o abstracción, sin afectar el funcionamiento de las clases de alto nivel.
*/
/*Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para inicializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no

Atributos 
Nombre 
Calificacion 

metodos 
imprimirCalificacion 
evaluacion 

la calificacion aprobatoria es de 6 
if para evaluar la calificacion
*/

class Alumno {
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    imprimirCalificacion() {
        console.log(`La calificación de ${this.nombre} es: ${this.calificacion}`);
    }

    evaluacion() {
        if (this.calificacion >= 6) {
            console.log(`${this.nombre} ha aprobado.`);
        } else {
            console.log(`${this.nombre} no ha aprobado.`);
        }
    }
}

let nombreAlumno = prompt("Ingrese el nombre del alumno:");
let calificacionAlumno = parseFloat(prompt("Ingrese la calificación del alumno:"));

let alumno = new Alumno(nombreAlumno, calificacionAlumno);
alumno.imprimirCalificacion();
alumno.evaluacion();

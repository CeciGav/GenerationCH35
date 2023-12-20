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
        
    };

    comer (){
        console.log("Bon apetit");
    }//método comer
    
    bailar (){
        console.log("Dale hasta el suelo");
    }//método bailar

    mostrarInfo(){
        console.log("Nombre: ");
        console.log("Apellido: ");
        console.log("Edad: ");
        console.log("Email: ");
        console.log("Teléfono: ");
    }
    //Siempre debe haber un proceso de construcción
}


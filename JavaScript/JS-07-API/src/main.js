//Programación sincrónica
/*
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
/*
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

oneAsync();*/

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

// > - Usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//Variable para guardar la información que se va a traer desde la API, debe ser de tipo NULL
let post = null;

//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/8")
        .then(response => response.json())
        .then(response => {
            post = response; //Guardo los datos de respnse en la variable de tipo null, para modificar el dato
            //Mandamos llamar la variable desde la función en catch con console.log
            mostrarDatos(post);
        })
        .catch(error => console.error("¡Problemas!", error));
});


//Función que me permita manipular la variable de tipo null
//Quiero traer name, email, phne del user de la API
const mostrarDatos = (post) => {
    //Creando nodos
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.emial;
    phone.innerHTML = post.phone;

    //Necesito hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//Usando fetch para mostrar productos
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response =>{
            productos = response
            //función x definir
            mostrarProductos(productos);
        })
        .catch(error => console.error("¡Cuidado!", error));
});

//Función para crear, agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => {
    //mado a llamar title, price, description, category, image desde la API
    productos.map((productos) => {
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //Enviar a HTML con innerHTML
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = productos.category;

    //mostrarlos en el navegador al agregarlos a su padre
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
    });
};

//Método POST utilizando fetch. Me permite crear recursos en la API
fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un método de tipo post
    method: "POST", 
    //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente (userId, title, body)
    body: JSON.stringify({
        userId: 1986,
        title: "La panadería encantada",
        body: "Author: Una coreana"
    }),
    //Definir header
    headers: {
        "Content-type": "application/jason; charset=UTF-8"
    }
})//Fin del fetch
    //Inicio de mis promesas
    .then(response => response.json)
    .then(json => console.log(json))

/* >>>>>>> Programación asíncrona (promise) <<<<<<<<< */
//Función flecha de tipo async-await
//Indico que es una función asincrona con la palabra reservada async antes de los parámetros 
const getUser = async () => {
    //Para que se cumpla la promesa, no utilizamos then sino que usamos try. Para errores se sigue usando catch 
    try {
        //Retardo para que se ejecute de manera asíncrona. Tengo que crear una nueva promesa, que se recibe utilizando catch
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Mi promesa que se ejecuta
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.error("Error inexplicable", error);
    }
}
//Invocar función, por favor, que no se nos olvide
getUser();

/* LocalStorage
Nos permite modificar, eliminar, guardar objetos de JS de manera local (en el equipo)
Crear un objeto de JS con sus llaves y valores
*/
const user = [
    {
        id: 1,
        nombre: "Ceci",
        apellido: "Gavia",
        email: "cecigav@gmail.com",
        posición: "estudiante",
        empresa: "generation",
    },
    {
        id: 2,
        nombre: "Diana",
        apellido: "Ramirez",
        email: "dianarm@gmail.com",
        posición: "estudiante",
        empresa: "generation",
    }
];

//Convertir el objeto creado a anotación JSON y almavenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].nombre} con posición ${user[1].posición}, trabaja en ${user[1].empresa}`);

//sessionStorage

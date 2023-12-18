/*
Para manipular la información de un Usuario, necesito crear un perfil mediante un objeto de JS.
*/

const user = {
    username: 'CeciGavi',
    age: '26',
    email: 'cecigav@gmail.com',
    favfilms: ['Maen Girls ', 'Beattlejuice ', 'Wheatering with you ', 'Suspiria ', 'Isle of Dogs']
}

//Crear una función que me permita ingresar el objeto del perfil en el nodo padre
const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    /*Mostrando elementos de lista en forma de lista
    Para mostrar el Array en forma de lista utilizaremos un ciclo forEach para recorrer el Array y traer cada elemento a la lista */
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    });
    //Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#BF8D30"; //BF8D30 25359

    //Mostrando elementos de lista en forma de fila (no nos sirver porque creamos una lista desordenada y no un párrafo)
    //document.getElementById("fav-films").textContent = user.favfilms;
}
//Invocando la función
createUser(user);

/*
Eventos para actualizar el username mediante el input y el botón
*/
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");
const userEmail = document.getElementById("email");
const inputEmail = document.getElementById("emial-input");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
    userEmail.textContent = inputEmail.value;
})
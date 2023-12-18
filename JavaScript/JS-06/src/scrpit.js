/*
Manipulación del DOM.
- Leer y traer nodos al árbol del DOM.
    document.getElementById (tare elementos por Id)
    document.getElementByClassName (tree elementos por Class)
    document.getElementByTagName (tare elementos por Etiquetas)
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo.innerText); //Traer sring (texto que vive en mi id)

//getElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la longitud de elementos de la clase
console.log(typeof titulos); //Muestra que es un object porque es una colección de arrays

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/* Métodos para llamar elemenos mediante selectores de CSS
    - document.querySelector("selector"); //#, ., <>
    - document.querySelectorAll(). Selecciona los elementos que se especifiquen.
Siempre vana traer el primer elemento con el selector indicado
*/

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass);

//queySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS 
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipoular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de manipulación del DOM. CH35";
titulo2.style.color = "#F23D3D";

/*
Métodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "Crear el nodo y agregar el nodo".
  -Crear nodos
    * documento.createElement("element") --> Crea elementos apartir de etiquetas.
    * document.createTextNode("text") --> Crea texto dento de las etiquetas.
*/
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
    - Agregar nodos, mandamos llamar al elemento padre y le pasamos la propiedad con la constante que guarda el nodo creado
        * parentElement.appendChild(const);
        * parentElement.append(const);
        * parentElement.insertBefore(const);
        * parentElement.insertAdjacentElement(const);
    Utilizaremos mayormente appendChild
*/
//Obtengo el elemento padre por tg, class o id
const parentElement = document.getElementById("dif");
//Crear el texto que vivirá en el nodo1
const textNodo1 = document.createTextNode("imagen agregada desde el DOM");
//Inserto el texto en el nodo1
nodo1.appendChild(textNodo1);
//Insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#A62F03";

/* Agrengando imagen */
//Insero el imgNodo en el elemento padre para definirlo posteriormente 
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src = "../src/assets/octocat.jpg";
imgNodo.alt = "Octocat-github";
imgNodo.width = "300";

/* Otra forma de leer y modificar nodos
    document.outerHTML (leer)
    node.innerHTML (escribir sobre el nodo)
*/
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulación del DOM - CH35";


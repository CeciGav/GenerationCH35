#Crear y publicar un nuevo paquete de npm

##Creación del package
1. Inicializar npm desde CLI
sh
npm init
Me guiará a través de una serie de pasos donde me solicite información relacionada a mi package, como el nombre, la versión , la descripción el punto de ntrada (index.js), comando de prueba, repo de git en donde vive, palabras clave para coincidir con búsquedas, autor, Licencia.
2 Presionar enter para aceptar que la información es correcta y generar el archivo package.json
> - package.json 
-Contien información sobre el proyecto módulo que vamos a crear. Son un standar de nodeJs para facilitar la estructura y ejecución de los proyectos dentro de el entorno de ejecución y de ésta manera poder compartirlo a través del sitio de npmjs.com
-La información se estructura coo objeto de js con notación json

3. Crear una carpeta modules en donde vivirá nuestro script (.js) con el nombre parimpar.js

5. Crear la función del script y exportarlo con `export default`
6. Importar el script desde el archivo `index.js` con `import + function + from + ruta con extensión` e invocamos la función con parámetros.
7. Configurar el `"type": "module"` en el archivo `package.json`
8. Ejecutamos el programa desde el entorno de nodejs con el comando
```sh
node index.js
```

## Publicar package en npm
1. Iniciar sesión de npm pero ahora desde CLI con el comando
```sh
npm login
```
2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje `logged in on npmjs.org`
5. Publicar el package con acceso público desde CLI a npm con el comando 
```sh
npm publish --access=public
```
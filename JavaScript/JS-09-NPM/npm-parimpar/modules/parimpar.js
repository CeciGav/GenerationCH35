//Creando una función para determinar si un número es par o impar
//Necesitamos exportar ésta función para que pueda ser utilizada en cualquier parte del proyecto, solamente llamando al script. Para ello tenemos que agregar las palabras reservadas 'export defaul'
//No puede ser función flecha si no función por declaración
export default function determinarParImpar(número) {
    (número % 2 === 0) ? console.log(`El número ${número} es par`) : console.log(`El número ${número} es impar`);
}

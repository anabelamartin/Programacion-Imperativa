// En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso
// por consola de los valores

const prompt = require("prompt-sync")({ sigint: true });

// ejercicio 1 Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros

function centimetro (){
    let cent = prompt ("ingrese la cantidad de centimetros: ")
    return cent * 2.54

}
console.log (centimetro())

// ejercicio 2 Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

function url (){
    let nombre =prompt("ingrese un numbre: ")
    return `http://wwww.${nombre}.com`
}
 console.log(url())

 //ejercicio 3 Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

 function admiracion(){
     let string =prompt ("ingrese string: ")
     return`¡¡${string}!!`
 }
 console.log(admiracion())

// # 4 Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

function edadPerro (){
    let edad = prompt ("ingrese un numero: ")
    return edad * 7;
}

console.log (edadPerro())

// #5 Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

function horaTrabajo() {
    let trabajo = prompt("ingrese el valor de su sueldo: ")
    return trabajo / 40

}
console.log(horaTrabajo())

// #6 Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores

function calculadorIMC() {
    let altura = prompt(" ingrese se altura en metros: ")
    let peso = prompt("ingrese su peso en kilogramos: ")
    return peso / altura
}
console.log(calculadorIMC())

// funcion flecha 

let calculadorIMC = () => {
    let altura = prompt(" ingrese se altura en metros: ")
    let peso = prompt("ingrese su peso en kilogramos: ")
    return peso / altura

}

console.log (calculadorIMC())


// Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne.
// Investigá qué hace el método de strings .toUpperCase()

function mayuscula (){
    let string = prompt ("ingrese un string: ")
    return string . toUpperCase()
}
console.log (mayuscula())

// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.
// Pista: te servirá revisar qué hace la palabra reservada typeof.

let tipo = a => typeof(a);
console.log(typeof (1))
console.log(typeof (true))
console.log(typeof ("hola"))

// Crear una función que le pasamos el radio de un círculo y nos devuelve la
// circunferencia.
// Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.

function circunsferencia (){
    let radio = prompt ("ingrese el valor del radio: ")
    return 2 * (Math.PI)* radio
}
console.log (circunsferencia())

// calculadora nivel I

//ejercicio 1
function sumar(n1, n2) {
    return n1 + n2

}
console.log(sumar(7, 9))

//ejercicio 2 
function resta(num1, num2) {
    return num1 - num2
}
console.log(resta(6, 2))

//ejercicio 3 

function dividir(a, b) {
    return a / b
}

console.log(dividir(16, 2))

// calculadora II




const prompt = require("prompt-sync")({ sigint: true });

let num1 = parseInt(prompt("ingrese el primer valor: "))

let num2 = parseInt(prompt("ingrese el segundo valor: "))

let num3 = parseInt(prompt("ingrese su tercer valor: "))

console.log(sumar(num1, num2))

console.log(resta(num1, num2))

function multiplicar(c, d) {
    return c * d
}
console.log(multiplicar(num1,num2))

console.log(dividir(num1, num2))

console.log(dividir(0, num2))

// calculadora nivel III

//ejercicio 1

function cuadradoDeUnNumero(num1){
    return multiplicar(num1, num1) 
}
console.log(cuadradoDeUnNumero(num1, num1))

//ejercicio 2

function promedioDeTresNumeros(num1, num2, num3){
    let sumar = num1 + num2 + num3
    return dividir (sumar, 3)

}
console.log(promedioDeTresNumeros(num1, num2, num3))

//ejercicio 3

function calcularPorcentaje (num1, num2){
    return (multiplicar(num1, num2))/100

}

console.log(calcularPorcentaje(num1, num2))

//ejercicio 4 

function generadorDePorcentaje(num1, num2){
    return (multiplicar(num1, 100))/num2
}
console.log(generadorDePorcentaje(num1, num2))



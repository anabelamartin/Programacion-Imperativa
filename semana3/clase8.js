// Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes

const prompt = require("prompt-sync")({ sigint: true });

function valor (){
	let parametro = parseInt (prompt("ingrese un numero: "))
	for (let i=parametro; i <= parametro + 10; i++ ){
		
	}
	console.log(i)

}
 valor()

//  Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function saltar (){
	for (let i=5; i <= 20; i += 3){
		console.log(i)
	}
	
}

saltar()

// Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100


function total (){
	let sumatoria = 0
	for (let i=0; i <= 100; i++){
		sumatoria += i
	}

	console.log(sumatoria)
}

total()

// Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número

function factorial (){
	let numero = parseInt (prompt("ingrese un numero entero positivo: "))
	let numerosEnteros= 1
	for(let i=1; i <= numero; i ++){
		numerosEnteros = numerosEnteros * i 
	}
	
	console.log(numerosEnteros)
}
factorial()


// let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

// for (let i = 0; i < numeros.length; i++) {
// 	for (let j = 0; j < numeros.length; j++) {
// 		if (numeros[j] > numeros[j + 1]) {
// 			let temp = numeros[j];
// 			numeros[j] = numeros[j + 1];
// 			numeros[j + 1] = temp;
// 		}
// 	}
// }

// console.log(numeros);

// // //buble sort metodo de ordenamiento 
// // let numeros= [6,5,1,2,3,4,8,7] //mayor a menor

//PRACTICA-------------------------------------------------------------------------------------
// const edades = [33, 27, 34, 30, 34, 25];
// Desarrollar una función que ordene internamente de forma ascendente las
// edades, la misma deberá retornar él array ordenado , es decir deberíamos
// obtener resultado como él siguiente

// function ascendente(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr
// }

// console.log(ascendente(edades))
//--------------------------------------------------------------------------------------------------------------------
// Desarrollar una función que ordene internamente de forma descendente
// las edades, la misma deberá retornar él array ordenado , es decir
// deberíamos obtener resultado como él siguiente.
// function descendente(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr
// }

// console.log(descendente(edades))
//--------------------------------------------------------------------------------------------------------------
// Dado un array de strings:
// const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]
// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?

// for (let i = 0; i < letras.length; i++) {
// 	for (let j = 0; j < letras.length; j++) {
// 		if (letras[j] > letras[j + 1]) {
// 			let temp = letras[j];
// 			letras[j] = letras[j + 1];
// 			letras[j + 1] = temp;
// 		}
// 	}
// }

// console.log(letras);
//-----------------------------------------------------------------------------------------------------------------------
// . A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:
const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: false,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]

// a. Desarrollar una función que ordene internamente de forma ascendente según él
// saldo de cada cuenta, la misma deberá retornar él array ordenado .
// function saldoAscendente(arr){
    
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr.length -1 ; j++) {
// 		if (arr[j].saldo > arr[j + 1].saldo) {
// 			let temp = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = temp;
// 		}
// 	}
// }
// return arr
// }
// console.log(saldoAscendente(arrayCuentas))

//----------------------------------------------------------------------------------------------------------------
// Desarrollar una función que ordene internamente de forma ascendente según la
// edad del titular de cada cuenta, la misma deberá retornar él array ordenado
function saldoAscendente(arr){
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1 ; j++) {
            if (arr[j].edadTitular > arr[j + 1].edadTitular) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
    }
    console.log(saldoAscendente(arrayCuentas))
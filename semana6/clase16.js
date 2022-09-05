// Dado los siguientes numeros:

// let num1 = 43;
// let num2 = 78;
// let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.
// let numMayor;
// function mayor(num1, num2, num3) {
//   if (num1 >= num2 && num1 >= num3) {
//     numMayor = num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     numMayor = num2;
//   } else {
//     numMayor = num3;
//   }
//   return numMayor;
// }

// console.log(mayor(num1, num2, num3));

// Ahora bien. dado los siguientes numeros:

// let num1 = 13;
// let num2 = 1663;
// let num3 = 3363;
// let num4 = 5677;
// agrega una variable mas, llamada num4
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.
// let numMayor;
// function mayor(num1, num2, num3, num4) {
//   if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
//     numMayor = num1;
//   } else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
//     numMayor = num2;
//   } else if (num3 >= num1 && num3 >= num4) {
//     numMayor = num3;
//   } else {
//     numMayor = num4;
//   }
//   return numMayor;
// }

// console.log(mayor(num1, num2, num3, num4));

/**
 * Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 */

//  const numeros = [5, 12, 2, 40, 33, 2, 8];
//  function mayor(arr) {
//    let max = 0
//    for (let i = 0; i < arr.length; i++) {
//      if (arr[i] > max) {
//        max = arr[i]
//      }
//    }
//    return max
//  }
//  console.log(mayor(numeros));


/*--------------------------------------------------------------------------------------------------------
CLASE 16 SINCRONICA EJERCICIOS
1-
Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”.*/

// function multiploDe3(i) {
//   return i % 3 == 0 
// }

// function multiploDe5(i) {
//   return i % 5 == 0
// }

// function numDelUnoAlCien (){
//   for (let i = 1; i <= 100; i++) {

//     const multiploDe3Resultado = multiploDe3(i) 
//     const multiploDe5Resultado = multiploDe5(i)

//     if (multiploDe3Resultado && multiploDe5Resultado){
//       console.log("fizzbuzz")
//     } else if(multiploDe3Resultado){
//       console.log("fizz")
//     } else if(multiploDe5Resultado) {
//       console.log("buzz")
//     } else {
//       console.log(i) 
//     } 
//   }
// }

// numDelUnoAlCien()




//----------------------------------------------
// Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
// Visiten este sandbox para escribir su código.


// let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// function indice(arr, ind){
//   console.log(arr[ind])
// }
// indice(array,1)
//-------------------------------------------------------------------------------------------------------------
// Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.

// function numeroDeMes(num){


// }






//-------------------------------------------------------------------------------------------------------------
/**
 * Escribir una función de JavaScript que invierta
 * un número. Por ejemplo, si x = 32443,
 * la salida debería ser 34423.
 */

// function inversa(num){
//   num = `${num}`
//   let numeroInvertido= []
//   for(let i= num.length -1 ; i >= 0 ; i --){
//     numeroInvertido += num[i]

//   }
// return numeroInvertido
// }
// console.log(inversa(1234))
//-----------------------------------------------------------------------------------------------------------

// Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. 
let array = [3, 6, 67, 6,6, 23, 11, 100, 8, 93,43,43,12,55, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function repetido(arr) {
  let duplicados = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicados.push(arr[i])

      }
    }

  }
  return duplicados
}


console.log(repetido(array))
//----------------------------------------------------------------------------------
function mismaEdad(arr){
  let arreglo = []
  for (let i = 0; i < arr.length; i++){
  for (let j = i +1 ; j < arr.length; j++) {
      if( arr[i].edadTitular === arr[j].edadTitular){
          if( arreglo.indexOf(arr[i]) == -1){
              arreglo.push(arr[i])
          }
          if( arreglo.indexOf(arr[j]) == -1){
              arreglo.push(arr[j])
          }
      }
  }
  } 
  return arreglo
}
console.log(mismaEdad(arrayCuentas));

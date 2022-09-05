/**
 * Escribir una función que
 *  reciba un array de elementos
 * e indique si se encuentran ordenados
 *  de menor a mayor o no.
 *
 * La función debe retornar un booleano: true si el array esta ordenado, false, si no.
 */

//  let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
//  let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];

// // Comprueba tu función con los 2 arrays en dos llamadas independientes
//  function ordenadosODesordenados (arr){
//      for(let i=0; i<arr.length;i++){
//          if(arr[i] < arr[i+1]){
//              return true
//          } else{
//              return false 
//          }
//      }


//  }
// // console.log(ordenadosODesordenados(pruebaA))
// console.log(ordenadosODesordenados(pruebaB))

//---------------------------------------------------------------------------------------------------------------
//  Implementar un algoritmo que imprima por consola una pirámide inversa
// de los números del 1 al número que indique el usuario de la siguiente
// forma: (suponiendo que indica 6).


// function piramideInvertida(num) {

//     for (let i = num; i >= 0; i--) {
//         let resultado = ``;

//         for (let j = 1; j <= i; j++) {

//             resultado += `${i}`;
//         }
//         console.log(resultado)
//     }
// }
// piramideInvertida(10)
//----------------------------------------------------------------------------------------------------------------------------------
/**
 * Escribir una función que
 *  reciba un array con nombres,
 *  y para cada nombre imprima el
 *  mensaje:
 *  Estimado (nombre) , vote por mí.
 */

// let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

// function votar(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         console.log(`Estimado ${arr[i]}, vote por mi`)

//     }
// }

// votar(nombres)

//-------------------------------------------------------------------------------------------------------------------------------------
// 4. Teniendo 3 arrays:
// fila1 = [4,9,2]
// fila2 = [3,5,7]
// fila3 = [8,1,6]
// Realiza las siguientes tareas:
// - Crea una matriz con esta forma:
// Luego, a partir de esta matriz, realiza lo siguiente:
// -Imprimir la suma de cada fila,
// -Imprimir la multiplicación de cada columna (es decir, los 3 valores multiplicados entre
// sí) sólo si el resultado es par.
// - Imprimir la suma de ambas diagonales por separado

let matriz = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
]

// console.table(matriz)
// -Imprimir la suma de cada fila,
// function sumatoria(mat) {
//     let suma1 = 0
//     let suma2 = 0
//     let suma3 = 0
//     for (let i = 0; i < mat.length; i++) {
//         suma1 += mat[0][i]
//         suma2 += mat[1][i]
//         suma3 += mat[2][i]
//     }
//     return {
//         suma1,
//         suma2,
//         suma3
//     }
// }
// console.log(sumatoria(matriz))

//------------------------------------------------------------------------------------------------------------------

// -Imprimir la multiplicación de cada columna (es decir, los 3 valores multiplicados entre
//     sí) sólo si el resultado es par.

// function multiplicacion(arrayMatriz) {

//     for (let i = 0; i < arrayMatriz[0].length; i++) {
//         let mult = 1;
//         for (let j = 0; j < arrayMatriz.length; j++) {
//             mult *= arrayMatriz[j][i]
//         }
//         if (mult % 2 === 0) {
//             console.log(mult)


//         }

//     }

// }
// multiplicacion(matriz)


//----------------------------------------------------------------------------------------------------------------
// - Imprimir la suma de ambas diagonales por separado

function sumaDiagonal(arrayMatriz) {
    let sumaDiagonal1 = 0
    let sumaDiagonal2 = 0
    for (let i = 0; i < arrayMatriz.length; i++) {
        for (let j = 0; j < arrayMatriz[i].length; j++) {
            if (i == j) {
                sumaDiagonal1 += arrayMatriz[i][j];
            }

            if (i + j == arrayMatriz.length - 1) {
                sumaDiagonal2 += arrayMatriz[i][j];
            }
        }
    }
    return `la suma de la diag1 es ${sumaDiagonal1} y las suma de las diag2 es ${sumaDiagonal2}`
}
console.log(sumaDiagonal(matriz))


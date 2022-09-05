/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo que recorra e imprima
 *  los valores uno por uno.
 */

// let matriz = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]

// ]
// console.table(matriz);

// for (let filas=0; filas < matriz.length ; filas++){
//     for (let columnas=0; columnas < matriz[filas]; columnas++){
//         console.log(matriz[filas][columnas])
//     }
// }

//--------------------------------------------------------------------------------------


// Dada el siguiente cuadro, armar la matriz de 10x10, la cual deberá quedar así:
let matriz = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]
// a) crear una función que retorne la suma de todos los elementos de la matriz.

// function sumatoriaMatriz(matriz){
// let suma=0;

// for (let filas = 0; filas < matriz.length; filas++) {
//     for (let columnas = 0; columnas < matriz[filas]; columnas++) {
//         suma += matriz[filas][columnas]
//     }
// }
// return suma
// }
// console.log(sumatoriaMatriz(matriz))


//------------------------------------------------------------------------------------
// 3) Por último, vamos a generar dos funciones:
// a) crear una función que nos retorne la sumatoria de la primer y última
// columna (sumar la primera Y ya la última)

// function sumatoriaPrimerYUltimaColumna(matriz) {
//     let sumaPrimerColumna = 0
//     let sumaUltimaColumna = 0
//     for (let fila = 0; fila < matriz.length; fila++) {
//         for (let columna = 0; columna < matriz[fila].length; columna++) {
//             if (fila == 0) {
//                 sumaPrimerColumna += matriz[columna][fila]

//             }
//             if (fila == matriz.length - 1) {
//                 sumaUltimaColumna += matriz[columna][fila]
//             }
//         }
//     }
//     return `la suma de la primer columna es ${sumaPrimerColumna} y las suma de la ultima columna es ${sumaUltimaColumna}`
// }

// console.log(sumatoriaPrimerYUltimaColumna(matriz))

//--------------------------------------------------------------------------------------------------------
// function sumaDiagonal(arrayMatriz) {
//     let sumaDiagonalRoja = 0
//     let sumaDiagonalVerde = 0
//     for (let i = 0; i < arrayMatriz.length; i++) {
//         for (let j = 0; j < arrayMatriz[i].length; j++) {
//             if (i == j) {
//                 sumaDiagonalRoja += arrayMatriz[i][j];
//             }

//             if (i + j == arrayMatriz.length - 1) {
//                 sumaDiagonalVerde += arrayMatriz[i][j];
//             }
//         }
//     }
//     return `la suma de la diag1 es ${sumaDiagonalRoja} y las suma de las diag2 es ${sumaDiagonalVerde}`
// }
// console.log(sumaDiagonal(matriz))
//------------------------------------------------------------------------------------------------------------
// b) crear una función que nos retorne la sumatoria de la quinta y sexta fila (la
//     suma de ambas)
// function sumatoria(arrayMatriz) {
//     let sumaQuintaYSexta = 0
//     for (let fila = 4; fila <= 5; fila++) {
//         for (let columna = 0; columna < arrayMatriz[fila].length; columna++) {
//             sumaQuintaYSexta += arrayMatriz[fila][columna]
//         }
    
//     }
//     return sumaQuintaYSexta
// }
// console.log(sumatoria(matriz))

//---------------------------------------------------------------------------
// let primeraYUltimaColumna = function(array){
//     let sum = 0
//     for(let fila = 0; fila < array.length; fila++){
//         for(let columna = 0; columna < array[0].length; columna++){
//             if(columna === 0 || columna === array.length - 1){
//                 sum += array[fila][columna]
//             }
//         }
//     }
//     return sum
// }

// console.log(primeraYUltimaColumna(matriz))

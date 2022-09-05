// // Ejercicio 1
// // Dado un array con los datos de una encuesta realizada sobre los temas musicales
// // más populares —lo que se tiene en el array son objetos definidos con el nombre de
// // un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
// // temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
// // cada uno.
// // Los votos obtenidos están desordenados.
// // Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
// // a) Resolverlo aplicando búsqueda lineal.
// // b) Resolverlo aplicando búsqueda binaria.

// const temas = [
//     {
//         tema: 'Arrasando',
//         cantidadVotos: 230
//     },
//     {
//         tema: 'Azul',
//         cantidadVotos: 1230
//     },
//     {
//         tema: 'Puesto',
//         cantidadVotos: 2230
//     },
//     {
//         tema: 'She loves you',
//         cantidadVotos: 850
//     },
//     {
//         tema: 'Bienvenito',
//         cantidadVotos: 410
//     }
// ]
// // a) Resolverlo aplicando búsqueda lineal.

// // function busquedaLineal(arr, str){
// //     for(let i=0;i < arr.length;i++){
// //         if (arr[i].tema === str){
// //           return arr[i].cantidadVotos    
// //         }
// //     }

// // }
// // console.log(busquedaLineal(temas,'She loves you'))

// //-------------------------------------------------------------------------------
// // b) Resolverlo aplicando búsqueda binaria.

// // function ordenar(array){
// // for (let i = 0; i < array.length; i++) {
// //     for (let j = 0; j < array.length - 1; j++) {
// //         if (array[j].tema > array[j + 1].tema) {
// //             let temp = array[j];
// //             array[j] = array[j + 1];
// //             array[j + 1] = temp;
// //         }
// //     }
// // }
// // }
// // ordenar(temas)
// // console.log(temas)

// let binarySearch = (array, str) => {
//     let low = 0;
//     let high = array.length - 1;
//     while (low <= high) {
//         const mid = Math.floor((low + high) / 2);
//         const guess = array[mid];
//         if (guess.tema === str) {
//             return guess.nombre;
//         }
//         if (guess.edad > edad) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return null;
// }

// console.log(binarySearch)

// //---------------------------------------------------------------------------------------------------
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// /* Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
// ● ¿Cuál es la posición del número 1?
// ● ¿Cuál es la posición del número 5?
// ● ¿Cuál es la posición del número 6?
// ● ¿Cuál es la posición del número 9?
// ● ¿Cuál es la posición del número 11? */

// function busquedaBinaria(array, num){
//     let low = 0;
//     let high = array.length -1;

//     while(low <= high){
//         const mid = Math.floor((low + high) / 2);
//         const guess = array[mid];
//         if(guess == num){
//             return mid;
//         }
//         if(guess > num){
//             high = mid - 1;
//         }else {
//             low = mid + 1;
//         }
//     }
//     return null;
// }

// console.log(busquedaBinaria(list, 1));
// console.log(busquedaBinaria(list, 5));
// console.log(busquedaBinaria(list, 6));
// console.log(busquedaBinaria(list, 9));
// console.log(busquedaBinaria(list, 11));

// //ejercicio 2


// let list2 = [12,3,5,7,1,22,47,100];

// /* Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, 
// utilizando bubble sort. Luego, respondan las siguientes preguntas:
// ● ¿Cuál es la posición del número 12?
// ● ¿Cuál es la posición del número 5?
// ● ¿Cuál es la posición del número 22?
// ● ¿Cuál es la posición del número 100?*/

// function ordenamiento(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length - 1; j++){
//             if(array[j] > array[j+1]){
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     return array;
// }

// ordenamiento(list2);
// console.log("Ejercicio 2 de la mesa de trabajo")
// console.log(list2);
// console.log(busquedaBinaria(list2, 12));
// console.log(busquedaBinaria(list2, 5));
// console.log(busquedaBinaria(list2, 22));
// console.log(busquedaBinaria(list2, 100));


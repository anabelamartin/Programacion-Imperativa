
// //clase sincronica 23
// 'use strict';
// // Busqueda binaria 

// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// //let binarySearch = (list, item) => {

//   // punto mas bajo
//   let low = 0; // 0

//   // punto mas alto
//   let high = list.length - 1; // 10

//     // mientras que low sea menor o igual que high
//     while (low <= high) { // 6 <= 10 

//         // encontramos la mitad entre low y high
//         const mid = Math.floor((low + high) / 2); // 6 + 10 / 2 = 8

//         // adivinar si el valor es el de la mitad
//         const guess = list[mid]; // list[8] = 9

//          // si es asi, retornar esa posiciona
//         if (guess === item) { // 9 === 9
//             return mid;
//         }

//         // si lo propuesto (guess) es mayor que lo
//         // que estamos buscando
//         if (guess > item) { // 6 > 9
//             //
//             high = mid - 1;
//         } else {
//             low = mid + 1; // redefiniendo low --> 5 + 1 = 6
//         }




      
//     }

//     return null; // si no encontramos nada
    
// };

// // console.log(binarySearch(list, 1100)) // 8
// // binarySearch = 'es un algoritmo de busqueda binaria'

// let list2 = [12,3,5,7,1,22,47,100];


// function ordernarListado(arr){

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length - 1; j++){
//             if( arr[j] > arr[j+ 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

// }

// // ordernarListado(list2);
// // console.log(list2);
// // console.log(binarySearch(list2, 10));


// const obj = {
//     nombre: 'lucas'
// }

// obj.nombre = 'hola';

// // console.log(obj.nombre);

// let a = 4;
// let b = '4';
// let c = a + b;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof obj);
//-----------------------------------------------------------------------------------------------------------------------------------------
//PRACTICA CLASE 23 
// nos devuelve la posicion de este elemento dentro del objeto 
// busqueda lineal

// 1. Dada la siguiente colección:

let personas = [
    {
        id: 1,
        nombre: "Ale",
        edad: 15
    },
    {
        id: 2,
        nombre: "Javi",
        edad: 83
    },
    {
        id: 3,
        nombre: "Luis",
        edad: 26
    },
    {
        id: 4,
        nombre: "Dan",
        edad: 16
    },
    {
        id: 5,
        nombre: "Tito",
        edad: 22
    },
    {
        id: 6,
        nombre: "Marina",
        edad: 76
    },
    {
        id: 7,
        nombre: "Susy",
        edad: 35
    },
    {
        id: 8,
        nombre: "John",
        edad: 25
    },
]
// Realizar lo siguiente:
// - Ordenar la colección de menor a mayor utilizando bubble sort

// for (let i = 0; i < personas.length; i++) {
//     for (let j = 0; j < personas.length - 1; j++) {
//         if (personas[j].edad > personas[j + 1].edad) {
//             let temp = personas[j];
//             personas[j] = personas[j + 1];
//             personas[j + 1] = temp;
//         }
//     }
// }
// console.log(personas)

//----------------------------------------------------------------------------------
// - Crear una función que te permita imprimir por consola el nombre correspondiente a
// la siguientes edades:
// - 25
// - 76
// - 16
// - 15
// Para buscar a las personas, utilizar el algoritmo de búsqueda binaria.
// Tip: Así como ordenaste una colección con Bubblesort, fijándote en una propiedad
// numérica, podrás aplicar el algoritmo de búsqueda binaria de la misma manera. Solo
// tendrás que identificar cuál es la propiedad numérica que te interesa para la búsqueda


let binarySearch = (array, edad) => {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = array[mid];
        if (guess.edad === edad) {
            return guess.nombre;
        }
        if (guess.edad > edad) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

console.log(binarySearch(personas, 25));
console.log(binarySearch(personas, 76));
console.log(binarySearch(personas, 16));
console.log(binarySearch(personas, 15));


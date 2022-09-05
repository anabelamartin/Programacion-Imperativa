// Crear una función que imprima todos los dígitos decimales, del 0 al 9,
// usando un ciclo For.

/**
 * Crear una función que imprima todos
 * los dígitos decimales, del 0 al 9,
//  * usando un ciclo For.
//  */

function decimales() {
    let contador = 0
    for (let i = 0; i <= 9; i++) {
        for (let j=0; j<=9; j ++ ){
        console.log(i + "." + j )
        
        }

    }
}
 decimales()

//------------------------------------------------------------------------------------------------------------------
// 2- Crear una función que imprima los números entre el 5 y el 20, saltando de
// tres en tres.

// function saltar(){
//     for(let i=5; i <=20;i += 3){
//         console.log(i)
//     }
// }

// saltar();
//-----------------------------------------------------------------------------------------
//  3 crear una función que imprima la sumatoria de todos los números entre el
// 0 y el 100.

// function sumatoria(){
//     let sumar= 0
//     for(let i=0; i <=100; i++){
//         sumar += i 


//     }
//    return sumar


// }

// console.log(sumatoria())
//----------------------------------------------------------------------------------------------------
// 4 Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.

// function vocales(string){
//     let suma = 0
//     for(let i=0; i< string.length;i++){
//         if ( string[i] == "a" || string[i]== "e" || string[i] == "i" || string[i]== "o" || string[i]=="u"){
//             suma += 1
//         }
//     }
// return suma
// }
// console.log(vocales("agustin"))

//----------------------------------------------------------------------------------------------------------
//5  Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.
// let lista = [23, 45, 6, 7, 8, 67, 89, 987, 654, 322, 45];

// function invertida(arr) {
//     let newArray = []
//     for (let i= arr.length-1 ; i >= 0 ; i --) {
//         newArray.push(arr[i])

//     }
//     return newArray

// }
// console.log(invertida(lista))

// for (let i=0; i < arr.length; i ++ )
// for (let i >= 0 ; i = arr.length-1; i --)
//---------------------------------------------------------------------------------------------------------------
// 6 Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma

//     function piramide(){

//     for(let i=1; i<=30;i++){
//         let resultado= ``; 

//         for(let j=1; j<= i; j ++){

//             resultado += `${i}`;

    
      
//         }
//         console.log(resultado)
//     }
// }
// piramide()


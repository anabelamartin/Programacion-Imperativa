// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop 
// de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración 
// sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.

function loopDePares(num) {
    let suma = 0
    for (let i = 0; i <= 100; i++) {
        suma = i + num

        if (suma % 2 == 0) {

         console.log(`el numero ${suma} es par`)
        } else( console.log(i)

        )

    }

}
loopDePares(2)

// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, 
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código
//  para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre 
//  en la consola la palabra pasada por parámetro.

// function loopDeImpares(num,string){
//     let suma = 0
//     for(let i=0; i <= 100; i++){
//         suma = i+num 
//             if(suma %2!==0){
//                 console.log(string)
//             } else (
//                 console.log(i)
//             )

//     }
// }
// console.log(loopDeImpares(2,"hola"))

// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva 
// la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36

// function sumatoria(num){
//     let suma= 0
//     for(let i=0; i <= num ; i++){
//         suma += i 
//     }
//     return suma
// }
// console.log(sumatoria(12))

// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y
// que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. 
// Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

// function nuevoArreglo(num){
//     let newArr= []
//     for(let i=1; i<= num; i++){
//         newArr.push(i)
//     }
//     return newArr
// }
// console.log(nuevoArreglo(5))

// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento 
// de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. 
// Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

// function split(string){
//     let newArr=[]
//     for (let i= 0 ; i<string.length; i++){
//         newArr.push(string[i])
//     }
//     return newArr
// }
// console.log(split("hola"))

// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros 
// y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a
// let array1 = [1, 2, 3, 4]
// let array2 = [“h”,”o”,”l”,”a”]
// function arrayHandler(arr1,arr2) {
//     for (let i = 0; i < arr1.length && arr2.length; i++) {
//         console.log(`soy ${arr1[i]} y yo soy ${arr2[i]}`)
//     }
// }

// console.log(arrayHandler(array1, array2))





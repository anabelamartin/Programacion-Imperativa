// Ejercicio 1: 
// Que reciba por parámetro un número entero y retorne su doble.
// function doble(num) {
//     return num * 2
// }
//--------------------------------------------------------------------------------------------------
// Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.
// function multiplicación(num1, num2) {
//     return num1 * num2
// }
//----------------------------------------------------------------------------------------------------
// Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.
// function division(num1, num2){
//     if(num1 !== 0 && num2 !== 0){
//         return num1/num2
//     }
// }
// console.log(division(6,2))
//-----------------------------------------------------------------------------------------------------------------------
// Ejercicio 3:
// Crear un array VACÍO llamado competidores. 

// Dados estos tres objetos

let competidor1 = {
    nombre: 'Juan',
    edad: 42,
    kilometrosRecorridos: 80,
    bici: true,
}
let competidor2 = {
    nombre: 'Sofia',
    edad: 22,
    kilometrosRecorridos: 90,
    bici:false,
}
let competidor3 = {
    nombre: 'Maria',
    edad: 45,
    kilometrosRecorridos: 70,
    bici:true,
}

// a.Agregarlos al array. (utilizando un método JS, pensa cual podrías utilizar)
let competidores = [];
competidores.push(competidor1, competidor2, competidor3)
//-------------------------------------------------------------------------------------------------------
// b.Mostrar por consola el array para ver que contenga esos objetos.
console.log(competidores)
//----------------------------------------------------------------------------------------------------------
// 3.Crea una función que reciba el array competidores como parámetro, e incremente en 100 la cantidad de 
// kilómetros recorridos de cada uno de los competidores, llámala competencia100Km.
// function competencia100Km(arr){
//     for(i=0; i < arr.length; i++){
//         arr[i].kilometrosRecorridos += 100
//     }
// }
// competencia100Km(competidores)
// console.log(competidores)
// Debes utilizar alguna estructura de repetición vista en la materia.

// 4.Mostrar por consola el array de competidores antes y después de la ejecución de la función.
// console.log(competidores)
//--------------------------------------------------------------------------------------------------------------
// Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones : 
// si edad es mayor o igual a 18 y tiene bici  “puede competir”
// si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
// si no tiene bici “No podrá competir ” 
// Deberás realizar la invocación de la función de forma que se pueda ver el resultado
function edades(obj){
    if(obj.edad >= 18 && obj.bici == true){
        return "puede competir"
    } if(obj.edad < 18 && obj.bici== true){
        return "podra competir pero con un adulto acompañante"
    } else{
        return "no podra competir"
    }
}

console.log(edades(competidor2))
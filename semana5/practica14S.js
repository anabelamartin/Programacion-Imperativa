// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

 // Obtener en un nuevo array las edades menores a 18.
function edadesMenoresA18(arr){
    let newArray = []
    for (let i=0; i < arr.length; i ++){
        if (arr[i] < 18)
        newArray.push(arr[i])
    }
    return newArray
}
console.log(edadesMenoresA18(edades))

// Obtener en un nuevo array las edades mayor o igual a 18.

function edadesMayoresA18(arr){
    let newArray = []
    for (let i=0; i < arr.length; i ++){
        if (arr[i] > 18)
        newArray.push(arr[i])
    }
    return newArray
}
console.log(edadesMayoresA18(edades))

// Obtener en un nuevo array las edades igual a 18.

function edadesIgualA18(arr){
    let newArray = []
    for (let i=0; i < arr.length; i ++){
        if (arr[i] === 18)
        newArray.push(arr[i])
    }
    return newArray
}
console.log(edadesIgualA18(edades))

// Obtener el menor.

function menor(arr){
    let min= Infinity
    for( let i=0; i < arr.length; i++){
        if ( arr[i] < min ){
            min = arr[i]
        }
    }
    return min 
}
console.log(menor(edades));

// ------------------------------------------------------------------------------------
// Obtener el mayor.

function mayor(arr){
    let max = 0
    for( let i=0; i < arr.length; i++){
        if ( arr[i] > max ){
            max = arr[i]
        }
    }
    return max
}
console.log(mayor(edades));
//--------------------------------------------------------------------------------
// Obtener el promedio de edades.
function promedio(arr){
    let acc = 0
    for(let i=0; i < arr.length; i++){
       acc += arr[i]
    }
    return acc/ arr.length
}
console.log(promedio(edades))
//------------------------------------------------------------------------------------------
// Incrementar en 1 todas las edades.

function incrementarEn1TodasLasEdades(arr){
    let newArray= []
    for(let i=0; i < arr.length; i++){
        newArray.push(arr[i] + 1)
    }
    return newArray

   
}
console.log(incrementarEn1TodasLasEdades(edades))

//-------------------------------------------------------------------------------------------------------------------
// OTRAS MANERAS DE RESOLVERLO EN UNA SOLA LINEA DE CODIGO 

// const arregloDeObjetos = edades.map((each, index) => {
//     return { edades: each,  index}
// })

// arregloDeObjetos.forEach(each => {
//     console.log(each.edades + each.index)
// })

// console.log(edades.map(each => each + 1))

// console.log(edades.reduce((acc, current) => current + acc) / edades.length)

//let newArray = edades.filter(each => each > 18)

//-----------------------------------------------------------------------------------------

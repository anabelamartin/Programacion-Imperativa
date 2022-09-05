
// Primero vamos a crear una matriz de 2x2 con Js.

let arrayMatriz = []
let arrayX=["x0","x1"]
let arrayY=["y0","y1"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY

// ¿Cómo accedo al valor almacenado en 1-1?
console.table(arrayMatriz[1][1])

// ¿Cómo puedo cambiar el valor almacenado en 1-0?





let matriz = [
    [1, 2],
    [3, 4]
]
console.table(matriz)

console.log(matriz[0][1])

console.log(matriz[1][1])


let arrayMatriz = []

let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]

// arrayMatriz[0] = arrayX
// arrayMatriz[1] = arrayY

arrayMatriz.push(arrayX, arrayY)

console.table(arrayMatriz)


console.log(arrayMatriz.length)

// imprimiendo  valores de la columna 0
for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i][0])
}
arrayMatriz[0][0]
arrayMatriz[1][0]


// imprimienddo valores de la fila 1

for(let i=0; i < arrayMatriz.length; i++){
    console.log(arrayMatriz[1][i])
}


//-------------------------------------------------------------

//Bucle que recorre el primer array
for(let i=0; i<arrayMatriz.length; i++) {

    //Bucle que recorre el array que está en la posición i

    for(let j=0; j < arrayMatriz[i].length; j++) {
        console.log(arrayMatriz[i][j]);
    }
}

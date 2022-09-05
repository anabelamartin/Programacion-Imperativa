

// let matriz = [
//     [10, 15, 20, 25, 26, 28, 59],
//     [20, 58, 94, 65, 12, 34, 56],
//     [13, 56, 78, 90, 54, 67, 34],
//     [34, 56, 78, 90, 98, 76, 56]
// ];

// console.table(matriz);

// function totalSemana(arr) {
//     let totalSemana2 = 0;
//     for (let i = 0; i < arr[1].length; i++) {
//         totalSemana2 += arr[1][i];
//     }
//     return totalSemana2
// }
// console.log(totalSemana(matriz))

// //----------------------------------
// otra forma seria 
// function totalSemana(arr, semana){
//     let totalSemana=0;
//     for(let i=0; i < arr[semana - 1].length; i++){
//         totalSemana2 += arr[semana - 1 ][i];
//     }
//     return totalSemana
// }
// console.log(totalSemana(matriz, 2))

// a aplicación también tendrá una parte de estadísticas,
//para esto nos solicitan dar el total de un día en particular,
//por ejemplo del día 3, acá también tengamos en cuenta lo
//que ocurre con las filas, ya que las columnas también
//comienzan en 0

// function totalDia(arr) {
//     let totalDia = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalDia += arr[i][0];
//     }
//     return totalDia
// }
// console.log(totalDia(matriz))


// function totalDia(arr,dia) {
//     let totalDia = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalDia += arr[i][dia-1];
//     }
//     return totalDia
// }
// console.log(totalDia(matriz,2))

// Por último, es necesario tener el total de gastos 
// realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por
//  filas o por columnas para resolver este último punto?

// function totalMes(arr){
//     let total= 0;
//     for (let i=0; i< arr.length; i++){
//         for(let j=0; j < arr[i].length; j++){
//             total += arr [i][j]
//         }
//     }
//     return total;
// }
// console.log(totalMes(matriz))


// let numeros = [
// 	[10, 3, 2, 1, 4, 7],
// 	[5, 5, 10, 100, 4],
// 	[5, 125, 10, 1020, 4],
// 	[5, 5, 5097, 100, 4]
// ];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

// function sumatoria(matriz){
//     let total=0;
//    for(let i=0; i < matriz.length; i++){
//     for(let j=0; j < matriz[i].length; j++){
//         if(matriz[i][j] >= 10 && matriz[i][j]< 1000){
//             total += matriz[i][j]
//         }
//     }   
//    }
//    return total
// }
// console.log(sumatoria(numeros))


//---------------------------------------------------------
// ejercicio extra
// d) Obtener cuál fue la semana que más gastos se realizaron. 
//     // Indicar el día que más gastos se realizaron.
let matriz = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
    ];

    function gastosSemana(){
        let array=[]
        for(let fila=0; fila<matriz.length;fila++){
            let contador=0
            for(let columna =0; columna<matriz[fila].length;columna++){
                contador+= matriz[fila][columna]
            }
            array.push(contador)
        }
        return array
    }
    console.log(gastosSemana())


    let gastosTotalesPorSemana = gastosSemana();
function gastoMayor(){
    let mayor = gastosTotalesPorSemana[0]
    for (let i = 0; i < gastosTotalesPorSemana.length; i++) {
        if( mayor < gastosTotalesPorSemana[i]){
            mayor = gastosTotalesPorSemana[i]
        }
        
        
    }
    return gastosTotalesPorSemana.indexOf(mayor) + 1;
}

console.log(gastoMayor());

const arrayCuentas =
  [
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]
//-------------------------------------------------------------------------------------------------
// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

// function edadesMenoresA30(arr) {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].edadTitular < 30){
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
// console.log(edadesMenoresA30(arrayCuentas))
//------------------------------------------------------------------------------------------------------------
// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// function edadesMayoresIgualesA30(arr) {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].edadTitular > 30){
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
// console.log(edadesMayoresIgualesA30(arrayCuentas))
//----------------------------------------------------------------------------------------------------------
// Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
// function edadesIgualesA30(arr) {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].edadTitular === 30){
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
// console.log(edadesIgualesA30(arrayCuentas))
//--------------------------------------------------------------------------------------------------------------------
// Obtener la cuenta con el titular de la misma más joven.
// function titularMasJoven(arr) {
//   let objeto = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].edadTitular < objeto.edadTitular){
//       objeto=arr[i]
//     }
    
//   }
//   return objeto
// }
// console.log(titularMasJoven(arrayCuentas))
//------------------------------------------------------------------------------------------------
// Obtener un nuevo array por cada tipo de cuenta
// function tipoDeCuenta(arr, prop){
//   let newArray=[]
//   for(let i=0; i < arr.length; i++) {
//     if(arr[i].tipoCuenta === prop){
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
// console.log(tipoDeCuenta(arrayCuentas, "corriente"))
//--------------------------------------------------------------------------------
// Obtener un nuevo array con las cuentas habilitadas.
// function cuentasHabilitadas(arr){
//   let newArray= []
//   for (let i=0; i < arr.length; i++){
//     if (arr[i].estaHabilitada === true){
//       newArray.push(arr[i])
//     }
//   }
//   return newArray

// }
// console.log(cuentasHabilitadas(arrayCuentas))
//---------------------------------------------------------------------------------------------
// Obtener un nuevo array con las cuentas deshabilitadas.
// function cuentasDeshabilitadas(arr){
//   let newArray= []
//   for (let i=0; i < arr.length; i++){
//     if (arr[i].estaHabilitada === false){
//       newArray.push(arr[i])
//     }
//   }
//   return newArray

// }
// console.log(cuentasDeshabilitadas(arrayCuentas))
//--------------------------------------------------------------------------------------------
// Obtener la cuenta con el menor saldo.
// function menorSaldo(arr) {
//   let cuenta = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].saldo < cuenta.saldo){
//       cuenta=arr[i]
//     }
    
//   }
//   return cuenta
// }
// console.log(menorSaldo(arrayCuentas))
//---------------------------------------------------------------------------------------------------
// Obtener la cuenta con el mayor saldo.
// function mayorSaldo(arr) {
//   let cuenta = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].saldo > cuenta.saldo){
//       cuenta=arr[i]
//     }
    
//   }
//   return cuenta
// }
// console.log(mayorSaldo(arrayCuentas))
//--------------------------------------------------------------------------------------------

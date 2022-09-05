// // function puedesubir(altura, acompaniado) {
// //     if (altura >= 1.4 && altura < 2) {
// //         return true; "Estoy en el primer IF"
// //     } else if (altura < 1.4 && altura >= 1.2 && acompaniado) {
// //         return true; "Estoy en el segundo IF"
// //     } else {
// //         return false;

// //     }
// // }

// // console.log(puedesubir(1.5, true))

// // if (edad >= 18) {
// //     console.log("Puede pasar")
// // } else {
// //     console.log("No puede pasar")
// // }


let edad = 25

if (edad < 18) {
    console.log("No puede pasar al bar.")

} else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}

else if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.")

} else if (edad == 21) {
    console.log("bienvenido, felicitaciones por haber llegado a la mayoria de edad")

} else if (edad % 2 != 0) {
    console.log("¿Sabías que tu edad es impar?")

}
else {
    console.log("Puede pasar al bar y tomar alcohol.")

}

// #TOTAL A PAGAR
// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar

let precio;

function totalAPagar(vehiculo, litrosConsumidos) {

    if (vehiculo = "coche") {
        precio = litrosConsumidos * 86
    } else if (vehiculo = "moto") {
        precio = litrosConsumidos * 70
    } else if (vehiculo = "autobus") {
        precio = litrosConsumidos * 55
    } 
 if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
        precio = precio + 50
    } else if (litrosConsumidos >= 25) {
        precio = precio + 25
    }
    return precio
}
console.log(totalAPagar("coche", 30))

// ## Local de sándwiches

 
function sandwich( base , pan, queso, tomate , lechuga, cebolla, mayonesa, mostaza){
    let precio = 0
    if (base=="pollo"){
        precio += 150
    } else if ( base == "carne"){
        precio += 200
    } else if (base == "vegetariano"){
        precio += 100
    } 
    if (pan=="blanco"){
        precio += 50
    } else if ( pan =="negro"){
        precio += 60
    } else if (pan =="s/gluten"){
        precio += 75
    }

    queso && (precio+=20)
    tomate && (precio +=15)
    lechuga && (precio+= 10)
    cebolla && (precio += 15)
    mayonesa && (precio += 5)
    mostaza && (precio +=5)

    return precio 
}

console.log(sandwich("vegetariano", "negro", true, false, true, true,true, false))
const prompt = require("prompt-sync")({ sigint: true });



let destino = prompt ("ingrese su destino: ")
let cantEquipaje = prompt ("ingrese cantidad de equipaje: ")
let fecha = prompt ("ingrese fecha de viaje: ")
let hora = "20:00"
let temp = 21
let trafico = false
let terminal = 2
let numVuelo = "AR1821"
let puerta = 16
let asiento = "12A"


console.log(`el destino elegido es ${destino}, lleva ${cantEquipaje} valijas, su fecha de vuelo es ${fecha} .`)
console.log(`su vuelo saldra a las ${hora} horas, su numero de vuelo es ${numVuelo}, desde la terminal ${terminal}, puerta ${puerta}, su numero de asiento es ${asiento}.`
)
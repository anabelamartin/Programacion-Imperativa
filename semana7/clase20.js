//PRACTICA PLAYGROUND

// let personas = [
// 	{
// 		nombre: "Dua",
// 		apellido: "Lipa",
// 		ocupacion: "cantante",
// 		estatura: 173
// 	},
// 	{
// 		nombre: "Ariana",
// 		apellido: "Grande",
// 		ocupacion: "cantante",
// 		estatura: 160
// 	},
// 	{
// 		nombre: "Taylor",
// 		apellido: "Swift",
// 		ocupacion: "cantante",
// 		estatura: 180
// 	}
// ];
// for (let i = 0; i < personas.length; i++) {
// 	console.log(personas[i].estatura)
// }


//CLASE 

// function ordenar(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j].estatura > arr[j + 1].estatura) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr
// }

// //console.log(ordenar(personas))

// console.log(personas)
// ordenar(personas)
// console.log(personas);


//---------------------------------------------------------------
//PRACTICA 

// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

// let fotografias = [
// 	{
// 		nombre: "Pedro",
// 		likes: 3456
// 	},
// 	{
// 		nombre: "maria",
// 		likes: 6768
// 	},
// 	{
// 		nombre: "juana",
// 		likes: 9876
// 	},

// 	{
// 		nombre: "julia",
// 		likes: 6069
// 	},
// 	{
// 		nombre: "micaela",
// 		likes: 7869
// 	},
// 	{
// 		nombre: "juan",
// 		likes: 3485
// 	},
// 	{
// 		nombre: "ricardo",
// 		likes: 6798
// 	},
// 	{
// 		nombre: "agustin",
// 		likes: 6054
// 	},
// 	{
// 		nombre: "paul",
// 		likes: 3521
// 	},
// 	{
// 		nombre: "lorenzo",
// 		likes: 4545
// 	},
// 	{
// 		nombre: "emiliano",
// 		likes: 7869
// 	},
// 	{
// 		nombre: "sol",
// 		likes: 5433
// 	},
// 	{
// 		nombre: "roberto",
// 		likes: 6778
// 	},
// 	{
// 		nombre: "rafaela",
// 		likes: 9877
// 	},
// 	{
// 		nombre: "emiliano",
// 		likes: 4332
// 	}
// ];

// // ordenar  los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos
// // cuanto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo
// function fotoLikes( arr ) {

// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length -1 ; j++) {
// 			if (arr[j].likes < arr[j + 1].likes) {
// 				let temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 			}
// 		}
// 	}
// 	return { mayorCantidaDeLikes: arr [0],
// 		segundoPuesto:arr [1],
// 		tercerPuesto: arr [2],
// 		ultimoPuesto:arr [arr.length -1 ]

// 	}
// }
// console.log(fotoLikes(fotografias));





//---------------------------------------------------------------------------------------------------------------
// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let temperaturas = [
	{dia: 1,
	 mes: 1,
	temperaturaMaxima: 34,
	temperaturaMinima: 25
	},
	{
	dia: 2,
	mes:1,
    temperaturaMaxima: 35,
	temperaturaMinima: 21
	},
	{
	dia: 3, 
	mes: 1,
	temperaturaMaxima: 36,
	temperaturaMinima: 23
	},
	{
	dia: 4,
	mes:1,
    temperaturaMaxima:33,
	temperaturaMinima: 20
	},
	{
    dia:5,
	mes: 1,
    temperaturaMaxima: 39,
	temperaturaMinima: 28
	},
	{
	dia:6,
	mes: 1,
	temperaturaMaxima:32,
	temperaturaMinima:22
	},
	{
	dia:7,
	mes:1,
	temperaturaMaxima: 37,
	temperaturaMinima: 19
	},
	{
	dia:8,
	mes: 1,
	temperaturaMaxima: 28,
	temperaturaMinima: 17
	},
	{
	dia: 9,
	mes: 1,
    temperaturaMaxima: 26,
    temperaturaMinima: 16
	},
	{
	dia: 10,
	mes: 1,
	temperaturaMaxima: 31,
	temperaturaMinima: 23
	}

]

// a) Ordenar por temperatura mínima de menor a mayor.

// function minimaAMayor(arr){
// 	for (let i = 0; i < arr.length; i++) {
// 				for (let j = 0; j < arr.length -1 ; j++) {
// 					if (arr[j].temperaturaMinima > arr[j + 1].temperaturaMinima) {
// 						let temp = arr[j];
// 						arr[j] = arr[j + 1];
// 						arr[j + 1] = temp;
// 					}
// 				}

// }
// }

// minimaAMayor(temperaturas)
// console.log(temperaturas)

//llamar a la funcion con el array y despues hacer el console.log con el array , para no hacer un return dentro de la funcion.
//----------------------------------------------------------------------------------------------------------------------------------

// b) Ordenar por temperatura máxima de mayor a menor.
function maximaAMayor(arr){
	for (let i = 0; i < arr.length; i++) {
				for (let j = 0; j < arr.length -1 ; j++) {
					if (arr[j].temperaturaMaxima < arr[j + 1].temperaturaMaxima) {
						let temp = arr[j];
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}

}
}

maximaAMayor(temperaturas)
console.log(temperaturas)


//-------------------------
//PALINDROMOOOOOOO
// function palindromo(str) {
//     let value = false
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[str.length - i - 1]) {
//             value = true
//         } else {
//             value = false
//             return value
//         }
//     }
//     return value
// }

// // console.log(palindromo("ana"))

//------------------------------------------------------------------------------------------
//funcion que retorna objetos con la misma edad 
// function obje() {
//     for (let i = 0; i < obj.length; i++) {
//         for (let j = i + 1; j < obj.length; j++) {
//             if (obj[i].edad === obj[j].edad) {
//                 console.log(obj[i]);
//                 console.log(obj[j]);
//             }
//         }
//     }
// }
// // obje()

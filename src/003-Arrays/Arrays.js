/*Escribe una funcion que acepta un numero indeterminado de arrays de numeros,suma el valor 
de esos numeros y lo deja como unico valor del array, si la suma en todos los arrays es 0,
la funcion devolvera un 0

Por ejemplo si en la funcion entran dos arrays [1,2,3] y [2,6,2] saldran dos arrays [6] y [10]
Por ejemplo si en la funcion entran dos arrays [0] y [1,-1] saldran un numero 0*/
function sumOfArrays() {}

/*Escribe una funcion que acepte un array como parametro y devuelva el tipo mayoritario en el array
  Si no hay tipo mayoritario debe devolver undenfined
  Por ejemplo [1,"asdfg",2] debe devolver "number"
  Por ejemplo ["asdfg","asdfg",2] debe devolver "string"
  Por ejemplo ["true","asdfg",false] debe devolver "boolean"
  Por ejemplo ["true","asdfg",false,"asdfg"] debe devolver undefined
*/
function typeOfArray() {}

/*Escribe una funcion que acepte un numero indeterminado de arrays y los junte todos en un mismo array
Por ejemplo si en la funcion entran dos arrays [1,2,3] y [2,6,2] saldra un array [1,2,3,2,6,2]
*/

function concatOfArrays() {}

module.exports = {
  sumOfArrays,
  typeOfArray,
  concatOfArrays,
};

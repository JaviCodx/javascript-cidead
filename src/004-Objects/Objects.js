/*Escribe una funcion que dada un Objeto persona, devuelva ese mismo objeto con la propiedad phone y un numero inventado con prefijo +34
Si ya tiene la propiedad phone, le añadira un +34 delante si no tiene prefijo
Por ejemplo para un objeto {name: "Paco"} devolvera {name: "Paco", phone: "+34 1234456"}
Por ejemplo para un objeto {name: "Pepe", phone: "1234456"} devolvera {name: "Paco", phone: "+34 1234456"}
Por ejemplo para un objeto {name: "Antonio", phone: "+34 1234456"} devolvera {name: "Antonio", phone: "+34 1234456"}*/
function addPhone() {}

/*Escribe una funcion que dado un array con arrays de clave-valor devuelva un objeto con todas esas combinaciones clave-valor
Por ejemplo para un arrray [["name","Paco"],["phone","+34 1234456"]] devolvera {name: "Paco", phone : "+34 1234456"}
Por ejemplo para un arrray [["name","Pepe"],["phone","+34 1234456"],["age",50]] devolvera {name: "Pepe", phone:"+34 1234456", age:50}*/

function addToObject() {}

module.exports = { addPhone, addToObject };

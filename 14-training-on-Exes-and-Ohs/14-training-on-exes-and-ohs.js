function XO(str) {
    // Creo dos arrays vacios donde voy a contener las X y las O
    let arrayX = []
    let arrayO = []
    // Creo un array a partir del string que me pasen
    let array = str.split("")

    // Creo un bucle for donde voy a comprobar si es una X, la pusheo al array de las X y si es una O al array de las O
    for (let i = 0; i < array.length; i++){
        if (array[i] == "x" || array[i] == "X"){
            arrayX.push("x")
        } else if (array[i] == "o" || array[i] == "O") {
            arrayO.push("o")
        }
    }
    // Retorno un booleano a partir de una comparacion
    return arrayX.length === arrayO.length
}

const XO = str => {
    // el string que recibo lo paso a minuscula y creo un array en base a eso
    str = str.toLowerCase().split('');
    // Devuelvo la longitud del filtro cuando los elementos sean igual a "x" comparada a la longitud de los elementos cuando sean igual a "o"
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
    // Devuelvo directamente la longitud del arreglo cuando los elementos sean "x" en minuscula comparada con los elementos que sean "o"
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
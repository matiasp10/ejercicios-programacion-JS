// Ingles

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Español

// Completa la función que toma un entero no negativo n como entrada, y devuelve una lista de todas las potencias de 2 con el exponente que va de 0 a n ( inclusive ).

// Examples - Ejemplos
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// Mi solucion

function powersOfTwo(n){
    // almaceno en una variable un arreglo vacio para luego ir agregando los resultados 
    let arr = [];
    // Itero en un bucle for por la cantidad de veces que necesito (en este caso n)
    for (let i = 0; i <= n; i++) {
        // Voy agregando el resultado de la potencia de 2 con el exponente i
      arr.push(Math.pow(2, i));
    }
    // Devuelvo el arreglo
    return arr;
  }
// Ingles
/* 
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

// Espaniol

/*

Como parte de esta Kata, necesitas crear una función que cuando se le proporcione un triplete, devuelva el índice del elemento numérico que se encuentra entre los otros dos elementos.

La entrada de la función será un array de tres números distintos.

Por ejemplo:

gimme([2, 3, 1]) => 0
2 es el número que cabe entre 1 y 3 y el índice de 2 en el array de entrada es 0.

Otro ejemplo (para que quede claro)

gimme([5, 10, 14]) => 1
10 es el número que encaja entre 5 y 14 y el índice de 10 en la matriz de entrada es 1.

*/

function gimme(triplet) {
    // con los condicionales verifico quien esta en el medio
    if (
      (triplet[0] < triplet[1] && triplet[0] > triplet[2]) ||
      (triplet[0] < triplet[2] && triplet[0] > triplet[1])
    ) {
      return triplet.indexOf(triplet[0]);
    } else if (
      (triplet[1] < triplet[0] && triplet[1] > triplet[2]) ||
      (triplet[1] < triplet[2] && triplet[1] > triplet[0])
    ) {
      return triplet.indexOf(triplet[1]);
    } else {
      return triplet.indexOf(triplet[2]);
    }
  }
// English

// Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.

// Español

// Escribe una función que calcule la media de los números de una lista dada.

// Nota: Las matrices vacías deben devolver 0.

function find_average(array) {
    let count = 0;
     if (array.length > 0) {
       for (let i = 0; i < array.length; i++) {
         count += array[i];
       }
       return count / array.length;
     } else {
       return 0;
     }
}
// Ingles

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Español

// Crea una función que tome un entero como argumento y devuelva "Par" para los números pares o "Impar" para los impares.

function even_or_odd(number) {
    if(number % 2 == 0){
      return "Even"
    } else {
      return "Odd"
    }
}

// Otra solucion

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}
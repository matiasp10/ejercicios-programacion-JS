// INGLES

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

// Español

// Llevas a tu hijo al bosque a ver los monos. Sabes que hay un número determinado (n), pero tu hijo es demasiado joven para apreciar el número completo, tiene que empezar a contarlos desde el 1.

// Como buen padre, se sentará a contar con él. Dado el número (n), rellena una matriz con todos los números hasta ese número, pero excluyendo el cero.

// Por ejemplo:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

// LINKS

// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

function monkeyCount(n) {
    // Creo un array vacio donde colocare los monos
    let monkeys = []
    // Simple bucle for con la cantidad de iteraciones igual al numero de monos especificados y los voy colocando dentro del array
    for (let i = 1; i <= n; i++) {
        monkeys.push(i)
    }
    // Devuelvo el array lleno de monos
    return monkeys
}
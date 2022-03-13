// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Dado un número aleatorio no negativo, hay que devolver los dígitos de este número dentro de una matriz en orden inverso.

// Example:
// 348597 => [7,9,5,8,4,3]

// Mi solucion:

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((a) => parseInt(a));
}

// Otras soluciones:

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}
function digitize(n) {
  return (n + '').split('').map(Number).reverse();
}
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

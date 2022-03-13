// Write a function called repeatStr which repeats the given string string exactly n times.

// Escribe una función llamada repeatStr que repita la cadena dada exactamente n veces.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Mi solucion:

function repeatStr(n, s) {
  return s.repeat(n);
}

// Otras soluciones:

repeatStr = (n, s) => s.repeat(n);

function repeatStr(n, s) {
  var str = '';
  for (var i = 0; i < n; i++) str += s;
  return str;
}

// Write a function called repeatStr which repeats the given string string exactly n times.

// Escribe una función llamada repeatStr que repita la cadena dada exactamente n veces.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Mi solucion:

function repeatStr(n, s) {
  // usando el metodo repeat()
  return s.repeat(n);
}

// Otras soluciones:

// Funcion flecha
repeatStr = (n, s) => s.repeat(n);


function repeatStr(n, s) {
  // Almaceno una variable con un string vacio
  let str = '';
  // En un bucle for con n iteraciones agrego la misma palabra al string vacio
  for (let i = 0; i < n; i++) {
    str += s
  };
  // Devuelvo el string repetido n veces
  return str;
}

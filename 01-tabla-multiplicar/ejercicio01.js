// Dado un numero devolver su tabla de multiplicar completa. Por ejemplo:
// Input: 5
// Output:
// Tabla del 5
// 5 x 1 = 5
// 5 x 2 = 10
// (...)

function tablaMultiplicar(n) {
  console.log(`Tabla del ${n}`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

tablaMultiplicar(5);

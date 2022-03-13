/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Complete la función que acepta un parámetro de cadena y que invierte cada palabra de la cadena. Todos los espacios de la cadena deben ser conservados.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  let arreglo1 = str.split(' ');
  let final = [];
  for (let i = 0; i < arreglo1.length; i++) {
    let elemento = arreglo1[i].split('').reverse().join('');
    final.push(elemento);
  }
  return final.join(' ');
}

// Otras soluciones
function reverseWords(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

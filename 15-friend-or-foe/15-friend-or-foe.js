 /* Haz un programa que filtre una lista de strings y devuelva una lista con sólo el nombre de tus amigos, cuya longitud debe ser
de 4 caracteres, para ello crearemos una función */

function friend(friends) {
    // Creamos un array vacio donde pondremos aquellos strings que tengan de longitud 4 caracteres.
  
    let amigueros = [];
  
    // Para esto crearemos un bucle donde recorreremos cada string que se encuentra en el array
    for (let i = 0; i < friends.length; i++) {
      // Y con el condicional verificaremos si la longitud del string recorrido en el arreglo es igual a 4.
      if (friends[i].length === 4) {
        // Si es igual a 4, se pusheara al arreglo vacio que creamos al comienzo.
        amigueros.push(friends[i]);
      }
    }
    // Finalmente, la función devolvera el arreglo con los amigos cuya longitud de caracteres es igual a 4.
    return amigueros;
  }
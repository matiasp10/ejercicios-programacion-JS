let uniqueInOrder = function(iterable) {
    // Creo un nuevo arreglo vacio
    let arr = [];
    // Itero sobre el iterable que me pasen
    for (let i=0;i<iterable.length;i++) {
    // compruebo si el siguiente elemento es igual de lo contrario lo pusheo en el arreglo
    if (iterable[i] !== iterable[i+1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
}

let uniqueInOrder = function(iterable){
    // verifica si el iterable es de tipo objeto, si es verdadero filtro el iterable en un arreglo que solamente tiene los que no son iguales contiguamente
    // Y si comprueba que no es un objeto, lo splitea y le aplica el mismo filtro
    return (typeof iterable == "object") ? iterable.filter((v,i,a) => a[i] !== a[i+1]) : iterable.split("").filter((v,i,a) => a[i] !== a[i+1]);
}
function createaMatrixViaFor(rowsAmount, columnsAmount) {
  let array = [];
  for (let i = 0; i < rowsAmount; i++) {
    array.push([]);
    for (let j = 0; j < columnsAmount; j++) {
      array[i].push(j + 1);
    }
  }
  return array;
}

function createArrayViaRecusion(currentSize = 0, ...nextSizes) {
  let array = [];
  for (let i = 0; i < currentSize; i++) {
    array.push(
      nextSizes.length === 0 ? i + 1 : createArrayViaRecusion(...nextSizes)
    );
  }
  return array;
}

console.log(createaMatrixViaFor(3, 5));
console.log(createArrayViaRecusion(3));
console.log(createArrayViaRecusion(3, 5));
console.log(createArrayViaRecusion(3, 5, 8));

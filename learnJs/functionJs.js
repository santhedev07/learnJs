// function to calculate the arithmetic sequence
// with looping for 
function arithMetic(a, b, c) {
  var deretAritmatika = [];
  for (var i = 0; i < c; i++) {
    deretAritmatika.push(a + (b * i));
  }
  console.log(deretAritmatika);
}
arithMetic(2, 3, 5); // Output: [2, 5, 8, 11, 14]

function matrixMultiplication(matrixA, matrixB) {
  var result = [];
  for (var i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (var j = 0; j < matrixB[0].length; j++) {
      result[i][j] = 0;
      for (var k = 0; k < matrixA[0].length; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return result;
}
// Example of matrix multiplication
var matrixA = [
  [1, 2],
  [3, 4]
];
var matrixB = [
  [5, 6],
  [7, 8]
];
var resultMatrix = matrixMultiplication(matrixA, matrixB);
console.log(resultMatrix); // Output: [[19, 22], [43, 50]]
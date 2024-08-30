function transporMatriz(A) {
  console.log("Matriz Original:");
  A.forEach((row) => console.log(row));

  let transposta = A[0].map((_, colIndex) => A.map((row) => row[colIndex]));

  console.log("Matriz Transposta:");
  transposta.forEach((row) => console.log(row));
}

// Exemplo de uso
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

transporMatriz(matriz);

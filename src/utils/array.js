export const invertArray = (matriz) => {
  const filas = matriz.length;
  const columnas = matriz[0].length;

  // Crear una nueva matriz con las columnas como filas
  const matrizInvertida = [];

  for (let i = 0; i < columnas; i++) {
    matrizInvertida[i] = [];
    for (let j = 0; j < filas; j++) {
      matrizInvertida[i][j] = matriz[j][i];
    }
  }

  return matrizInvertida;
};

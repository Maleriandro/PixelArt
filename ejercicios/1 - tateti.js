/*
    OBJETIVO: Verificar si un tateti es válido
*/

var matriz1 = [
    ['O', 'X', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
];

var matriz2 = [
    ['O', 'X', 'X'],
    ['X', 'O', 'O'],
    ['X', 'O', 'X']
];

function balidarSiGano(caracter, matriz) {

}

var resultadoMatriz1 = balidarSiGano('X', matriz1);
var resultadoMatriz2 = balidarSiGano('X', matriz2);

console.log(resultadoMatriz1); // Tiene que mostrar true
console.log(resultadoMatriz2); // Tiene que mostrar false

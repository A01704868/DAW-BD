function promedio(arreglo){
    let suma = 0;
    for(let i = 0; i<arreglo.length;i++){
        suma += arreglo[i];
    }

    return suma/arreglo.length;
}
const arreglo = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
const resultado = promedio(arreglo);
//console.log(resultado);

function string_texto(imprimir){
    const file_system = require('fs');
    file_system.writeFileSync('ejercicio.txt',imprimir);
}
string_texto('HEY HEY MY MY');

function transpose(matrix, jLength){
    const resultado = [];
    for(let i = 0; i<matrix.length;i++){
        resultado.push([]);
    }

    for(let i = 0; i< matrix.length;i++){
        for(let j = 0; j<jLength;j++){
            resultado[j].push(matrix[i][j]);
        }
    }
    return resultado;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
const despues = transpose(matrix,3);
console.log(despues);

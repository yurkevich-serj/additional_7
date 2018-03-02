module.exports = function solveSudoku(matrix) {

function findSolutionForGranny(matrix){
     let helpMatrix;
     for (let i = 0; i < 9; i++) {
         for (let j = 0; j < 9; j++) {
              if (matrix[i][j] == 0) {
                 for (let varient= 1; varient <= 9; varient++) {
                     if (uniquenessLineColumn(matrix, i, j, varient) && uniquenessSquare(matrix, i, j, varient)) {
                         matrix[i][j] = varient;
                         helpMatrix = findSolutionForGranny(matrix);
                         if (helpMatrix) {
                             return matrix;
                         }
                         matrix[i][j] = 0;
                     }
                }
                return false;
             }
         }
     }
     return true;
}
function uniquenessLineColumn(matrix, line, collumn, varient) {
    for (let i = 0; i < 9; i++) {
         if (i != line && matrix[i][collumn] == varient || i != collumn && matrix[line][i] == varient) {
            return false;
           } 
        }
    return true;
    }
function uniquenessSquare(matrix, line, collumn, varient) {
     for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
             if (i != line && j != collumn && matrix[Math.floor((line / 3)) * 3 + i][Math.floor((collumn / 3)) * 3 + j] == varient) {
                 return false;
              }
         }
     }
    return true
    }
return findSolutionForGranny(matrix);
}



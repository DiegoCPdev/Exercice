let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    
    for (let i = 0; i < arr.length; i++) {
        mainDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][arr.length - 1 - i];
    }

    return Math.abs(mainDiagonal - secondaryDiagonal);
}

console.log(diagonalDifference(arr));
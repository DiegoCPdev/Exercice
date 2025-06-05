let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let total = arr.length;

    for (let num of arr) {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    }

    console.log((positive / total).toFixed(6));
    console.log((negative / total).toFixed(6));
    console.log((zero / total).toFixed(6));
}

plusMinus(numbers);
let ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar){
    let total = 0;
    for (let i = 0; i < ar.length; i++){
        total = total + ar[i];
    }
    console.log(total);
}

simpleArraySum(ar);
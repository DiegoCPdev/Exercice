let nums = [3,2,4];
let target = 6;

for (let i = 0; i < nums.length; i++) {
    let indice = nums[i];
    let complement = (target - indice);

    nums.indexOf(complement)
    if (complement == nums[i]){
        i++;
    } else {
        continue;
    }
}

/*
Recebo um array de números inteiros
Recebo uma variavel "target". Essa variavel é o resultado que eu tenho que chegar.
Leio o array de inteiros, para encontrar dois números diferentes, que somados, cheguem no valor de "target"
*/
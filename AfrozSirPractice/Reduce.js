const arr = [12,14,16,18,20]

const sum = arr.reduce((accumulator ,currentValue)=>{
    return accumulator+(currentValue * currentValue);
});
console.log(sum);
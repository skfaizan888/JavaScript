function swap(num){
    arrNum = Array.from(num.toString()).map(Number);
    return arrNum.reverse().join("")
}
console.log(swap(12))
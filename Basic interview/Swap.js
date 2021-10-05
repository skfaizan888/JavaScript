function swap(num){
    arrNum = Array.from(num.toString()).map(Number);
    return arrNum.reverse()
}
console.log(swap(12))
function  digits4(num){
    let arrNum = Array.from (num.toString()).map(Number)
    if(arrNum.length>4){
        return "More than 4";
    } else if (arrNum.length <4){
        return "less than 4";
    } return "Exactly 4"
}
console.log (digits4(125))


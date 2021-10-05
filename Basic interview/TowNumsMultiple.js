function TowNumsMultiple(x,y){
    if(x%y==0){
        return "multiple"
    }
    return "not multiple"
}
console.log(TowNumsMultiple(24,12))
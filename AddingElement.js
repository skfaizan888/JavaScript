// if declard with const you cannot ressign the same array

const numbers =[3 ,4];      

// Add an Element at the begining of an array

numbers.unshift("unshift method---", 1, 2);

// adding an Element at the end of array

numbers.push(5, 6);

console.log("push method ---", numbers);

// adding an Element anywhere in an array

const digits = [10, 11, 12, 13, 14];

digits.splice(2, 0, "a", "b");

// fisrt parameter :starting indexed
// second parameter : remove items from startin index and onwards
// third parameter : and Elementfrom starting index

console.log(digits);

console.log("checking result" ,digits.splice());
// const numbers = [1,2,3,-3,-2,4,5,6]

// const filteredPositive =numbers.filter((e)=> e >= 0); 
//                                                                    //((e)=> % 2 ===0) -
// console.log(filteredPositive);



const numbers =[1,2,3,4,5,6,7,8]

const filteredNums =numbers.filter((item)=> item <5 );
                    //   ((item)=> item % 2!==0);
// console.log(filteredNums);

// Maping & Filter
const mapped = filteredNums.map((items)=> items +1);
console.log(mapped);


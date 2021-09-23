// const cubicArray=(data)=>{
//     const newArr=[];
//     data.forEach(item => {
//         const cube = item**3;
//         newArr.push(cube);
//     });
//     return newArr;
// }



    // second way
// console.log(cubicArray([2,4,5,7]));

const cubicArray=(data)=>{
    const newArr=[];
    data.forEach(item => {
        newArr.push(Math.pow(item,3));
    });
    return newArr;
}

console.log(cubicArray([2,4,5,7]));
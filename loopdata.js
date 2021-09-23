// const data =[2,4,5,7];
// for(let i=0; i<data.lenth; i++){
//     console.log( data[i]);
// }


const data =[2,4,5,7];

for (let i=0; i<data.length; i++){
    console.log(i+";"+ data [i]);
}

console.log("using foreach loop...");
data.forEach((Element)=>{
    console.log(Element);
});
// const employees={
//  data: [
//     {prefix:"Mr.", fisrtName : "Shaikh" , MiddleName:"Faizan" , LastName:"Ahmed"},
//     {prefix:"Ms.", fisrtName :"syed" , MiddleName:"Faixan" , LastName:"Ali"},
//     {prefix:"Mr.", fisrtName : "Mohd" , MiddleName:"FurQan" , LastName:"Ahmed"},
// ]};
import{employees} from "./fullNamesData" 

const result =  employees.data.map((item) =>` ${item.prefix}${item.fisrtName} ${item.MiddleName} ${item.LastName}`);

console.log(result);
// const imgData=(arr)=>arr.map(item=>item["url"]);

// console.log(
//     imgData([
//     {url:"google.com", title:"google"},
//     {url:"pickupbiz.com", title:"pickupbiz"},
//     {url:"gmail.com", title:"Gmail"},
//     {url:"Amazon.com", title:"amazon"},
// ])
// );




            //    Second Methdode
const imgData=(arr)=>arr.map((item)=> `<img src="${item.url}"  alt="${item.title}"/>`)

console.log(
    imgData([
    {url:"google.com", title:"google"},
    {url:"pickupbiz.com", title:"pickupbiz"},
    {url:"gmail.com", title:"Gmail"},
    {url:"Amazon.com", title:"amazon"},
])
);
// Naming Difference:
// Construtor : pascal
// Factory : CamelCased

//Constructor use New Keyword

function CheckConstrutor(name, age, city, state) {
    this.name = name,
        this.age = age,
        this.city = city,
        this.state = state;
}
const result = new CheckConstrutor("Afroz", "18", "Pune", "Mah");
const result2 = new CheckConstrutor("Imroz", "35", "Karachi", "Pakistan");
// console.log(result)
// console.log(result2)

//Factory Function used
function person(name, age, title) {
    const personalDetails = {};
    personalDetails.name = name,
        personalDetails.age = age,
        personalDetails.title = title;
    return personalDetails;

}
// console.log(
//     person("Sohel", "35", "Software Engineer"))



function Strog(name, age, kg, city) {
    this.name = name,
        this.age = age,
        this.kg = kg,
        this.city = city
}
const data = new Strog("Afroz", "500", "80", "Pune")
console.log(data)

function Music(name, age, city) {
    const MusicDetails = {};
    MusicDetails.name = name
    MusicDetails.age = age,
        MusicDetails.city = city

    return MusicDetails;
}

console.log(Music("Afroz", "15", "nanded"))
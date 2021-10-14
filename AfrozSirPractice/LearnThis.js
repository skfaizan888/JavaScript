// 1. Create on Object
// 2. Add methode
// 3. call back function
// 4. Pass this tocallback function


const Movie = {
    title: "Faizu",
    age: [2, 4, 5, 6, 7],
    showMovie() {
        this.age.forEach(function (data) {
            console.log(data, this.title)
        }, this)
    }
}
Movie.showMovie();

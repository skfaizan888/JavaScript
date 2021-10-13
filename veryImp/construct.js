function Circle(radiuss) {
    this.radius = radiuss;    //radius:4
    this.pi = 3.14;    // pi: 3.14
    this.area = function () {
        return this.pi * this.radius * this.radius;
    }
}
const result = new Circle(4);  //result ={Shaikh_Faizan_Ahmed...888}
console.log(result.area());


const movies = {
    title: "abc",
    tags: [1, 4, 7, 5],
    showMovie() {
        this.tags.forEach(function (element) {
            console.log(element, this.title);
        }.bind(this))

    }
}
movies.showMovie()
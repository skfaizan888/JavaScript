

function Circle(radius){
    this.radius=radius;
    this.draw = function(){
        console.log(draw)
    };
    return this;
}

const Circle = new Circle (5);
console.log(Circle)
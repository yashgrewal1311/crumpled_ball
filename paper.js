class Paper {
    constructor (x, y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.body = Matter.Bodies.circle(x, y, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}

function keyPressed(){
    if (keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

    }

}
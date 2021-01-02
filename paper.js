class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
             }
             this.paper = Matter.Bodies.circle(x,y,radius,options);
             this.r = radius
             World.add(world,this.paper)
    }
   display(){
       push();
       translate(this.paper.position.x,this.paper.position.y)
      ellipseMode(RADIUS)
      fill("brown")
      ellipse(0,0,this.r,this.r)
      pop();
    } 
}



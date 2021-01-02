class Dustbin{
	constructor(x,y,width,height){

		this.side1 = Matter.Bodies.rectangle(x-width/2,y,10,height); 
		this.side2 = Matter.Bodies.rectangle(x,y+height/2,width,10); 
		this.side3 = Matter.Bodies.rectangle(x+width/2,y,10,height); 
		
		this.x = x; 
		this.y = y; 
		this.width = width; 
		this.height = height;
		

		World.add(world,this.side1)
		World.add(world,this.side2)
		World.add(world,this.side3)
	}

    display(){
		rect(this.x,this.y+this.height/2,this.width,10); 
		rect(this.x-this.width/2,this.y,10,this.height); 
		rect(this.x+this.width/2,this.y,10,this.height);
	}
	
}
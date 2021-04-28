class paper {
	constructor(x,y)
	{
		var options={
			isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2,			
			}
		
        this.image = loadImage("paper.png");
        this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image, this.x,this.y, 100, 100);
			pop()
			
	}

}

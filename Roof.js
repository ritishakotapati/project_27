class Roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var roofPos=this.body.position;		
			fill(128,128,128)
			push()
			var Anchor1X=pointA.x 
			var Anchor1Y=pointA.y 
			var Anchor2X=pointB.x+this.offsetX 
			var Anchor2Y=pointB.y+this.offsetY 
			line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
			rectMode(CENTER)
			strokeWeight(4);
			
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
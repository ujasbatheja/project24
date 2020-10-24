class Paper
{
   constructor(x,y,width,height)
   {
    var object_options= {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

      }
      this.body=Bodies.rectangle(x,y,width,height,object_options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
   }

   display()
   { var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      angleMode(RADIANS);
      strokeWeight(4);
      stroke("yellow");
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.width,this.height);
      pop()
   }

}
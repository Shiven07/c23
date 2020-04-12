class Box   {
constructor(){
var options = {
restitution:1    
}    
this.body = Bodies.rectangle(200,200,50,50);
World.add(world,this.body);
}

display()  {
var pos = this.body.position;
var angle = this.body.angle;
rectMode(CENTER);
//ground
push()
translate(pos.x,pos.y);
rotate(angle);


rect(0,0,this.width,this.height);
pop();


}





}
class Chain{
    constructor(bodyA,bodyB){
       var options ={
           bodyA:bodyA,
           bodyB:bodyB,
           lenght:10,
           stiffness:0.04
       }
       this.chain=Constraint.create(options);
       World.add(world,this.chain);
    }
    display(){
var posA=this.chain.bodyA.position;
var posB=this.chain.bodyB.position;
strokeWeight(3);
line(posA.x,posA.y,posB.x,posB.y);

}
}

class chain{
    constructor(body1, body2,offsetx,offsety){
        this.offsetx=offsetx
        this.offsety=offsety
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetx,y:this.offsety},
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     
    display(){

    
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
            line(pointA.x,pointA.y,(pointB.x+this.offsetx),(pointB.y+this.offsety))
            pop();
        }
    }
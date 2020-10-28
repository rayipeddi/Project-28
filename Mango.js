class Mango{
    constructor(x,y,radius){
        var options ={
            'isStatic': true,
            'restitution': 0,
            'friction': 1,
        }
        this.body = Bodies.circle(x,y,radius,options)
        
        this.width = radius
        this.height = radius
        this.image = loadImage("mango.png")
        World.add(world, this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        translate(this.body.position.x, this.body.position.y)
        image(this.image, 0, 0, this.width ,this.height)
        pop()
    }
}
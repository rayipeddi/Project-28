class Stone{
    constructor(x,y,radius){
        var options ={
            'isStatic': false,
            'restitution': 0,
            'friction': 1,
            'density': 1.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        
        this.width = radius
        this.height = radius
        this.image = loadImage("stone.png")
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
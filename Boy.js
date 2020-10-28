class Boy{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.height = height
        this.width = width
        this.image = loadImage("boy.png")
    }
    display(){
        push()
        imageMode(CENTER)
        translate(this.body.position.x, this.body.position.y)
        image(this.image, 0,0,this.width,this.height)
        pop()
    }
}
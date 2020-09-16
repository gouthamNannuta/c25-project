class Ground{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        push();
        fill(255,215,0);
        rectMode(CENTER);
        rect(500,685,this.width,this.height);
        pop();
    }
}
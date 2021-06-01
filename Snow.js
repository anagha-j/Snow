var snowImg;
class SnowFall {
    constructor(x,y,width,height){
        var options = {
            //density = 0.5,
           // friction = 0.1
        }
        this.width = width;
        this.height =  height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        //console.log ("test",this.body.scale)
        World.add(world, this.body);
        snowImg = loadImage("snow4.webp");
        
        
       // this.snowfall =[];
    }
    display (){
        imageMode(CENTER);
        image (snowImg ,this.body.position.x,this.body.position.y,this.width,this.height)
        
    }
}
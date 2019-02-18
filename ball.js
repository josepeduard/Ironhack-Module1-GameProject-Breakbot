'use strict'
class Ball {
    constructor(canvas) {
        this.size = 30;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x= this.canvas.width/2 ;
        this.y= 250;
        this.speed = 8;
        this.directionY = 1;
        this.directionX = 0.8;
        this.ballRadius =10;
    }
    
    update(){
        this.y = this.y + this.directionY * this.speed;
        this.x = this.x + this.directionX * this.speed;
    }

    

    checkScreen(){

        if(this.x <= 0  || this.x >= this.canvas.width) {
            this.directionX = -this.directionX 
            this.directionY = this.directionY
        }else if (this.y <= 0 || this.y >= this.canvas.height) {
            this.directionX = this.directionX 
            this.directionY = -this.directionY

        }
        
    }

    checkallCollision (player){
        
        const collRight = this.x - this.ballRadius < player.x + player.size/2;
        const collLeft = this.x + this.ballRadius > player.x - player.size/2;
        const collTop = this.y - this.ballRadius < player.y + player.size/16;
        const collBotton = this.y + this.ballRadius > player.y - player.size/16;

        console.log(collTop,collRight,collTop,collBotton);
        

        if(collTop && collBotton && collRight &&collLeft) {
            console.log('fdddffddf')
            this.directionX = this.directionX 
            this.directionY = -this.directionY;
        }

        return false;
    }       
   
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        this.ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16); //“#”+Math.floor(Math.random()*16777215).toString(16);
        this.ctx.fill();
        this.ctx.closePath(); 
    }
    
    
  

}
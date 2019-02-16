'use strict'

class Player {
    constructor(canvas,lives) {
        this.size = 80;
        this.canvas = canvas;
        this.lives = lives;
        this.ctx = this.canvas.getContext('2d');
        this.x= this.canvas.width/2 ;
        this.y= this.canvas.height-50;
        this.speed = 10;
        this.direction = 0;
        
    }
    update(){
        this.x = this.x + this.direction * this.speed;
    }

    draw(){
        this.ctx.fillStyle = 'pink';
        this.ctx.fillRect( this.x - this.size/2, this.y - this.size/2, this.size, this.size/5)
    }

    setDirection(direction){
        this.direction = direction;
    }

    checkScreen(){
 
        if( this.x <= 0+4 || this.x >= this.canvas.width-4) {
            this.direction = -this.direction
        }
        
    }

}
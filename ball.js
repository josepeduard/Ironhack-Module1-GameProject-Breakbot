'use strict'
class Ball {
    constructor(canvas) {
        this.size = 30;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x= this.canvas.width/2 ;
        this.y= 250;
        this.speed = 4;
        this.directionY = 1;
        this.directionX = 1.2;
        this.ballRadius =10;
    }
    
    update(){
        this.y = this.y + this.directionY * this.speed;
        this.x = this.x + this.directionX * this.speed;
    }


    checkScreen(){

        if( this.x <= 0 || this.y <= 0 || this.x >= this.canvas.width || this.y >= this.canvas.height) {
            this.directionX = -this.directionX
            this.directionY = this.directionY
        }


        // if(this.y - this.size/2 <= 0){
        //     this.direction = 1
        // }else if(this.y + this.size/2 >=this.canvas.width){
        //     this.direction = -1;
        // }*/
       // if this.x>this.canvas<0 =>1;
       //if this.x>this.canvas.whidth => -1; 
    }


    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath(); 
    }
    

  
}
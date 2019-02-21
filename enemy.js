'use strict'

class Enemy {
    constructor(canvas,x,y) {
    this.size = 60;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x= x;
    this.y= y;
    this.speed = 3;
    this.direction = 5;
    };
    
    /*update(){
        this.x = this.x + this.direction * this.speed;
    };*/

    update(){
        this.x = this.x + this.direction * this.speed;
    }

    draw(){
        this.ctx.fillStyle= '#5DBCD2';
        this.ctx.fillRect( this.x-this.size/2, this.y-this.size/10, this.size, this.size/5)
    };

    checkScreen(){
 
        if( this.x <= 0+50 || this.x >= this.canvas.width-50) {
            this.direction = -this.direction
        }
        
    }
}
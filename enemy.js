'use strict'

class Enemy {
    constructor(canvas,y) {
    this.size = 80;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x= this.canvas.width/15;
    this.y= 100;        
    this.speed = 5;
    this.direction = 5;
    };
    
    /*update(){
        this.x = this.x + this.direction * this.speed;
    };*/

    update(){
        this.x = this.x + this.direction * this.speed;
    }

    draw(){
        this.ctx.fillStyle= 'black';
        this.ctx.fillRect( this.x - this.size/2, this.y - this.size/2, this.size, this.size/5)
    };

    checkScreen(){
 
        if( this.x <= 0+50 || this.x >= this.canvas.width-50) {
            this.direction = -this.direction
        }
        
    }
}
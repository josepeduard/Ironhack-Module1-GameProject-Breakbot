'use strict'

class Game{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.enemy;
        this.ball;
        //this.secondball;
        this.isGameOver = false;
    }

    startLoop (){
        this.player = new Player(this.canvas,3);
        this.ball = new Ball(this.canvas);
        //this.secondball = new Secondball(this.canvas);
        this.enemy = new Enemy(this.canvas);
        
        
        
        const loop = () => {

            /*if(Math.random() > 0.97){
                const y = Math.random() * this.canvas.height;
                this.enemies.push(new Enemy(this.canvas, y))
            }*/

            //this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            
            if(!this.isGameOver){
                window.requestAnimationFrame(loop);
            }

            
        }
        window.requestAnimationFrame(loop);
    }

    updateCanvas(){
        this.player.update();
        this.player.checkScreen();
        this.ball.checkScreen();
        //this.secondball.checkScreen();
        this.ball.update();
        //this.secondball.update();
        this.enemy.checkScreen();
        this.enemy.update();

        
        /*this.enemies.forEach((enemy)=>{
            enemy.update();
        })*/
    };

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    };

    drawCanvas(){
        this.player.draw();
        this.ball.draw();
        //this.secondball.draw();
        this.enemy.draw();
       /* this.enemies.forEach((enemy)=>{
            enemy.draw();
        })*/
    };
    gameOverCallback(callback){
        this.onGameOver = callback;
    }
}

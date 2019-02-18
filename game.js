'use strict'

class Game{
   constructor(canvas) {
       this.canvas = canvas;
       this.ctx = this.canvas.getContext('2d');
       this.player;
       this.enemies = [];
       //this.obstacle;
       this.ball;
       //this.secondball;
       this.isGameOver = false;
   }

   startLoop (){
       this.player = new Player(this.canvas);
       this.ball = new Ball(this.canvas,3);
       //this.secondball = new Secondball(this.canvas);
       this.enemies.push(new Enemy(this.canvas, 100, 100));
       this.enemies.push(new Enemy(this.canvas, 300, 125));
       this.enemies.push(new Enemy(this.canvas, 500, 150));
       this.enemies.push(new Enemy(this.canvas, 700, 200));
       this.enemies.push(new Enemy(this.canvas, 100, 275));
       this.enemies.push(new Enemy(this.canvas, 300, 300));
       this.enemies.push(new Enemy(this.canvas, 500, 325));
       this.enemies.push(new Enemy(this.canvas, 700, 350));
       


       const loop = () => {

           

           //this.checkAllCollisions();
           this.updateCanvas();
           this.clearCanvas();
           this.drawCanvas();
            if(this.ball.lives <= 0){
                this.isGameOver = true;
            }
           if(!this.isGameOver){
               window.requestAnimationFrame(loop);
           }
           if(this.isGameOver){
            this.onGameOver();
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
       //this.enemies.checkScreen();
       this.enemies.forEach((enemy) => {
           enemy.update();
        });
       this.enemies.forEach((enemy) => {
           enemy.checkScreen();
        });
       this.ball.checkallCollision(this.player);
       
       

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
       this.enemies.forEach((enemy) => {
           enemy.draw();
         });
       
      /* this.enemies.forEach((enemy)=>{
           enemy.draw();
       })*/
   };


   gameOverCallback(callback){ 
    this.onGameOver = callback;
   }
}
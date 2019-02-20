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
       this.isWinner = false;
   }

   startLoop (){
       this.player = new Player(this.canvas);
       this.ball = new Ball(this.canvas,3);
        //this.secondball = new Ball(this.canvas);
       this.enemies.push(new Enemy(this.canvas, 100, 100));
       this.enemies.push(new Enemy(this.canvas, 200, 125));
       this.enemies.push(new Enemy(this.canvas, 300, 150));
       this.enemies.push(new Enemy(this.canvas, 400, 175));
       this.enemies.push(new Enemy(this.canvas, 500, 200));
       this.enemies.push(new Enemy(this.canvas, 600, 225));
       this.enemies.push(new Enemy(this.canvas, 700, 250));
       this.enemies.push(new Enemy(this.canvas, 800, 275));
       this.enemies.push(new Enemy(this.canvas, 900, 300));
       this.enemies.push(new Enemy(this.canvas, 1000, 325));
       this.enemies.push(new Enemy(this.canvas, 1100, 350));
       this.enemies.push(new Enemy(this.canvas, 1200, 375));
       this.enemies.push(new Enemy(this.canvas, 1300, 400));
       /* this.enemies.push(new Enemy(this.canvas, 100, 100));
       this.enemies.push(new Enemy(this.canvas, 200, 125));
       this.enemies.push(new Enemy(this.canvas, 300, 150));
       this.enemies.push(new Enemy(this.canvas, 400, 175));
       this.enemies.push(new Enemy(this.canvas, 500, 200));
       this.enemies.push(new Enemy(this.canvas, 600, 225));
       this.enemies.push(new Enemy(this.canvas, 700, 250));
       this.enemies.push(new Enemy(this.canvas, 800, 275));*/
       /*this.enemies.push(new Enemy(this.canvas, 900, 300));
       this.enemies.push(new Enemy(this.canvas, 1000, 325));
       this.enemies.push(new Enemy(this.canvas, 1100, 350));
       this.enemies.push(new Enemy(this.canvas, 1200, 375));*/
       let contador = 0

       const loop = () => {

           contador ++
            console.log(this.enemies.length)

           //console.log(Math.floor(contador/60))

           //this.checkAllCollisions();
           this.updateCanvas();
           this.clearCanvas();
           this.drawCanvas();
            if(this.ball.lives <= 0){
                this.isGameOver = true;
            }
           
           if(this.isGameOver){
            this.onGameOver();
           }
           if(this.enemies.length === 0){
               this.isWinner = true;
           }
            if(this.isWinner){
            this.isWin();
            }
            if(!this.isGameOver && !this.isWinner){
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
       //this.enemies.checkScreen();
       this.enemies.forEach((enemy) => {
           enemy.update();
        });
       this.enemies.forEach((enemy) => {
           enemy.checkScreen();
        });
       this.ball.checkallCollision(this.player);
       this.enemies.forEach((enemy,index)=>{
           if (this.ball.ckeckCollisionEnemy(enemy)) {
                this.enemies.splice(index,1)
           }
       })
       
       

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
   isWinnerCallback(callback){
    this.isWin = callback;
   }

}
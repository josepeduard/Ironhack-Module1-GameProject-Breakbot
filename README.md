# Nombre del Proyecto

## Descripción

Breakbot is an arcade game similar as breakout another arcade game game developed and published by Atari released on 70’s.
In Breakbot, a layer of bricks covers part of the screen. A ball travels across the screen, bouncing off the top and side walls of the screen. When a brick is hit, the ball bounces away and the brick is destroyed. The player loses a turn when the ball touches the bottom of the screen. To prevent this from happening, the player has a movable paddle to bounce the ball upward, keeping it in play.


## MVP - Tecnología (DOM - CANVAS)

There're:
    1 player:
        - It's a single bar
        - It's move in two ways
        - The ball bounces away and the (super)brick is destroyed.

    1 obstacle/enemy:
        - It's a layer of bricks covers part of the screen.
        - When a brick is hit, the ball bounces away and the brick is destroyed.
        - (bonus) The obstacle/enemy will be moving down.
     
     5 STAGES:
        - splashScreen
        - gameScreen1
        - gameScreen2
        - gameoverScreen 
        - winScreen 


## Backlog
    ScreenShoot: (background color: blue)

    Player: The player only moves in two directions. (Rigth-Left)

    Obstacle/enemy: It's just a layer of brick(s) cover(s) part of the screen. It will be fixed (bonus The layer of brick(s) will be moving down.)



## Estructuras de Datos

main.js
    buildDom();
     buildSplashScreen();
     buildGameScreen();
     buildGameScreen();
     buildGameOverScreen();
     buildWinScreen();

player.js
    this.lives;
    this.x;
    this.y;
    this.size;
    this.speed;
    this.direction;

    update();
    draw();
    checkColision();


enemy.js
    this.x;
    this.y;
    this.size;
    this.direction;
    ¿this.speed?  

    update();
    draw();
    checkInSceen();

game.js
    startloop();
    loop();
    onGameOver();
    this.player
    this.enemies

## States y States Transitions

Definicion del las transiciones del juego y del main.

- splashScreen
     go to -> gameScreen1
- gameScreen1
    go to -> gameScreen2
- gameScreen2
    go to -> gameoverScreen
    go to -> winScreen
- gameoverScreen 
    go to -> gameScreen1
- winScreen 
    go to -> splashScreen



## Task

DOM (HTML,CSS,JS)
DEFINE MAIN
DEFINE GAME
DEFINITION PLAYER/BRICK
PLAYER MOVEMENTS
DEFINITION AND MOVIMENT BALL
DEFINITION OBSTACLE
OBSTACLE MOVEMENTS
COLLISION
TRACK THE SCORE (AND WIN&LOOSE)
KEYBOARD CONTROLS
CCS
MUSIC


## Links

### Trello

[Link url](https://trello.com)

### Git

Especificar las url del proyecto y del deploy

[Link Repositorio](https://github.com/josepeduard/Ironhack-Module1-GameProject-Breakbot)

[Link Deploy](http://github.com)

### Slides.com

Especificar la url de la presentacion

[Link Slides.com](http://slides.com) (not yet)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones




const main = () =>{
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
        return main;
    };
    /*<h1>Breakbot</h1>*/
    const buildSplashScreen = () => {
        const splashScreen = buildDom(`
        <section class = "splash-screen">
        
        <button>Breakbot</button>
        </section>
            `)
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);
    };

    const buildGameScreen = () => {
        const gameScreen = buildDom(`
        <section class="game-screen">
            <canvas></canvas>
        </section>
        `);

        const width = document.querySelector(`.game-screen`).offsetWidth;
        const height = document.querySelector(`.game-screen`).offsetHeight;
    
        const canvasElement = document.querySelector('canvas');
    
        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);
    

        // setTimeout(buildGameOver, 3000);

        const game = new Game(canvasElement);
        game.gameOverCallback(buildGameOver);
    

        game.startLoop();

        const setPlayerDirection = (event) => {
            if (event.code === 'ArrowLeft'){
            game.player.setDirection(-1);  
            }else if (event.code === 'ArrowRight'){
            game.player.setDirection(1);
        };
    };

    document.addEventListener('keydown', setPlayerDirection);
    }



    const buildGameOver = () => {
    const gameOverScreen = buildDom(`
        <section class = "games-over">
        <h1></h1>
        <button class="restart">Restart</button>
    `);
    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', buildGameScreen);
    }

    buildSplashScreen();
}


window.addEventListener('load', main);

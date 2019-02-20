const main = () =>{
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
        return main;
    };
    /*<h1>Breakbot</h1>*/
    const buildSplashScreen = () => {
        const splashScreen = buildDom(`
        <audio controls autoplay loop>
            <source src="bonus/brekbotRemix2.mp3" type="audio/mpeg">
        </audio>
        <section class = "splash-screen">
        <button>Breakbot</button>
        </section>
            `)
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);
    };

    const buildGameScreen = () => {
        const gameScreen = buildDom(`
        <audio controls autoplay loop>
            <source src="bonus/breakbotRemix.mp3" type="audio/mpeg">
        </audio>
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
        game.isWinnerCallback(buildWinner);
    
        game.startLoop();

        const setPlayerDirection = (event) => {
            if (event.code === 'ArrowLeft'){
            game.player.setDirection(-1);  
            }else if (event.code === 'ArrowRight'){
            game.player.setDirection(1);
        };
    };

    document.addEventListener('keydown', setPlayerDirection);
    };

    const buildWinner = () => {
        const WinnerScreen = buildDom(`
            <audio controls autoplay loop>
            <source src="bonus/ganador.mp3" type="audio/mpeg">
            </audio>
            <section class = "games-winner">
            <h1>Winner</h1>
            <button class="restart">Restart</button>
        `);
        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click', buildGameScreen);
    }
    
    const buildGameOver = () => {
    const gameOverScreen = buildDom(`
        <audio controls autoplay loop>
        <source src="bonus/Chopin.mp3" type="audio/mpeg">
        </audio>
        <section class = "games-over">
        <h1>LOSER!</h1>
        <button class="restart">Restart</button>
    `);
    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', buildGameScreen);
    }

    buildSplashScreen();
}


window.addEventListener('load', main);

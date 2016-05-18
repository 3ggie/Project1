var gameport = document.getElementById("gameport");
//Refresh rate of browser
//Size of game
var renderer = PIXI.autoDetectRenderer(400, 400);
gameport.appendChild(renderer.view);

/*Creating global variables, stages, and staging*/

var timeKeeper = setInterval(keepTime, 1000);
var EndGame = false;
var stage = new PIXI.Container();
var score = 0;
var GameOver = new PIXI.Text("Hearts Eaten: " + score, {font:"20px Arial", fill:"black"});
var scoreBoard = new PIXI.Text("Hearts Eaten: " + score, {font:"20px Arial", fill:"black"});
scoreBoard.position.x = 0;
scoreBoard.position.y = 0;

var timer = 30;
var timerBoard = new PIXI.Text("Timer: " + timer, {font:"20px Arial", fill:"black"})
timerBoard.position.x = 300;
timerBoard.position.y = 0;

//Beach Sprite
var beach = new PIXI.Texture.fromImage("beach.png");
var beachSprite = new PIXI.Sprite(beach);
beachSprite.anchor.x = 0.5;
beachSprite.anchor.y = 0.5;
beachSprite.position.x = 200;
beachSprite.position.y = 200;

//Character Sprite
var zombie = PIXI.Texture.fromImage("zombie.png");
var zombieSprite = new PIXI.Sprite(zombie);
zombieSprite.anchor.x = 0.5;
zombieSprite.anchor.y = 0.5;
zombieSprite.position.x = 200;
zombieSprite.position.y = 200;

//Heart Sprite
var heart = PIXI.Texture.fromImage("heart.png");
var heartSprite = new PIXI.Sprite(heart);
heartSprite.anchor.x = 0.5;
heartSprite.anchor.y = 0.5;
heartSprite.position.x = 100;
heartSprite.position.y = 100;

//Container that holds my elements
stage.addChild(beachSprite);
stage.addChild(zombieSprite);
stage.addChild(heartSprite);
stage.addChild(scoreBoard);
stage.addChild(timerBoard);

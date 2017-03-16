/**
 * @description Represents enemies the player must avoid
 * @constructor
 * @param {integer} x - horizontal position of player in pixels
 * @param {integer} y - vertical position of player in pixels
 */
var Enemy = function(x, y) {

  // The image/sprite for our enemies,
  // uses engine.js to load images
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  // height and width of enemy
  // required for checkCollisions function
  this.HEIGHT = 63;
  this.WIDTH = 92;
};

/**
 * @description Updates the enemy's position, required method for game
 * @param {integer} dt - a time delta between ticks*
 */
Enemy.prototype.update = function(dt) {
  this.x += Math.floor(Math.random() * 215) * dt;

  // Reset enemy position and speed when it reaches end of canvas
  if (this.x > 505) {
    this.x = (Math.floor(Math.random() * 3000)) * -1;
    this.x += Math.floor(Math.random() * 235) * dt;
  }

};

/**
 * @description Draw the enemy on the screen, required method for game
 */
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
 * @description Represents a player
 * @constructor
 * @param {integer} x - horizontal position of player in pixels
 * @param {integer} y - vertical position of player in pixels
 */
var Player = function(x, y) {
  // The image/sprite for our player, this uses
  // uses engine.js to load images
  this.sprite = 'images/char-princess-girl.png';
  this.x = x;
  this.y = y;
  // height and width  of player's character
  // required for checkCollisions function
  this.HEIGHT = 73;
  this.WIDTH = 60;
};

/**
 * @description Prevents user from moving out of bounds and
 *  resets player position after win or loss
 */
Player.prototype.update = function() {

  if (this.x < 0) { // player is too far left
    this.x = 0;
  } else if (this.y < 60) { // player won
    alert('Whoo Hoo! YOU WIN.')
    this.x = 200;
    this.y = 400;
  } else if (this.x > 400) { // player is too far right
    this.x = 400;
  } else if (this.y > 400) { // player is too far down
    this.y = 400;
  }

};

/**
 * @description Displays character on the screen, required method for game
 */
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


/**
 * @description Move player position based on key selected
 * @param {String} kcode - text equivalent of selected key
 */
Player.prototype.handleInput = function(kcode) {
  if (kcode == 'left') {
    this.x = this.x - 85;
  } else if (kcode == 'up') {
    this.y = this.y - 85;
  } else if (kcode == 'right') {
    this.x = this.x + 85;
  } else if (kcode == 'down') {
    this.y = this.y + 85;
  }
};

// Instantiate all the enemies - bwahahaha!
var mike = new Enemy(-150, 50);
var alvin = new Enemy(-450, 100);
var rhonda = new Enemy(-800, 150);
var pat = new Enemy(-1025, 200);
var charlie = new Enemy(-1825, 75);
var sam = new Enemy(-2025, 125);
var richard = new Enemy(-1950, 100);
var freddy = new Enemy(-1425, 50);
var april = new Enemy(-1625, 210);
var julie = new Enemy(-50, 200);
var amy = new Enemy(-1250, 175);
var jen = new Enemy(-1750, 225);
var carl = new Enemy(-2200, 75);
var cody = new Enemy(-200, 155);
var george = new Enemy(-650, 220);


// Store enemies in an array to easily call the render
// and update methods for each enemy, required for game
var allEnemies = [mike, alvin, rhonda, pat, charlie, sam,
  richard, freddy, april, julie, amy, jen, carl, cody, george
];

// Store user's Player object in variable, required for game
var player = new Player(200, 400);


/**
 * @description Determines if player get 'bit' by bug
 *
 */
function checkCollisions() {
  for (var enemy = 0; enemy < allEnemies.length; enemy++)
    // Run the collision check against all enemies
    if (allEnemies[enemy].x < player.x + player.WIDTH - 10 &&
      allEnemies[enemy].x + allEnemies[enemy].WIDTH - 10 > player.x &&
      allEnemies[enemy].y < player.y + player.HEIGHT - 20 &&
      allEnemies[enemy].HEIGHT + allEnemies[enemy].y - 20 > player.y) {
      // Player was bit! Reset player position to game start.
      alert('Ouch! You got bit. YOU LOSE. Try again.')
      player.x = 200;
      player.y = 400;
    }
}

/**
 * @description Listens for key presses and sends the keys to
 *   Player.handleInput() method. Do not modify.
 * @param {integer} e - code of key pressed on keyboard
 */
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

/**
 * Get game board to appear  - done!
 * Get bug to appear - done!
 * Get bug to move - done!
 * Get player to appear - done!
 * Get player to move - done!
 * Prevent player from moving out of bounds - done!
 * Reset enemies to simulate continuous stream of bugs - done!
 * Reset player position when colliding with bugs
 * Add game title and instructions to screen.
 * Add 'You won' / 'You Lose' confirmation
 */

// Enemies our player must avoid
// Parameter: x, horizontal position of enemy in pixels
// Parameter: y, vertical position of enemy in pixels
var Enemy = function(x, y) {

  // The image/sprite for our enemies,
  // uses engine.js to load images
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x += Math.floor(Math.random() * 215) * dt; // Move enemy

  // Reset enemy position and speed when it reaches end of canvas
  if (this.x > 505) {
    this.x = (Math.floor(Math.random() * 3000)) * -1;
    this.x += Math.floor(Math.random() * 235) * dt;
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Character played by user
// Parameter: x, horizontal position of player in pixels
// Parameter: y, vertical position of player in pixels
var Player = function(x, y) {
  // The image/sprite for our player, this uses
  // uses engine.js to load images
  this.sprite = 'images/char-princess-girl.png';
  this.x = x;
  this.y = y;
};

// Prevent user from moving out of bounds
// or Reset player position after win/loss
Player.prototype.update = function(gameStatus) {

  if (this.x < 30) { // player is too far left
    this.x = 200;
    this.y = 400;
  } else if (this.y < 60) { // player won
    this.x = 200;
    this.y = 400;
  } else if (this.x > 400) { // player is too far right
    this.x = 200;
    this.y = 400;
  } else if (this.y > 400) { // player is too far down
    this.x = 200;
    this.y = 400;
  }

};

// Display character on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Move player position based on key selected
// and prevent player from moving out of bounds
// Parameter: kcode, text equivalent of selected key
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



// Instantiate enemy objects
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


// This listens for key presses and sends the keys to
// Player.handleInput() method. Do not modify.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

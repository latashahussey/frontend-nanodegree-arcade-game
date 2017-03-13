// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //this.locX = locX;
    //this.locY = locY;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  //  this.speed += 75 * dt; // Move enemy 75  pixels per second

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
/*var Player = function(locX, locY) {
  this.sprite = 'images/char-pink-girl.png';
  this.locX = locX;
  this.locY = locY;
};

Player.prototype.update = function(dt) {


  // Prevent player from moving out of bounds
  if(player.locX <0){
    player.locX = 0;
  } else if (player.locX > 505) {
    player.locX = 455;
  } else if (player.locY < 0) {
    player.locY = 0;
  } else if (player.locX > 606) {
    player.locY = 556;
  }
};

Player.prototype.render = function() {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Move player position based on key selected
Player.prototype.handleInput = function(kcode) {
  if (kcode == 'left') {
       this.x = this.x - 40;
    } else if (kcode == 'up') {
        this.y = this.y - 40;
    } else if (kcode == 'right') {
        this.x = this.x + 40;
    } else if (kcode == 'down') {
        this.y = this.y + 40;
   }
};*/

// Now instantiate your objects.
var spider = new Enemy(250, 400);
var fly = new Enemy(-250, 75);
var roach = new Enemy(-350, 150);
var ant = new Enemy(-450, 125);
var waterbug = new Enemy(-450, 50);
//var jasmine = new Player(400, 300);


// Place all enemy objects in an array called allEnemies
var allEnemies = [spider, fly, roach, ant, waterbug];

// Place the player object in a variable called player
//var player = jasmine;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

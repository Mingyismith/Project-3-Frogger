// Enemies our player must avoid
var Enemy = function(sprite, x, y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x = this.x + this.speed * dt;

  if (this.x > 510) {
    this.x = -20;
    this.speed = 50 + Math.floor(Math.random() * 100);
  }

  if (this.x < player.x + 80 &&
    player.x + 80 > player.x &&
    this.y < player.y + 80 &&
    player.y + 80 > this.y) {
      player.x = 202;
      player.y = 405;
    };

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Place the player object in a variable called player
var Player = function(sprite, x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-pink-girl.png';
    this.x = x;
    this.y = y;
}


Player.prototype.update = function(dt) {

}


Player.prototype.handleInput = function(keyPress){
  if (keyPress == 'left' && this.x > 0){
      this.x -= 102;
    }
  if (keyPress == 'right' && this.x < 405){
        this.x += 102;
    }
  if (keyPress == 'up' && this.y > 0){
        this.y -= 80;
    }
  if (keyPress == 'up' && this.y < 405){
        this.x -= 80;
    }
  if (this.y < 0){
    setTimeOut(() =>{
        player.x = 200;
        player.y = 400;
    }, 500);
  }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
const enemyLocation= [63, 147, 230];

enemyLocation.forEach(function(locationY){
  enemy = new Enemy (0, locationY, 100);
  allEnemies.push(enemy);
});

var player = new Player (100, 300);

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

/* Game setup referenced https://www.youtube.com/watch?v=7PHhRrjgTDA */

// Initial player score
var score = 0;
document.getElementById('playerScore').innerHTML = score;

// variables'setting  Game's Enemies
var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.x = x;
    this.y = y;
};

/* Update the enemy's position, required method for game
 * Parameter: dt, a time delta between ticks
 */
Enemy.prototype.update = function(dt) {
    if (this.x < 505) {
        this.x = (this.speed * dt) + this.x;
        this.speed = Math.floor(Math.random()*222);
    } else {
        this.x = -50;
    }

    // If the enemy and the player collide
    if (this.x < player.x + 80 &&
       this.x + 80 > player.x &&
       this.y < player.y + 60 &&
       this.y + 60 > player.y) {
        score = 0;
        document.getElementById('playerScore').innerHTML = score;
        player.x =202;
        player.y = 405;
    }
};

/* Draw enemy on the screen
 * required method for game
 */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/* player class
 * update(), render() and
 * a handleInput() method.
 */

var Player = function() {
    this.sprite = 'images/char-pink-girl.png';
    this.x = 202;
    this.y = 405;
};

// Every time the player position is updated
Player.prototype.update = function() {

    // when player reaches the water
  //  if (player.y < 20) {
    //    score++;
      //  document.getElementById('playerScore').innerHTML = score;
      //  this.reset();
    //}
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if (direction == 'left' && this.x > 0) {
        this.x -= 102;
    }
    if (direction == 'right' && this.x < 405) {
        this.x += 102;
    }
    if (direction == 'up' && this.y > 0) {
        this.y -= 83;
    }
    if (direction == 'down' && this.y < 405) {
        this.y += 83;
    }
    if (this.y< 0 ){
      setTimeout(function(){
      player.x = 202;
      player.y = 405;
    }, 600);
    score++;
    document.getElementById('playerScore').innerHTML = score;
  }
}

//  player's reset to the starting point
//Player.prototype.reset = function() {
  //  this.x = 202;
  //  this.y = 405;
//};

// Now instantiate your objects.
var enemy1 = new Enemy(-50, 60, 10) ;
var enemy2 = new Enemy(-150, 140, 40);
var enemy3 = new Enemy(-220, 230, 90);


// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];
// Place the player object in a variable called player
var player = new Player();

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

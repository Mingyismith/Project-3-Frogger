class Entity{
  constructor(){
      this.sprite = 'images/';
      this.x = 2;
      this.y = 5;
  }

  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }
}

class Player extends Entity{
  constructor(){
      super();
      this.sprite += 'char-pink-girl.png';

  }

}

const player = new Player();
const allEnemies = [...Array(3)].map((_,i) => new Enemy(0,i+1));

class Enemy extends Entity{
  constructor(x, y){
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
  }
}

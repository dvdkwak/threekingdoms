var config = {
  type: Phaser.AUTO,
  height: 300,
  width: 800,
  pixelArt: true,
  parent: "my_canvas_battle",
  physics: {
    default: "arcade",
    arcade: {
      gravity: {y:0},
      debug: true
    }
  },
  scene: [
    Battle
  ]
};

var game = new Phaser.Game(config);

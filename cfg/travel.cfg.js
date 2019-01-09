var config = {
  type: Phaser.AUTO,
  height: 600,
  width: 800,
  parent: "my_canvas_travel",
  physics: {
    default: "arcade",
    arcade: {
      gravity: {y:0},
      debug: true
    }
  },
  scene: [
    World1
  ]
};

var game = new Phaser.Game(config);

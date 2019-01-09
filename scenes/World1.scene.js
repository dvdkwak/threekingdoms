var World1 = new Phaser.Class({

  Extends: Phaser.Scene,


  initialize:

  function World1()
  {
    Phaser.Scene.call(this);
  },

  preload: function()
  {
    console.log("______ Welcome to World1! ______ \n");
  },

  create: function()
  {
    // creating the player object and asinging some values
    this.player = new Player(this, 100, 100);
    this.player.setSize(32, 32);

    // creating a listener for the cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // assinging the controls to the player object
    this.player.setUpKey(this.cursors.up);
    this.player.setDownKey(this.cursors.down);
    this.player.setLeftKey(this.cursors.left);
    this.player.setRightKey(this.cursors.right);

    // let the main camera follow the player
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(2);

    // Zone group where battles will happen
    this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
    for(var i = 0; i < 30; i++) {
        var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
        this.spawns.create(x, y, 16, 16);
    }

    // adding an collision listener for player and the zones
    this.physics.add.overlap(this.player, this.spawns, this.onBattle, false, this);

    // some testing with error reporting for objects
    this.player.callErrors();
  },

  update: function()
  {
    this.player.update();
  },

  onBattle: function(player, zone)
  {
    // deleting the zone standing on to prevent repeating actions
    zone.destroy();

    // let the camera do cool stuff
    this.cameras.main.shake(800);
    this.cameras.main.flash(800);

    // after 800ms go to battle screen
    this.time.delayedCall(800, function(){
      window.location.replace("/battle");
    });
  }

});

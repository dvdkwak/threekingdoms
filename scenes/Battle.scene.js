var Battle = new Phaser.Class({

  Extends: Phaser.Scene,


  initialize:

  function Battle()
  {
    Phaser.Scene.call(this);
  },

  preload: function()
  {
    // assets
    this.load.image("hat-guy", "/assets/hat-guy.png");
    this.load.image("sensei", "/assets/sensei.png");

    console.log("\n ____ Welcome to the battle screen! ____\n");
  },

  create: function()
  {
    // array to keep track of all summoned minions (or sub characters)
    this.minions = [];

    // Player character
    this.minions[0] = new Creature(this, 120, 100, "hat-guy");
    this.minions[0].setSize(16, 24);
    this.minions[0].setDisplaySize(16*3, 22*3);
    this.minions[0].setAlliance("player");
    this.minions[0].setId(1);
    this.minions[0].setSpeed(100);
    this.minions[0].setName("Hat-Guy");

    // creating a minion for the player
    this.minions[1] = new Creature(this, 100, 200, "sensei");
    this.minions[1].setSize(16, 24);
    this.minions[1].setDisplaySize(16*3, 22*3);
    this.minions[1].setAlliance("player");
    this.minions[1].setId(2);
    this.minions[1].setSpeed(100);
    this.minions[1].setName("Sensei");


    // writing the Id's of all creatures to a hidden div to talk with the UI
    document.getElementById("hidden-data-text").innerText = this.minions[0].id + ":" +
                                                            this.minions[0].name + "," +
                                                            this.minions[1].id + ":" +
                                                            this.minions[1].name;
  },

  update: function()
  {
    // when you click in the screen the selected item id will be updated
   this.selectedCreatureId = $(".UI_select_fase > .selected > #id:text").val();

    if(this.selectedCreatureId == this.minions[0].id){
      this.minions.forEach(function(e){
        e.setTurn(false);
      });
      this.minions[0].setTurn(true);
      console.log("Hat-Guy should be active now");
    }else if(this.selectedCreatureId == this.minions[1].id){
      this.minions.forEach(function(e){
        e.setTurn(false);
      });
      this.minions[1].setTurn(true);
      console.log("Sensei should be active now");
    }else{
      this.minions.forEach(function(e){
        e.setTurn(false);
      });
    }

    this.minions[0].update();
    this.minions[1].update();
  }

});

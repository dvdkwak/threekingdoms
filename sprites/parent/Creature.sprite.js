class Creature extends Phaser.GameObjects.Sprite
{

  constructor(scene, x, y, texture)
  {
    super(scene, x, y, texture);
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.setAlliance("nobody!"); // default set the alliance to something stupid
    this.setName("Creature-007"); // default set the name to something stupid
    this.setLife(999); // default set Life on something ... stupid, yes - AGAIN!
    this.setArmor(999); // default... stupid
    this.setAttackDamage(999); // default...
    this.setDamage(0); // Zero damage! :D:D:D didn't see that one comming eeh? ˆˆ
    this.setTurn(false); // by default it is not this creatures turn
    this.setActionPoints(999); // give this creature unlimited action point
  }

  update()
  {
    // setting the right depth
    this.setDepth(this.y);

    // if this creature is active and still has actionPoints it can move to a new zone
    if(this.turn && this.actionPoints > 0){

      // standard putting the body velocity to zero
      this.body.setVelocity(0);

      // moving commands block
      if(this.cursors.up.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown){
        this.body.setVelocityY(-this.speed);
      }else if(this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown){
        this.body.setVelocityY(this.speed);
      }
      if(this.cursors.left.isDown){
        this.body.setVelocityX(-this.speed);
      }else if(this.cursors.right.isDown){
        this.body.setVelocityX(this.speed);
      }
      // end of moving commands block

    }
  }


  // function to check if damage is equal or higher than the life of the creature
  // if true --> the creature dies
  checkDamage()
  {
    if(this.damage >= this.life){
      // here the creature should die
      return true;
    }
    // Yeej! I am still alive! ˆˆ
    return false;
  }



  // ** SETTERS **

  // setting the allianca (player team or non-player team)
  setAlliance(alliance)
  {
    this.alliance = alliance;
  }

  // setting the creature name
  setName(name)
  {
    this.name = name;
  }

  // setting the base amount of health
  setLife(life)
  {
    this.life = life;
  }

  // setting the base amount of armor
  setArmor(armor)
  {
    this.armor = armor;
  }

  // setting the amount of damage die for a light attack
  setAttackDamage(attackDamage)
  {
    this.attackDamage = attackDamage;
  }

  // set the amount of damage to this creature
  setDamage(damage)
  {
    this.damage = damage;
  }

  // set this turn on true or false
  setTurn(boolean)
  {
    this.turn = boolean;
  }

  // set the amount of action points to this creature
  setActionPoints(actionPoints)
  {
    this.actionPoints = actionPoints;
  }

  // setting the body size of the object
  setSize(h, w = null)
  {
    if(w){
      this.body.setSize(h, w);
    }else{
      this.body.setSize(h);
    }
  }

  setId(id)
  {
    this.id = id;
  }

  // set movement speed
  setSpeed(speed)
  {
    this.speed = speed;
  }



  // ** LOGICS FUNCTIONS **

  // add a number of life to the life pool (DONT USE FOR KEEPING TRACK OF DAMAGE)
  addLife(life)
  {
    this.life += life;
  }

  // add a number of damage
  addDamage(damage)
  {
    let check = this.damage + damage;
    if(check <= 0){
      this.damage = 0;
    }else{
      this.damage += damage;
    }
  }

  // add a number of actionPoints (or substract)
  addActionPoints(ap)
  {
    this.actionPoints += ap;
  }

  // add or substract armor
  addArmor(armor)
  {
    let check = this.armor + armor;
    if(check <= 0){
      this.armor = 0;
    }else{
      this.armor += armor;
    }
  }

  // add or substract attackDamage
  addAttackDamage(ad)
  {
    let check = this.attackDamage + ad;
    if(check <= 0){
      this.attackDamage = 0;
    }else{
      this.attackDamage += ad;
    }
  }

} // end of Creature

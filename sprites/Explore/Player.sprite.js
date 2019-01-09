class Player extends Phaser.GameObjects.Sprite
{
  constructor(scene, x, y, texture)
  {
    super(scene, x, y, texture);
    scene.physics.world.enable(this);
    scene.add.existing(this);

    // default values
    this.setSpeed(100);
  }

  update()
  {
    this.body.setVelocity(0);
    if(this.upKey.isDown && !this.leftKey.isDown && !this.rightKey.isDown){
      this.body.setVelocityY(-this.speed);
    }else if(this.downKey.isDown && !this.leftKey.isDown && !this.rightKey.isDown){
      this.body.setVelocityY(this.speed);
    }
    if(this.leftKey.isDown){
      this.body.setVelocityX(-this.speed);
    }else if(this.rightKey.isDown){
      this.body.setVelocityX(this.speed);
    }
  }



  // ** SETTERS **


  setUpKey(upKey)
  {
    this.upKey = upKey;
  }

  setDownKey(downKey)
  {
    this.downKey = downKey;
  }

  setLeftKey(leftKey)
  {
    this.leftKey = leftKey;
  }

  setRightKey(rightKey)
  {
    this.rightKey = rightKey;
  }

  setSpeed(speed)
  {
    this.speed = speed;
  }

  setSize(w, h = null)
  {
    if(h == null){
      this.body.setSize(w);
    }else{
      this.body.setSize(w, h);
    }
  }

  // ERROR MESSAGE GENERATOR
  callErrors()
  {
    // when upKey is not set
    if(typeof this.upKey === 'undefined'){
      console.warn("You seem to have forgotten to set the upKey of this object! \nTo fix this use the setUpKey() method");
      console.log(this.upKey);
    }

    // when downKey is not set
    if(typeof this.downKey === 'undefined'){
      console.warn("You seem to have forgotten to set the downKey of this object! \nTo fix this use the setDownKey() method");
    }

    // when leftKey is not set
    if(typeof this.leftKey === 'undefined'){
      console.warn("You seem to have forgotten to set the leftKey of this object! \nTo fix this use the setLeftKey() method");
    }

    // when rightKey is not set
    if(typeof this.rightKey === 'undefined'){
      console.warn("You seem to have forgotten to set the rightKey of this object! \nTo fix this use the setRightKey() method");
    }
  }
}

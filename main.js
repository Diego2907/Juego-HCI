import { palabra } from './Control-de-voz.js';


const config = {
  type: Phaser.AUTO,
  width: 800,  
  height: 500,
  backgroundColor: '#775353ff',
  parent: 'pantalla',
  physics:{
    default: 'arcade',
  },
  scene: { preload, create, update }
}
new Phaser.Game(config);




function preload() {
    this.load.image('escenario1', 'Assets/Background/escenario principal terror.png' )
    this.load.spritesheet(
        'jugador',
        'Assets/Personaje principal/Personaje_caminando.png', 
        { frameWidth: 64, frameHeight: 64 }
    )

    
}
function create() {
  this.add.image(420, 261, "escenario1")
    .setOrigin(0.5,0.5)
    .setScale(1.5);
  this.jugador = this.physics.add.sprite(400, 300, 'jugador')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setScale(2.5)
  ;
  this.anims.create({
        key: 'jugador-camina-abajo',
        frames: this.anims.generateFrameNumbers(
          'jugador', 
          { start: 0, end: 5 }
        ),
        frameRate: 17 ,
        repeat: 1
    });

    this.anims.create({
        key: 'jugador-camina-izquierda',
        frames: this.anims.generateFrameNumbers(
          'jugador', 
          { start: 6, end: 11 }
        ),
        frameRate: 17 ,
        repeat: 1
    });

    this.anims.create({
        key: 'jugador-camina-derecha',
        frames: this.anims.generateFrameNumbers(
          'jugador', 
          { start: 12, end: 17 }
        ),
        frameRate: 17 ,
        repeat: 1
    });

    this.anims.create({
        key: 'jugador-camina-izquierda',
        frames: this.anims.generateFrameNumbers(
          'jugador', 
          { start: 18, end: 23}
        ),
        frameRate: 17 ,
        repeat: 1
    });

    this.anims.create({
        key: 'jugador-camina-arriba',
        frames: this.anims.generateFrameNumbers(
          'jugador', 
          { start: 18, end: 23}
        ),
        frameRate: 17 ,
        repeat: 1
    });


  this.keys = this.input.keyboard.createCursorKeys();
}
function update() {
  if(this.keys.left.isDown || palabra === "izquierda") {
    this.jugador.anims.play('jugador-camina-izquierda', true);
    this.jugador.x -= 5;
  }else if(this.keys.right.isDown || palabra === "derecha") {
    this.jugador.anims.play('jugador-camina-derecha', true);
    this.jugador.x += 5;
  }else if(this.keys.up.isDown || palabra === "arriba" ) {
    this.jugador.anims.play('jugador-camina-arriba', true);
    this.jugador.y -= 5;
  }
  else if(this.keys.down.isDown || palabra === "abajo") {
    this.jugador.anims.play('jugador-camina-abajo', true);
    this.jugador.y += 5;
  } else {
    this.jugador.anims.stop();
    this.jugador.setFrame(0);
  }
}
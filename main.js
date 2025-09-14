import { palabra } from './Control-de-voz.js';


const config = {
  type: Phaser.AUTO,
  width: 800,  
  height: 600,
  backgroundColor: '#775353ff',
  parent: 'pantalla',
  physics:{
    default: 'arcade',
  },
  scene: { preload, create, update }
}
new Phaser.Game(config);


let jugador;
let keys;


function preload() {
    this.load.spritesheet(
        'jugador1',
        'Assets/Personaje principal/Personaje_caminando.png', 
        { frameWidth: 64, frameHeight: 64 }
    )

    this.anims.create({
        key: 'jugador-camina-abajo',
        frames: this.anims.generateFrameNumbers(
          'jugador1', 
          { start: 0, end: 9 }
        ),
        repeat: -1
    });
}
function create() {
  jugador = this.physics.add.sprite(400, 300, 'jugador1')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setScale(2.5)
  ;
  keys = this.input.keyboard.createCursorKeys();
}
function update() {
  if(keys.left.isDown || palabra === "izquierda") {
    jugador.x -= 5;
  }else if(keys.right.isDown || palabra === "derecha") {
    jugador.x += 5;
  }else if(keys.up.isDown || palabra === "arriba") {
    // jugador.anims.play('jugador-camina-abajo', true);
    jugador.y -= 5;
  }
  else if(keys.down.isDown || palabra === "abajo") {
    jugador.y += 5;
  }
}
const config = {
  type: Phaser.AUTO,
  width: 800,  
  height: 600,
  backgroundColor: '#ffa0a0ff',
  parent: 'pantalla',
  scene: { preload, create, update }
}
new Phaser.Game(config);
let jugador;
let keys;
function preload() {
    this.load.spritesheet(
        'jugador1',
        'Assets/PNG/Unarmed/Sin_Sombra/Personaje_caminando.png', 
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
  jugador = this.add.sprite(400, 300, 'jugador1')
    .setOrigin(0, 1)
  ;
  keys = this.input.keyboard.createCursorKeys();
}
function update() {
  if(keys.left.isDown) {
    jugador.x -= 5;
  }else if(keys.right.isDown) {
    jugador.x += 5;
  }else if(keys.up.isDown) {
    jugador.anims.play('jugador-camina-abajo', true);
    jugador.y -= 5;
  }
  else if(keys.down.isDown) {
    jugador.y += 5;
  }
}
import { palabra } from '../../Control-de-voz.js';
import { firstRoomConfig } from '../config/firstRoomScene.config.js';
import { playerConfig } from '../config/player.config.js';

export class FirstRoomScene extends Phaser.Scene {
    constructor() {
        super({ key: 'FirstRoomScene' });
    }

    preload() {
        this.load.image(
            firstRoomConfig.background.key,
            firstRoomConfig.background.path
        );
        this.load.spritesheet(
            playerConfig.sprite.key,
            playerConfig.sprite.path,
            playerConfig.sprite.frameConfig
        );
        this.load.audio(
            playerConfig.sound.key,
            playerConfig.sound.path
        );
    }

    create() {
        this.createBackground();
        this.createPlayer();
        this.createAnimations();
        this.createControls();
    }

    createBackground() {
        this.add.image(
            firstRoomConfig.background.position.x,
            firstRoomConfig.background.position.y,
            firstRoomConfig.background.key
        )
            .setOrigin(
                firstRoomConfig.background.origin.x,
                firstRoomConfig.background.origin.y
            )
            .setScale(firstRoomConfig.background.scale);
    }

    createPlayer() {
        // Obtener posición inicial del jugador
        const playerX = firstRoomConfig.player.initialPosition.x || playerConfig.defaultPosition.x;
        const playerY = firstRoomConfig.player.initialPosition.y || playerConfig.defaultPosition.y;

        // Crear el sprite del jugador
        this.jugador = this.physics.add.sprite(playerX, playerY, playerConfig.sprite.key)
            .setOrigin(playerConfig.origin.x, playerConfig.origin.y)
            .setCollideWorldBounds(playerConfig.collideWorldBounds)
            .setScale(playerConfig.scale);

        // Configurar el sonido de pasos
        this.sonidoPasos = this.sound.add(
            playerConfig.sound.key,
            playerConfig.sound.config
        );
    }

    createAnimations() {
        // Crear todas las animaciones del jugador
        Object.entries(playerConfig.animations).forEach(([key, anim]) => {
            this.anims.create({
                key: key,
                frames: this.anims.generateFrameNumbers(
                    playerConfig.sprite.key,
                    { start: anim.start, end: anim.end }
                ),
                frameRate: anim.frameRate,
                repeat: anim.repeat
            });
        });
    }

    createControls() {
        this.keys = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.keys.left.isDown || palabra === "izquierda") {
            this.jugador.anims.play('jugador-camina-izquierda', true);
            this.jugador.x -= playerConfig.speed;
            if (!this.sonidoPasos.isPlaying) {
                this.sonidoPasos.play();
            }
        } else if (this.keys.right.isDown || palabra === "derecha") {
            this.jugador.anims.play('jugador-camina-derecha', true);
            this.jugador.x += playerConfig.speed;
            if (!this.sonidoPasos.isPlaying) {
                this.sonidoPasos.play();
            }
        } else if (this.keys.up.isDown || palabra === "arriba") {
            this.jugador.anims.play('jugador-camina-arriba', true);
            this.jugador.y -= playerConfig.speed;
            if (!this.sonidoPasos.isPlaying) {
                this.sonidoPasos.play();
            }
        } else if (this.keys.down.isDown || palabra === "abajo") {
            this.jugador.anims.play('jugador-camina-abajo', true);
            this.jugador.y += playerConfig.speed;
            if (!this.sonidoPasos.isPlaying) {
                this.sonidoPasos.play();
            }
        } else {
            this.jugador.anims.stop();
            this.jugador.setFrame(0);
            if (palabra==='para'){
            this.jugador.anims.stop();
            this.jugador.setFrame(0);
        }
        }
         
    }
}
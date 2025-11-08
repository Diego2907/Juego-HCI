export const playerConfig = {
    sprite: {
        key: 'jugador',
        path: '../Assets/Personaje principal/Personaje_caminando.png',
        frameConfig: {
            frameWidth: 64,
            frameHeight: 64
        }
    },
    defaultPosition: {
        x: 400,
        y: 300
    },
    scale: 2.5,
    origin: { x: 0, y: 1 },
    collideWorldBounds: true,
    animations: {
        'jugador-camina-abajo': {
            start: 0,
            end: 5,
            frameRate: 17,
            repeat: 1
        },
        'jugador-camina-derecha': {
            start: 12,
            end: 17,
            frameRate: 17,
            repeat: 1
        },
        'jugador-camina-izquierda': {
            start: 6,
            end: 11,
            frameRate: 17,
            repeat: 1
        },
        'jugador-camina-arriba': {
            start: 18,
            end: 23,
            frameRate: 17,
            repeat: 1
        }
    },
    sound: {
        key: 'pasosJugador',
        path: '../Assets/sounds/pisadas.mp3',
        config: {
            volume: 0.025,
            loop: false,
            rate: 2
        }
    },
    controls: {
        movement: {
            up: 'up',
            down: 'down',
            left: 'left',
            right: 'right'
        }
    },
    speed: 5
};
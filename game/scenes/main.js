import { MenuScene } from "./menuScene.js";
import { FirstRoomScene } from "./firstRoomScene.js";
import { display } from "../config/display.config.js";

const config = {
  type: Phaser.AUTO,
  width: display.width,
  height: display.height,
  scene: [MenuScene, FirstRoomScene],
  physics: {
    default: "arcade"
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

new Phaser.Game(config);

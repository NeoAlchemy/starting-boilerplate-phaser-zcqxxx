import Phaser from 'phaser';
import { BootLevel } from './scenes/BootLevel';
import { SplashLevel } from './scenes/SplashLevel';
import { MainLevel } from './scenes/MainLevel';

// Import stylesheets
import './style.css';

/* -------------------------------------------------------------------------- */
/*                                RUN GAME.                                   */
/* -------------------------------------------------------------------------- */

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  backgroundColor: '0x000',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [BootLevel, SplashLevel, MainLevel],
};

const game = new Phaser.Game(config);

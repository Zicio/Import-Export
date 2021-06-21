/* eslint-disable max-classes-per-file */
// eslint-disable-next-line import/extensions
import character from './domain.js';

class Game {
  start() {
    console.log('game started');
  }
}
const game = new Game();
export default game;

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

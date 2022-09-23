import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  public fight(): number {
    if (this._player1.strength <= this._player2.defense
      && this._player2.strength <= this._player1.defense) {
      return 0;
    }
    if (this._player1.lifePoints > -1 && this._player2.lifePoints > -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      return this.fight();
    }
    return super.fight();
  }
}
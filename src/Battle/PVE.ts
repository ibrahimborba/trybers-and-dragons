import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  public fight(): number {
    const fightResults = this._monsters.map((monster) => {
      if (this.player.lifePoints === -1 || monster.lifePoints === -1) {
        return super.fight();
      }
      this.player.attack(monster);
      monster.attack(this.player);
      return this.fight();
    });

    if (fightResults.some((result) => result === -1)) return -1;
    return 1;
  }
}
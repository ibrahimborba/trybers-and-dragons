import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    if (damage > 0) {
      const newLifePoints = this.lifePoints - damage;
      if (newLifePoints <= 0) {
        this._lifePoints = -1;
        return this._lifePoints;
      }
      this._lifePoints = newLifePoints;
    }
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
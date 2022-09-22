import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get name(): string { return this._name; }
  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
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

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  private validateMaxPoints(value: number): number {
    if (value > this._race.maxLifePoints) {
      return this._race.maxLifePoints;
    }
    return value;
  }

  public levelUp(): void {
    const increment = getRandomInt(1, 10);
    const newMaxPoints = this._maxLifePoints + increment;
    const newStrength = this._strength + increment;
    const newDexterity = this._dexterity + increment;

    this._maxLifePoints = this.validateMaxPoints(newMaxPoints);
    this._strength = newStrength;
    this._dexterity = newDexterity;
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}
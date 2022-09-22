import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static countInstances = 0;

  constructor(name: string, dexterity :number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countInstances += 1; 
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  public static createdRacesInstances(): number {
    return Halfling.countInstances; 
  }
}
import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static countInstances = 0;

  constructor(name: string, dexterity :number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countInstances += 1; 
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  public static createdRacesInstances(): number {
    return Dwarf.countInstances; 
  }
}
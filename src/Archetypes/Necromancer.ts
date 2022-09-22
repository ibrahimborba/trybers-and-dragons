import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.countInstances += 1; 
  }

  get energyType(): EnergyType { return this._energyType; }

  public static createdArchetypeInstances(): number {
    return Necromancer.countInstances; 
  }
}
import { MonsterType } from '../utils/monster.utils';

export class Monster {
  name: string = 'My monster';
  image: string = 'assets/pika.jpg';
  type: MonsterType = MonsterType.ELECTRIC;
  hp: number = 40;
  figureCaption: string = 'N.001 Monster';

  attackName: string = 'Geo Impact';
  attackStrength: number = 60;
  attackDescription: string = 'lorem ipsum';
}

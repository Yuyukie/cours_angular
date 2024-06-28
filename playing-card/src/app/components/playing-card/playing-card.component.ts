import { MonsterType } from './../../utils/monster.utils';
import { Monster } from './../../models/monster.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  @Input() monster = new Monster();
  MonsterTypeIcon: string = 'assets/pika.jpg';
  backgroundColor: string = 'rgb(255,255,104)';
}

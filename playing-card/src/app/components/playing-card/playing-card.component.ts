import { Monster } from './../../models/monster.model';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  monster: InputSignal<Monster> = input(new Monster());
}

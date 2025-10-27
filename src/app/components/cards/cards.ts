import { Component, Input, Output } from '@angular/core';
import { Jogador } from '../../shared/models/Jogador';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
@Input() jogador!: Jogador;
}

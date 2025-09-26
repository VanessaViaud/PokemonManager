import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonInterface } from '../../models/pokemon';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.scss'],
})
export class Pokemon {
  @Input() pokemon!: PokemonInterface;

  @Output() evenementClicImage = new EventEmitter<string>();

  clicSurImage(nom: string) {
    this.evenementClicImage.emit(nom);
  }

  ngOnInit() {}
}

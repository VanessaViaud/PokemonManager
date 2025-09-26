import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonInterface } from '../../models/pokemon';
import { DecimalPipe } from '@angular/common';
import { Pokemon } from "../pokemon/pokemon";
import { PokemonsService } from '../../services/pokemons';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [DecimalPipe, Pokemon],
  templateUrl: './pokemons.html',
  styleUrls: ['./pokemons.scss'],
})
export class Pokemons {
  @Input() pokemon!: Pokemon;

  @Output() evenementClicImage = new EventEmitter();

  pokemonSelectionne: string | null = null;

  clicSurImage(nom: string) {
    this.pokemonSelectionne = nom;
  }
  pokemons: PokemonInterface[] = [];

  ngOnInit() {
     this.pokemons = PokemonsService.getPokemons();
  }
}
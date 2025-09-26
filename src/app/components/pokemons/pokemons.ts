import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonInterface } from '../../interfaces/pokemon';
import { DecimalPipe } from '@angular/common';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonsService } from '../../services/pokemons';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [DecimalPipe, Pokemon, ReactiveFormsModule],
  templateUrl: './pokemons.html',
  styleUrls: ['./pokemons.scss'],
})
export class Pokemons {
  @Input() pokemon!: Pokemon;
  @Output() evenementClicImage = new EventEmitter();

  pokemonSelectionne: string | null = null;
  pokemons: PokemonInterface[] = [];
  compte = 0;

  constructor(private servicePokemons: PokemonsService) {}

  //Affichage de la liste des Pokémons
  ngOnInit() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.compte = this.servicePokemons.comptagePokemons();
  }

  clicSurImage(nom: string) {
    this.pokemonSelectionne = nom;
  }

  // Recherche de Pokémon
  formRecherchePokemon: FormGroup = new FormGroup({
    recherche: new FormControl(''),
  });
  rechercher(nomDuPokemon: string) {
    this.pokemons = this.servicePokemons.rechercherPokemon(nomDuPokemon);
  }

  annulerRecherche() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.formRecherchePokemon.setValue({ recherche: '' });
  }

  onSubmit() {
    this.rechercher(this.formRecherchePokemon.value.recherche);
  }
}

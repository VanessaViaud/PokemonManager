import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonInterface } from '../../models/pokemon';
import { DecimalPipe } from '@angular/common';
import { Pokemon } from "../pokemon/pokemon";

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

  pokemons: PokemonInterface[] = [
    {
      id: '001',
      name: 'Bulbizarre',
      description: 'une graine de type plante et poison',
      height: 70,
      weight: 6.9,
      types: ['plante', 'poison'],
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      id: '002',
      name: 'Herbizarre',
      description: 'une graine de type plante et poison',
      height: 1,
      weight: 13,
      types: ['plante', 'poison'],
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      id: '003',
      name: 'Florizarre',
      description: 'une graine de type plante et poison',
      height: 2,
      weight: 100,
      types: ['plante', 'poison'],
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      id: '004',
      name: 'Salamèche',
      description: 'un lézard de type feu',
      height: 60,
      weight: 8.5,
      types: ['feu'],
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: '005',
      name: 'Reptincel',
      description: 'une flamme de type feu',
      height: 1.1,
      weight: 19,
      types: ['feu'],
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    {
      id: '006',
      name: 'Dracaufeu',
      description: 'une flamme de type feu et vol',
      height: 1.7,
      weight: 90.5,
      types: ['feu', 'vol'],
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
  ];

  ngOnInit() {}
}
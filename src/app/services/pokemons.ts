import { Injectable } from '@angular/core';
import { PokemonInterface } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
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

  getPokemons() {
    return this.pokemons;
  }

  comptagePokemons() {
    return this.pokemons.length;
  }

  rechercherPokemon(nomDuPokemon: string) {
    let regex = new RegExp(nomDuPokemon, 'gi');
    return this.pokemons.filter((pokemon) => pokemon.name.match(regex));
  }
}

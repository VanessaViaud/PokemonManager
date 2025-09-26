import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Generations } from "./components/generations/generations";
import { Pokemons } from "./components/pokemons/pokemons";
import { Pokemon } from "./components/pokemon/pokemon";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Generations, Pokemons, Pokemon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PokemonManager');
}

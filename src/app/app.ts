import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Generations } from "./components/generations/generations";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Generations],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PokemonManager');
}

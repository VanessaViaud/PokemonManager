
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

import { Generations } from './components/generations/generations';
import { Pokemons } from './components/pokemons/pokemons';
import { Pokemon } from './components/pokemon/pokemon';

export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'generations', component: Generations }, // liste des générations
	{ path: 'pokemons/:generation', component: Pokemons }, // liste des pokémons selon la génération
	{ path: 'pokemon/:nom', component: Pokemon }, // fiche d'un pokémon
	{ path: '', redirectTo: 'generations', pathMatch: 'full' },
];

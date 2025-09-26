
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

import { Generations } from './components/generations/generations';
import { Pokemons } from './components/pokemons/pokemons';
import { Pokemon } from './components/pokemon/pokemon';

export const routes: Routes = [
	{ path: 'login', component: Login },
	{ path: 'register', component: Register },
	{ path: 'generations', component: Generations },  
	{ path: 'pokemons/:generation', component: Pokemons },  
	{ path: 'pokemon/:nom', component: Pokemon },  
	{ path: '', redirectTo: 'generations', pathMatch: 'full' },
];

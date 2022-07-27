import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from "../mock-pokemons-list";
import { Pokemon } from "../pokemon";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}
  
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
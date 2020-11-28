import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../pokemon';
import {POKEMONS} from '../../shared/list.pokemons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
pokemons: Pokemon[] ;
  constructor(private router: Router ) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }
  selectPokemon(selectedPokemon: Pokemon): void {
    alert('Vous avez sélectionné : \'' + selectedPokemon.name + '\'');
    const link = [ '/pokemon', selectedPokemon.id];
    this.router.navigate(link);
  }
}

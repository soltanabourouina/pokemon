import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
 pokemons: Pokemon[] ;
  constructor(private router: Router, private pokemonService: PokemonsService ) { }

  ngOnInit(): void {
    //this.pokemons = POKEMONS;
  this.pokemons = this.pokemonService.getListPokemons();
  }
  selectPokemon(selectedPokemon: Pokemon): void {
  //  alert('Vous avez sélectionné : \'' + selectedPokemon.name + '\'');
    // passe en parametre l'url de la redirection + les parametre eventuels de la route
    const link = [ '/pokemon', selectedPokemon.id];
    this.router.navigate(link);
  }
}

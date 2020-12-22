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
  constructor(private router: Router, private pokemonsService: PokemonsService ) {}

  ngOnInit(): void {
    this.pokemonsService.getListPokemons()
      .subscribe(listPkm => this.pokemons = listPkm);
  }
  selectPokemon(selectedPokemon: Pokemon): void {
  const link = [ '/pokemon', selectedPokemon.id];
  this.router.navigate(link);
  }
}

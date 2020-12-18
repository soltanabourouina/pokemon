import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../pokemon';
import {PokemonsService} from '../pokemons.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {
singlePokemon: Pokemon = null;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.singlePokemon = this.pokemonService.getSinglePokemon(id);
  }

}

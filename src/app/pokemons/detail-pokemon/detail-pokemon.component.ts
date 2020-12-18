import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../pokemon';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  listOfPokemons: Pokemon[] = null;
  pokemonToDisplay: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router,
              private pokemonService: PokemonsService ) { }

  ngOnInit(): void {
    // this.listOfPokemons = this.pokemonService.getListPokemons();

    // Récupérer le paramètre de la route associée à notre composant
    // Snapshot: Récupérer le paramètre de manière synchrone.
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonToDisplay = this.pokemonService.getSinglePokemon(id);
  }
  goBack(){
    this.router.navigate(['/pokemon']);
  }
  editerPokemon(pokemonToEdit: Pokemon): void {
    const link = ['pokemon/edit', pokemonToEdit.id];
    this.router.navigate(link);
  }
}

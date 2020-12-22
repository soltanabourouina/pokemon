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
              private pokemonService: PokemonsService ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getSinglePokemon(id)
      .subscribe(pkm => this.pokemonToDisplay = pkm);
  }
  goBack(){
    this.router.navigate(['/pokemon']);
  }
  editerPokemon(pokemonToEdit: Pokemon): void {
    const link = ['pokemon/edit', pokemonToEdit.id];
    this.router.navigate(link);
  }
  deletePokemon(pokemon){
    if (confirm(`voullez vous vraiment supprimer le pokemon: ${pokemon.name}`)){
      this.pokemonService.deletePokemon(pokemon)
        .subscribe(() =>{
          const home = ['pokemon'];
          alert(`le pokémon ${pokemon.name} a été supprimé `);
          this.router.navigate(home);
        });
    }
  }
}

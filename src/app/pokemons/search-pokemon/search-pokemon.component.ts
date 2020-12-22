import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  constructor(private router: Router, private pokemonService: PokemonsService) { }
// Observable
  private searchTerms = new Subject();
  pokemons$: Observable<Pokemon[]>;


  ngOnInit(): void {
    // @ts-ignore
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime( 300),
     distinctUntilChanged(),
     switchMap((term: string) => this.pokemonService.searchPokemons(term)),
    );
  }
  search(term: string): void{
    this.searchTerms.next(term);
  }
  // tslint:disable-next-line:typedef
  gotoDetail(pokemon$){
    const link = ['pokemon/', pokemon$.id];
    this.router.navigate(link);
  }
}

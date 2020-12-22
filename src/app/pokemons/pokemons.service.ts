import { Injectable } from '@angular/core';
import {Pokemon} from '../pokemon';
import {POKEMONS} from '../shared/list.pokemons';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }
  /**
   * Récuperer la liste des pokémons
   */
  private pokemonsUrl = 'api/pokemons';
  private handleError<T>(operation= 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getListPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => console.log('fetched Pokemon')),
      catchError(this.handleError('getListPokemons', []))
    );
  }

  getSinglePokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;
    return  this.http.get<Pokemon>(url).pipe(
      tap(_ => console.log(`fetched Pokemon id= ${id}`)),
      catchError(this.handleError<Pokemon>(`Get pokemon id= ${id}`))
    );
  }
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };
    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => console.log(`Updated Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updates Pokemon'))
    );
  }
  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const deleteUrl = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };
    return this.http.delete(deleteUrl, httpOptions).pipe(
      tap(_ => console.log(`deleted Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('deleted Pokemon'))
    );
  }
  searchPokemons(term: string): Observable<Pokemon[]> {
    if (!term.trim ()){
      return of([]);
}
    return this.http.get<Pokemon[]>( `${this.pokemonsUrl}/?name=${term}`).pipe(
      tap( _ => console.log(`found pokemons matching"${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
    );
}
  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }
}

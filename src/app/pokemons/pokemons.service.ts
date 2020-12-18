import { Injectable } from '@angular/core';
import {Pokemon} from '../pokemon';
import {POKEMONS} from '../shared/list.pokemons';



@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }
  /**
   * Récuperer la liste des pokémons
   */
  getListPokemons(): Pokemon[] {
    return  POKEMONS;
  }

  getSinglePokemon(id: number): Pokemon {
const listPkms = this.getListPokemons();
return listPkms.find(pkm => pkm.id === id);
  }
  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }
}

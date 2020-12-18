import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
 @Input() pokemon: Pokemon; // propriété d'entrée du composant
  types: Array<string>;

  constructor(private router: Router, private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
  }
  hasType(type: string): boolean{
    const index = this.pokemon.types.indexOf(type);
    return  index > -1 ;
  }

  selectType($even: any, type: string): void {
    const checked = $even.target.checked;

    if (checked){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type);
      if (index > -1){
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  /**
   * methode appelée lorsque le formulaire est soumis
   */
  onSubmit(): void {
    console.log('Submit form');
    const link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }
}

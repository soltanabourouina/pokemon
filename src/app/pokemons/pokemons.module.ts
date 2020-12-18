import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPokemonComponent} from './list-pokemon/list-pokemon.component';
import {BorderCardDirective} from '../shared/directives/border-card.directive';
import {PokemonTypeColorPipe} from '../shared/pipes/pokemon-type-color.pipe';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import {FormsModule} from '@angular/forms';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    PokemonFormComponent,
    PokemonEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonsModule{ }

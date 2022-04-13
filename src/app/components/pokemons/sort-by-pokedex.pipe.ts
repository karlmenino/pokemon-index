import {Pipe, PipeTransform} from '@angular/core';
import {Pokemon} from "./models/pokemon";


@Pipe({
  name: 'sortByPokedex'
})
export class SortByPokedexPipe implements PipeTransform {

  transform(pokemons: Pokemon[], order: string): Pokemon[] {

    if (order === 'DESC') {
      return pokemons.sort((a: Pokemon, b: Pokemon) => b.id - a.id);
    } else {
      return pokemons.sort((a: Pokemon, b: Pokemon) => a.id - b.id);
    }
  }

}

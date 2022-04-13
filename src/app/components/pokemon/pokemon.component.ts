import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Pokemon } from '../pokemons/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {



  @Input()
  pokemon!: Pokemon;
  @Output()
  unEvenement = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  envoiePere() {

    this.unEvenement.emit(this.pokemon);
  }

}

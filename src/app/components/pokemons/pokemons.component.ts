import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./models/pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];
  sortByPokedexValue: string = "ASC";
  messageDuFils: string="";

  constructor() {
  }

  ngOnInit(): void {
    this.pokemons = [
      {
        id: 1,
        name: "Bulbizarre",
        category: "Graine",
        type: ["Poison", "Plante"],
        size: 0.7,
        weight: 6.9,
        image: "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png",
        selected: false
      },
      {
        id: 6,
        name: "Dracaufeu",
        category: "Flamme",
        type: ["Feu", "Vol"],
        size: 1.7,
        weight: 90.5,
        image: "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/250px-Dracaufeu-RFVF.png",
        selected: false
      },
      {
        id: 2,
        name: "Herbizarre",
        category: "Graine",
        type: ["Poison", "Plante"],
        size: 1,
        weight: 13,
        image: "https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/250px-Herbizarre-RFVF.png",
        selected: false
      },
      {
        id: 5,
        name: "Reptincel",
        category: "Flamme",
        type: ["Feu"],
        size: 1.1,
        weight: 19,
        image: "https://www.pokepedia.fr/images/thumb/6/64/Reptincel-RFVF.png/250px-Reptincel-RFVF.png",
        selected: false
      },
      {
        id: 3,
        name: "Florizarre",
        category: "Graine",
        type: ["Poison", "Plante"],
        size: 2,
        weight: 100,
        image: "https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/250px-Florizarre-RFVF.png",
        selected: false
      },
      {
        id: 4,
        name: "Salamèche",
        category: "Lézard ",
        type: ["Feu"],
        size: 0.6,
        weight: 8.5,
        image: "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png",
        selected: false
      }
    ]
  }

  sortOrder() {
    this.sortByPokedexValue = this.sortByPokedexValue === "ASC" ? "DESC" : "ASC";
  }

  receptionMessage(pokemon:Pokemon) {
    this.messageDuFils = pokemon.name;
    this.pokemons
      .map(x => {
        x.selected = false;
        return x;
      })
      .filter(x => x.id === pokemon.id)
      .map((x: Pokemon) => {
        x.selected = true;
        return x;
      });
  }
}


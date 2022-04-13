import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { GenerationsComponent } from './components/generations/generations.component';
import {registerLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { SortByPokedexPipe } from './components/pokemons/sort-by-pokedex.pipe';
import { PokemonComponent } from './components/pokemon/pokemon.component';
registerLocaleData(localeFR);
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    GenerationsComponent,
    SortByPokedexPipe,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

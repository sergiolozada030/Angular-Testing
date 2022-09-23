import { Pokemon } from './../interface/pokemon.interface';
import { PokemonService } from './../service/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.scss'],
})
export class CharizardComponent implements OnInit {
  public pokemon?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }
}

import { Component } from '@angular/core';
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent {
  id: string = '';
  pokemonSelect: string = '';
  filtre: string = '';

  pokemons = [new Pokemon("4", "Salamèche"),
    new Pokemon("25","Pikachu"),
    new Pokemon("59", "Arcanin"),
    new Pokemon("54", "Psykokwak"),
    new Pokemon("69", "Chétiflor")];


  buttonClick() {
    console.log("pokemon recherché ", this.filtre)
  }
}

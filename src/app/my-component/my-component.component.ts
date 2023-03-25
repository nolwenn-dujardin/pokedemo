import { Component } from '@angular/core';
import {PokeDescr, PokeDetail, Pokemon} from "../pokemon";
import {PokeApiService} from "../poke-api.service";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeApiService]
})
export class MyComponentComponent {
  id: string = '';
  pokemonSelect: string = '';
  filterPokeName = '';

  //Info : Max 1281 pokemons
  pokemons : Pokemon[] = []
  pokeDetail! : PokeDetail
  pokeDescr! : PokeDescr

  limit = 50;
  count = '';

  date!: Date
  checked = true

  constructor(private pokeService: PokeApiService, private pokeShareService: PokeShareInfoService) {}

  ngOnInit() {
    //Get a few pokemons from the Api and populate the list of pokemon
    this.pokeService.getPokeList(this.limit).subscribe((data) => {
      console.log(data)
      this.count = data.count

     data.results.forEach((e, index) => {
       //Add 1 to index since pokemon id start at 1
        this.pokemons.push(new Pokemon((index+1).toString(),e.name))
      })
      console.log(this.pokemons)
    })
  }

  /**
   * Fetch detail from pokemon selected (if not empty)
   */
  buttonClick() {
    console.log("pokemon recherché ", this.filterPokeName)
    console.log("pokemon sélectionné ", this.pokemonSelect)

    if(this.pokemonSelect != ''){
      this.pokeShareService.setValue(this.pokemonSelect)

      this.pokeService.getPokeInfo(this.pokemonSelect).subscribe((data) => {
        this.pokeDetail = data
        console.log(data)
      })

      this.getPokedexDescription()
    }
  }

  /**
   * Fetch more pokemon from the api and add them to the list of already fetched pokemon
   */
  getMorePokemon(){
    let offset = this.pokemons.length
    this.pokeService.getMorePoke(this.limit, offset).subscribe((data) => {
      console.log(data)
      let length = this.pokemons.length

      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon((index+length+1).toString(),e.name))
      })
      console.log(this.pokemons)
    })
  }

  /**
   * Get information about the pokemon selected from the pokedex
   */
  getPokedexDescription() {
    this.pokeService.getPokeDescr(this.pokemonSelect).subscribe((data => {
      this.pokeDescr = data
      console.log("descr", data.flavor_text_entries)
    }))


  }

}

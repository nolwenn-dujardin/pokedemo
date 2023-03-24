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
  pokemons : Pokemon[] = []
  pokeDetail! : PokeDetail
  pokeDescr! : PokeDescr

  limit = 0;
  offset = 1;

  date!: Date
  checked = true

  constructor(private pokeService: PokeApiService, private pokeShareService: PokeShareInfoService) {}

  ngOnInit() {
    this.pokeService.getPokeList().subscribe((data) => {
      console.log(data)

     data.results.forEach((e, index) => {
       //Add 1 to index since pokemon id start at 1
        this.pokemons.push(new Pokemon((index+1).toString(),e.name))
      })
      console.log(this.pokemons)
    })
    this.limit = this.pokemons.length
  }

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

  getMorePokemon(){
    this.pokeService.getMorePoke(this.offset).subscribe((data) => {
      console.log(data)
      length = this.pokemons.length + this.limit * this.offset +1

      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon((index+length).toString(),e.name))
      })
      this.offset++
      console.log(this.pokemons)
    })
  }

  getPokedexDescription() {
    this.pokeService.getPokeDescr(this.pokemonSelect).subscribe((data => {
      this.pokeDescr = data
      console.log("descr", data.flavor_text_entries)
    }))


  }

}

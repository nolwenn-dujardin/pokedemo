import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeDescr, PokeDetail, PokeServiceRes} from "./pokemon";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const apiPokedexUrl = 'https://pokeapi.co/api/v2/pokemon-species/';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) { }

  //Can be remove, since we can use getMorePoke(limit, offset) with an offset of 0
  getPokeList(limit: number): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(apiUrl+"?limit="+limit)
  }

  getMorePoke(limit: number, offset: number) : Observable<PokeServiceRes> {
    console.log(apiUrl+"?limit="+limit+"&offset="+offset)
    return this.http.get<PokeServiceRes>(apiUrl+"?limit="+limit+"&offset="+offset)
  }

  getPokeInfo(poke: string): Observable<PokeDetail> {
    console.log(apiUrl+poke)
    return this.http.get<PokeDetail>(apiUrl + poke)
  }


  getPokeDescr(poke: string): Observable<PokeDescr> {
    console.log(apiPokedexUrl+poke)
    return this.http.get<PokeDescr>(apiPokedexUrl + poke)
  }
}

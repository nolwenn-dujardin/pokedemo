import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeDescr, PokeDetail, PokeServiceRes} from "./pokemon";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const apiPokedexUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
const limit = 50;

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) { }

  getPokeList(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(apiUrl+"?limit="+limit)
  }

  getMorePoke(nb: number) : Observable<PokeServiceRes> {
    console.log(apiUrl+"?limit="+limit+"&offset="+limit*nb)
    return this.http.get<PokeServiceRes>(apiUrl+"?limit="+limit+"&offset="+limit*nb)
  }


  getPokeInfo(poke: string): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(apiUrl + poke)
  }


  getPokeDescr(poke: string): Observable<PokeDescr> {
    return this.http.get<PokeDescr>(apiPokedexUrl + poke)
  }
}

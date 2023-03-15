import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeDetail, PokeServiceRes} from "./pokemon";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) { }

  getPokeList(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(apiUrl)
  }

  getPokeInfo(poke: string): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(apiUrl + poke)
  }
}

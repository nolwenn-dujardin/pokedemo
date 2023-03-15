import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<string>()

  constructor() { }

  getObservable(): Subject<string> {
    return this.stringVar
  }

  setValue(newStringVar: string) {
    this.stringVar.next(newStringVar)
  }
}

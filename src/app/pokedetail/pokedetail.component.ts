import {Component, Input, OnInit} from '@angular/core';
import {PokeDescr, PokeDetail} from "../pokemon";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers: []
})
export class PokedetailComponent {

  @Input('detail')
  detail!: PokeDetail

  @Input('descr')
  descr!: PokeDescr

  flavorText = []

  constructor(private pokeShareService: PokeShareInfoService) {
    this.pokeShareService.getObservable().
      subscribe(e => console.log('e',e))
  }

  ngOnInit() : void { }

}

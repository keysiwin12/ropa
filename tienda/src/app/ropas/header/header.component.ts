import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RopasService } from '../servicios/ropas.service';
import { element } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private ropasService : RopasService) { }

  ngOnInit() {
    this.getNameRopas()
  }
  name : string = '';

  nameSearch() {
    console.log(this.name)
    this.router.navigate(['buscar',this.name])
  }

   nombresRopas = [
    'camisa','pantalon'
  ]

  getNameRopas() : Array<String> {
    let ropas : Array<object> = this.ropasService.getRopas();
    let namesRopas : Array<string> = [];
    ropas.forEach(element  => {
      if(!namesRopas.includes(element['nombre']))
       namesRopas.push(element['nombre'])
    })
    return namesRopas
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.getNameRopas().filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}

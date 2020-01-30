import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RopasService } from '../servicios/ropas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  nameRopa :any 
  ropas : any;
  constructor(private _ac : ActivatedRoute ,private ropasService : RopasService ,private router : Router) {
    this._ac.params.subscribe(response => {
      this.nameRopa = response.nombre.toLowerCase();    
      this.ropas = this.ropasService.getNombre(response.nombre);
      console.log(this.ropas);
    })
   }

  ngOnInit() {
  }

  verDetalle(nombre : string) {
    console.log(nombre);
    this.router.navigate(['ropas',nombre]);
  }

}

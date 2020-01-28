import { Component, OnInit } from '@angular/core';
import { RopasService } from '../servicios/ropas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prendas',
  templateUrl: './prendas.component.html',
  styleUrls: ['./prendas.component.css']
})
export class PrendasComponent implements OnInit {

  constructor(private ropasService : RopasService , private router : Router) {
    this.ropas = ropasService.getRopas();
   }

  ropas : Array<object>
  ngOnInit() {
    console.log(this.ropas);
  }


  verDetalle(nombre : string) {
    console.log(nombre);
    this.router.navigate(['ropas',nombre]);
  }
}

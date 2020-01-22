import { Component, OnInit } from '@angular/core';
import { RopasService } from '../servicios/ropas.service';

@Component({
  selector: 'app-prendas',
  templateUrl: './prendas.component.html',
  styleUrls: ['./prendas.component.css']
})
export class PrendasComponent implements OnInit {

  constructor(private ropasService : RopasService) {
    this.ropas = ropasService.getRopas();
   }

  ropas : Array<object>
  ngOnInit() {
    console.log(this.ropas);
  }

}

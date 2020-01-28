import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopasService } from '../servicios/ropas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  ropa :object;
  constructor(private _ac : ActivatedRoute , private ropasService : RopasService) { 
    this._ac.params.subscribe(response => {
      this.ropa =  this.ropasService.getNombre(response.nombre)[0];
      console.log(this.ropa);
    })
  }

  ngOnInit() {
  }

}

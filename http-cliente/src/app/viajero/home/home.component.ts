import { Component, OnInit } from '@angular/core';
import { ViajeroService } from '../servicios/viajero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public paises: any;
  constructor(private viajeroService : ViajeroService) {
    this.viajeroService.getPaises().subscribe(response=>{
      this.paises = response;
    },
    error=> {
      console.log(error);
    }
    )
   }

  ngOnInit(
    
  ) {
  }

}

import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/componentes/service/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private personasService : PersonasService) { 
     this.personas = personasService.getPersonas();
  }
  personas : Array<any>;

  ngOnInit() {
    console.log(this.personas)
  }

  
}

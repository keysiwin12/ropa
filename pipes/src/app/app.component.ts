import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numeros : number[]= [1,2,3,4,5,6,7,8,9,10];

  title : string = "pipes1";
  apellido : string = "MORALES";
  nombre : string   = "nefeli";
  decimal : number = 3.1416;
  porcentaje : number = 0.34298;
  dinero :number = 35;
  fecha = new Date();
  ejemplo : string = "ewrerewr";
  contra : string = "contrawererwqwewe"
  ejempJson : Array<object> =
  [ 
    {
      nombre : 'luz',
      apellido : 'perez',
      edad : 12
    },
    {
      nombre : 'erika',
      apellido : 'cardenas',
      edad : 11
    },
    {
      nombre : 'mabel',
      apellido : 'Ayllon',
      edad : 25
    }
  ]

  boolVer :boolean = false
  contra2= "password";
  ocultarVer() {   
    this.boolVer = !this.boolVer;   
  }

}




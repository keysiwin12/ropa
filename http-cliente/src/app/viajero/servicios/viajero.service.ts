import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  constructor( private http  : HttpClient) {
    console.log('hola');  
   }

   getPaises()  {
     return this.http.get('https://restcountries.eu/rest/v2/lang/es');
   }
   
  
}

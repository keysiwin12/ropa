import { Pipe , PipeTransform } from "@angular/core";

@Pipe({name : 'ocultar'})

export class ocultarPipe implements PipeTransform {
    transform(value : any , estado:boolean) :any {   
      if(estado) {
        return "text";
      }
      else {
       return  "password";
      }    
      // return value      
  }
} 



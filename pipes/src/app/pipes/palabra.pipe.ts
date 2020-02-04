import { Pipe , PipeTransform } from "@angular/core";


@Pipe({name : 'palabra'})

export class palabraPipe implements PipeTransform {
    transform(value : any) :any {
        return `hola palabra ${value}`;
    }
} 




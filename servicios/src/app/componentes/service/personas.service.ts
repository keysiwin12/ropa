import {Injectable} from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class PersonasService {
    
    constructor() {

        console.log('servicio funcionando');
    }

    personas : Array<object> = [ 
        {
            nombre : 'Juan',
            decripcion : 'wererw',
            edad : 25,
            curso : 'html'
        },

        {
            nombre : 'Jose',
            decripcion : 'sadas',
            edad : 18,
            curso : 'css'
        },
        {
            nombre : 'Pedro',
            decripcion : 'hgjjhg',
            edad : 20,
            curso : 'css'
        }
    ]

    getPersonas() {
        return this.personas;
    }
}
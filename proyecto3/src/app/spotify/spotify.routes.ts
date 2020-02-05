import {RouterModule ,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { BuscarComponent } from './buscar/buscar.component';



const APP_ROUTE : Routes = [
    {path : 'home' , component : HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'buscar', component: BuscarComponent}
];
    


export const app_routing = RouterModule.forRoot(APP_ROUTE)
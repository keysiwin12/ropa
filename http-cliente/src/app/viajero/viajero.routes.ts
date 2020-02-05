import {RouterModule ,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LugaresComponent } from './lugares/lugares.component';


const APP_ROUTE : Routes = [
    {path : 'home' , component : HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'lugares', component: LugaresComponent}
];
    


export const app_routing = RouterModule.forRoot(APP_ROUTE)
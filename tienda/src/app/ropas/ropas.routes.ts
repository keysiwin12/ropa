import {RouterModule ,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PrendasComponent } from './prendas/prendas.component'
import { AboutComponent } from './about/about.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const APP_ROUTE : Routes = [
    {path : 'home' , component : HomeComponent},
    {path: '', component: HomeComponent},
    {path : 'ropas' , component : PrendasComponent},
    {path : 'about' , component : AboutComponent},
    {path : '**', component : PagenotfoundComponent},
    
]

export const app_routing = RouterModule.forRoot(APP_ROUTE)
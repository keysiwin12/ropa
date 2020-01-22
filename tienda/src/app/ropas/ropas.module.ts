import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RopasComponent } from './ropas.component';
import { FooterComponent } from './footer/footer.component';
import { PrendasComponent } from './prendas/prendas.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { app_routing } from './ropas.routes';
import { RopasService } from './servicios/ropas.service';



@NgModule({
  declarations: [RopasComponent, FooterComponent, PrendasComponent, HomeComponent, AboutComponent, PagenotfoundComponent],
  imports: [
    CommonModule,app_routing
  ],
  exports : [
    RopasComponent
  ],
  providers : [
    RopasService
  ]
})
export class RopasModule { }

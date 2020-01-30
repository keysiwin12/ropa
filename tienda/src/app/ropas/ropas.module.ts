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
import { HeaderComponent } from './header/header.component';
import { DetalleComponent } from './detalle/detalle.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [RopasComponent, FooterComponent, PrendasComponent, HomeComponent, AboutComponent, PagenotfoundComponent, HeaderComponent, DetalleComponent, SearchComponent],
  imports: [
    CommonModule,app_routing,FormsModule,
    NgbModule
  ],
  exports : [
    RopasComponent
  ],
  providers : [
    RopasService
  ],

})
export class RopasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajeroComponent } from './viajero.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LugaresComponent } from './lugares/lugares.component';
import { app_routing } from './viajero.routes';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    ViajeroComponent,
    HomeComponent,
    HeaderComponent,
    LugaresComponent
  ],
  imports: [
    CommonModule,
    app_routing,
    HttpClientModule
  ],
  exports : [
    ViajeroComponent
  ]
})
export class ViajeroModule { }

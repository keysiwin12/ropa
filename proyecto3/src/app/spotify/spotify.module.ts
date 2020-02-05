import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SpotifyComponent } from './spotify.component';
import { app_routing } from './spotify.routes';



@NgModule({
  declarations: [HeaderComponent, HomeComponent, BuscarComponent,SpotifyComponent],
  imports: [
    CommonModule,
    app_routing
  ],
  exports : [
    SpotifyComponent
  ]
})
export class SpotifyModule { }

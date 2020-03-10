import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SpotifyComponent } from './spotify.component';
import { app_routing } from './spotify.routes';
import {FormsModule} from '@angular/forms';
import { NoImagePipe } from './pipe/no-image.pipe';
import { ArtistComponent } from './artist/artist.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [HeaderComponent, HomeComponent, BuscarComponent,SpotifyComponent, NoImagePipe, ArtistComponent, LoadingComponent],
  imports: [
    CommonModule,
    app_routing,
    FormsModule
  ],
  exports : [
    SpotifyComponent
  ]
})
export class SpotifyModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpotifyModule } from './spotify/spotify.module';
import { HttpClientModule } from '@angular/common/http';
import { ArtistaComponent } from './artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
  ],
  imports: [
    BrowserModule,
    SpotifyModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

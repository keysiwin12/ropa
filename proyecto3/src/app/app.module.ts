import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpotifyModule } from './spotify/spotify.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SpotifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

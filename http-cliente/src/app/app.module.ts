import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViajeroModule } from './viajero/viajero.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ViajeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

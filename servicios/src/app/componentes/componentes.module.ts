import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas/personas.component';
import { ComponentesComponent } from './componentes.component';
import { PersonasService } from './service/personas.service';



@NgModule({
  declarations: [PersonasComponent,ComponentesComponent],
  imports: [
    CommonModule,
  ],
  exports : [
    ComponentesComponent
  ],
  providers : [
    PersonasService
  ]

})
export class ComponentesModule { }

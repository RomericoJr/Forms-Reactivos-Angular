import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBasicoComponent } from './form-basico/form-basico.component';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormAutoComponent } from './form-auto/form-auto.component';
import { SwitchesComponent } from './switches/switches.component';
import { ReacAutoComponent } from './reactiveForms/reac-auto/reac-auto.component';
import { ReacBasicoComponent } from './reactiveForms/reac-basico/reac-basico.component';
import { ReacDinamicoComponent } from './reactiveForms/reac-dinamico/reac-dinamico.component';



@NgModule({
  declarations: [
    FormBasicoComponent,
    FormDinamicoComponent,
    FormAutoComponent,
    SwitchesComponent,
    ReacAutoComponent,
    ReacBasicoComponent,
    ReacDinamicoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormBasicoComponent,
    FormDinamicoComponent,
    FormAutoComponent,
    SwitchesComponent,
    ReacAutoComponent,
    ReacBasicoComponent,
    ReacDinamicoComponent
  ]
})
export class PagesModule { }

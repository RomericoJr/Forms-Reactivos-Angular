import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBasicoComponent } from './pages/form-basico/form-basico.component';
import { FormDinamicoComponent } from './pages/form-dinamico/form-dinamico.component';
import { PagesModule } from './pages/pages.module';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Examen1Component } from './examen1/examen1.component';

@NgModule({
  declarations: [
    AppComponent,
    Examen1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HeaderModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

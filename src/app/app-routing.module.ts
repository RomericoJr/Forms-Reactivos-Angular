import { FormAutoComponent } from './pages/form-auto/form-auto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBasicoComponent } from './pages/form-basico/form-basico.component';
import { FormDinamicoComponent } from './pages/form-dinamico/form-dinamico.component';
import { SwitchesComponent } from './pages/switches/switches.component';
import { ReacAutoComponent } from './pages/reactiveForms/reac-auto/reac-auto.component';
import { ReacBasicoComponent } from './pages/reactiveForms/reac-basico/reac-basico.component';
import { ReacDinamicoComponent } from './pages/reactiveForms/reac-dinamico/reac-dinamico.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form-basico',
    component:FormBasicoComponent,
    // pathMatch: 'full'
  },
  {
    path: 'form-reactivo',
    component:FormDinamicoComponent,
  },
  {
    path: 'form-carro',
    component:FormAutoComponent,
  },
  {
    path: 'switch',
    component:SwitchesComponent
  },
  {
    path: 'form1',
    component:ReacAutoComponent
  },
  {
    path: 'form2',
    component:ReacBasicoComponent
  },
  {
    path: 'form3',
    component:ReacDinamicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

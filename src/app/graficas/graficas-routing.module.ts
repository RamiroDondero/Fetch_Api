import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { CirculoComponent } from './pages/circulo/circulo.component';
import { AreaComponent } from './pages/area/area.component';

const routes: Routes = [
  
  {
    path: '',
    children:[
      { path: 'barra', component: BarrasComponent},
      { path : 'dona', component : DonaComponent },
      { path : 'circulo' , component : CirculoComponent},
      { path: 'area' , component : AreaComponent},
      { path:  '**' , redirectTo: 'barra' }
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }

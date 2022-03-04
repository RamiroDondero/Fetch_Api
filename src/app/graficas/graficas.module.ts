import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { CirculoComponent } from './pages/circulo/circulo.component';
import { AreaComponent } from './pages/area/area.component';



@NgModule({
  declarations: [
    BarrasComponent,
    DonaComponent,
    CirculoComponent,
    AreaComponent,
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }

import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.css']
})
export class CirculoComponent {
  
   // Pie
   public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.labels,
    datasets: [ {
      data: this.changePrice,
      backgroundColor: ['#FDE90A', '#E6731B', '#FA02AC', '#090BE3', '#0AFDD5', '#1CFF03', '#E62200'] 
    } ]
  };
  public pieChartType: ChartType = 'pie';

  get labels (){
    return this.graficaService.labels;
  }

  get changePrice(){
    return this.graficaService.changePrice;
  }

  constructor(private graficaService :GraficasService) { }

  

}

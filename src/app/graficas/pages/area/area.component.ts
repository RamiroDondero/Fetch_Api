import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {

    // PolarArea
    // public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
    public polarAreaChartData: ChartData<'polarArea'> = {
      labels: this.polarAreaChartLabels,
      datasets: [ {
        data: this.changePrice ,
        label: 'Series 1',
        backgroundColor: ['#FDE90A', '#E6731B', '#FA02AC', '#090BE3', '#0AFDD5', '#1CFF03', '#E62200']
      } ]
      
    };

    public polarAreaLegend = true;
  
    public polarAreaChartType: ChartType = 'polarArea';

    get polarAreaChartLabels(){
      return this.graficaService.labels;
    }

    get changePrice(){
      return this.graficaService.changePrice;
    }
  
  constructor(private graficaService :GraficasService) { }

  

}

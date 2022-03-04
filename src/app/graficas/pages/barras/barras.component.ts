import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent {

  


  chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels:  this.labels,
    datasets: [

      { data: this.changePrice , label: 'Cryptos' , backgroundColor: '#0DFF99' },
    ]
  };

  get labels(){
    return this.coinsMarkethttp.labels;
  }

  get changePrice(){
    return this.coinsMarkethttp.changePrice;
  }


  constructor(private coinsMarkethttp : GraficasService) { }

 


 
}

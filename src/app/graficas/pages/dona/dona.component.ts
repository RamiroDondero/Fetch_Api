import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({ 
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {

  
  
  public doughnutChartData: ChartData<'doughnut'> = {
    
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: this.currentPrice , 
        backgroundColor: ['#FDE90A', '#E6731B', '#FA02AC', '#090BE3', '#0AFDD5', '#1CFF03', '#E62200'] 
      },
    ]
    
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  get doughnutChartLabels (){
    return this.getCoinMarkethttp.labels;
  }

  get currentPrice(){
    return this.getCoinMarkethttp.changePrice;
  }
  
  constructor(private getCoinMarkethttp : GraficasService) {  }
  
  

  

}

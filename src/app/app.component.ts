import { Component, OnInit } from '@angular/core';
import { GraficasService } from './graficas/services/graficas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Graficos';

  constructor(private graficosService:GraficasService){}

  ngOnInit(): void {
    this.graficosService.getCoinsMarketLabels();
    this.graficosService.getCoinsMarketData();
    // this.graficosService.getCoinsMarket().subscribe(data=>console.log(data));
  }
   

}

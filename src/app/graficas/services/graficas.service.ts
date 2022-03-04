import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Data } from '../interfaces/interface';

import {delay, map} from 'rxjs/operators';

import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private _labels : string[] = [];

  private _changePrice : number[]=[];

  private baseUrl : string = environment.baseUrl;

  get labels(){
    return [...this._labels];
  }

  get changePrice(){
    return [... this._changePrice];
  }

  constructor(private http: HttpClient ) { }

  getCoinsMarket():Observable<Data[]>{

     const url : string = `${this.baseUrl}?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false `;
        return  this.http.get<Array<Data>>(url);
  }

  getCoinsMarketLabels(){
    
    this.getCoinsMarket().pipe(
      
      map(data=>{
        const labels = data.map(item=>item.id);
        this._labels = labels;
      })

    )
    .subscribe(); 
  }

  getCoinsMarketData(){
    this.getCoinsMarket().pipe(
      map(data=>{
        const change_price = data.map(item=>item.price_change_percentage_24h);
        this._changePrice = change_price;
      })
    )
    .subscribe();
  }

  



}

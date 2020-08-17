import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap, map, filter } from 'rxjs/operators';
import { DailyFinancial, FishEntry } from '../interfaces';

@Injectable({
  providedIn: 'root'
})



export class DataService {
  private readonly _baseUrl: string = 'https://michaelb-aquarium-json-server.herokuapp.com'

  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  get financialsUrl() {return this._baseUrl + '/DailyFinancial'}
  get fishUrl() {return this._baseUrl + '/Fish'}

    constructor(private httpClient: HttpClient,
        injector: Injector) {

    }

    getAllFinancialsEndpoint<T>(): Observable<any> {
      return this.httpClient.get(this.financialsUrl, this.httpOptions).pipe();
    }

    addNewFinancialEndpoint<T>(data: DailyFinancial): Observable<any> {
      return this.httpClient.post(this.financialsUrl, data, this.httpOptions)
    }

    getAllFishEndpoint<T>(): Observable<any> {
      return this.httpClient.get(this.fishUrl, this.httpOptions).pipe();
    }

    addNewFishEndpoint<T>(data: FishEntry): Observable<any> {
      return this.httpClient.post(this.fishUrl, data, this.httpOptions)
    }

}

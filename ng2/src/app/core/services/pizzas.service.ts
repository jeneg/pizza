import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/map';
import {Pizza} from './pizza.model';



@Injectable()
export class PizzasService {

  constructor(
    private http: Http,
    private utils: UtilsService
  ) { }

  getPizzas(params?): Observable<Pizza[]> {
    return this.http.get(this.utils.getApiUrl('pizzas'), {search: params})
      .map((data) => data.json())
      .map((data) => data.data);
  }
}

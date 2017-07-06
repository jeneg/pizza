import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/map';
import {Pizza} from './pizza.model';
import {PizzaVariant} from "./pizza-variant.model";



@Injectable()
export class PizzasService {
  private pizzas: Pizza[];

  constructor(
    private http: Http,
    private utils: UtilsService
  ) { }

  getPizzas(params?): Observable<Pizza[]> {
    return this.http.get(this.utils.getApiUrl('pizzas'), {search: params})
      .map((data) => data.json())
      .map((data) => {
        let pizzas = <Pizza[]>data.data;

        pizzas.forEach(p => {
          if (Array.isArray(p.variants)) {
            p.variants.sort((a: PizzaVariant, b: PizzaVariant) => {
              return this.utils.localeCompare(a.name, b.name);
            })
          }
        });

        this.pizzas = pizzas;

        return pizzas;
      });
  }

  getPizzaById(id: string): Pizza {
    let foundPizza: Pizza = null;

    this.pizzas.some(p => {
      if (p._id === id) {
        foundPizza = p;
        return true;
      }
    });

    return foundPizza;
  }
}

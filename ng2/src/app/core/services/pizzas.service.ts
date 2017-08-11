import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {UtilsService} from './utils.service';
import {Pizza} from '../models/pizza.model';
import {PizzaVariant} from "../models/pizza-variant.model";



@Injectable()
export class PizzasService {
  private pizzas: Pizza[] = [];

  constructor(
    private http: Http,
    private utils: UtilsService
  ) { }

  getPizzas(params?): Observable<Pizza[]> {
    return this.http.get(this.utils.getApiUrl('pizzas'), {search: params})
      .map((data) => data.json())
      .map((data) => {
        let pizzas = <Pizza[]>data.data;

        pizzas.forEach(this.processPizza.bind(this));

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

  getPizzaBySlug(slug: string): Observable<Pizza> {
    return this.http.get(this.utils.getApiUrl(`pizzas/${slug}`))
      .map((data) => data.json())
      .map((data) => {
        let pizza = <Pizza>data.data;

        this.processPizza(pizza);

        return pizza;
      });
  }

  private processPizza(pizza: Pizza) {
    if (Array.isArray(pizza.variants)) {
      pizza.variants.sort((a: PizzaVariant, b: PizzaVariant) => {
        return this.utils.localeCompare(a.name, b.name);
      });

      // todo..
      pizza.variants.forEach(v => {
        v.price = Math.ceil(v.price / 100 / 27);
      });

      pizza.ingredientsList = pizza.ingredients.map(i => i.name).join(', ');
    }
  }
}

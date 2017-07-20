import { Component, OnInit } from '@angular/core';
import {PizzasService} from "../core/services/pizzas.service";
import {Pizza} from "../core/services/pizza.model";
import {CartService} from "../core/services/cart.service";
import {PizzaVariant} from "../core/services/pizza-variant.model";

@Component({
  selector: 'pi-pizzas-page',
  templateUrl: './pizzas-page.component.html',
  styleUrls: ['./pizzas-page.component.scss']
})
export class PizzasPageComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(
    private pizzaService: PizzasService,
    private cart: CartService
  ) { }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(res => {
      this.pizzas = res;
      // console.log(res);
    })
  }

  onAddPizza(pizzaVariant: PizzaVariant) {
    this.cart.addToCart(pizzaVariant);
  }
}

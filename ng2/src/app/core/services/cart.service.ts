import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {PizzaVariant} from "./pizza-variant.model";
import {Pizza} from "./pizza.model";
import {PizzasService} from "./pizzas.service";
import {CartItem} from "./cart-item.model";

@Injectable()
export class CartService {
  private cartOpenedSource = new BehaviorSubject<boolean>(false);
  private cartItemsSource = new BehaviorSubject<CartItem[]>([]);

  cartOpened$ = this.cartOpenedSource.asObservable();
  cartItems$ = this.cartItemsSource.asObservable();

  constructor(
    private pizzaService: PizzasService
  ) { }

  openCart() {
    this.cartOpenedSource.next(true);
  }

  closeCart() {
    this.cartOpenedSource.next(false);
  }

  toggleCart() {
    let val = this.cartOpenedSource.getValue();
    this.cartOpenedSource.next(!val);
  }

  addToCart(pizzaVariant: PizzaVariant) {
    let items = this.cartItemsSource.getValue();
    let existItem;

    this.cartItemsSource.next([...items, this.composeCartItem(pizzaVariant)])

    //todo

    // items.some(item => {
    //   if (item.pizzaVariant && item.pizzaVariant.id === pizzaVariant.id) {
    //
    //   }
    // })
    console.log(pizzaVariant);
  }

  composeCartItem(pizzaVariant: PizzaVariant, quantity: number = 1) {
    let pizza: Pizza = this.pizzaService.getPizzaById(pizzaVariant.pizzaId);

    return {
      pizza,
      pizzaVariant,
      quantity
    }
  }


}

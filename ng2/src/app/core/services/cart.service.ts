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

  openCart(): void {
    this.cartOpenedSource.next(true);
  }

  closeCart(): void {
    this.cartOpenedSource.next(false);
  }

  toggleCart(): void {
    const val = this.cartOpenedSource.getValue();
    this.cartOpenedSource.next(!val);
  }

  addToCart(pizzaVariant: PizzaVariant): void {
    const items: CartItem[] = this.cartItemsSource.getValue();
    let existItem: CartItem;
    let nextValue;

    items.some(item => {
      if (item.pizzaVariant && item.pizzaVariant.id === pizzaVariant.id) {
        existItem = item;
        return true;
      }
    });

    if (existItem) {
      existItem.quantity++;
      nextValue = items;

    } else {
      nextValue = [...items, this.composeCartItem(pizzaVariant)];
    }

    this.cartItemsSource.next(nextValue);
  }

  getTotalPrice(): number {
    const cartItems: CartItem[] = this.cartItemsSource.getValue();

    return cartItems.reduce((total: number, i: CartItem) => {
      total += i.quantity * i.pizzaVariant.price;

      return total;
    }, 0);
  }

  private composeCartItem(pizzaVariant: PizzaVariant, quantity: number = 1): CartItem {
    const pizza: Pizza = this.pizzaService.getPizzaById(pizzaVariant.pizzaId);

    return {
      pizza,
      pizzaVariant,
      quantity
    }
  }


}

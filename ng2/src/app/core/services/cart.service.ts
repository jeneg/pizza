import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {PizzaVariant} from "./pizza-variant.model";
import {Pizza} from "./pizza.model";
import {PizzasService} from "./pizzas.service";
import {CartItem} from "./cart-item.model";
import {CartState} from "./cart-state.model";
import {OrderItem} from "./order-item.model";


@Injectable()
export class CartService {
  private cartOpenedSource = new BehaviorSubject<boolean>(false);
  private cartItemsSource = new BehaviorSubject<CartItem[]>([]);

  cartOpened$ = this.cartOpenedSource.asObservable();

  cartItems$ = this.cartItemsSource.asObservable();

  cart$ = new Observable<CartState>();

  constructor(
    private pizzaService: PizzasService
  ) {

    // todo find out better way
    this.cart$ = this.cartItemsSource.map((items: CartItem[]) => {
      return {
        items: items,
        itemsCount: this.getItemsCount(items),
        itemsPrice: this.getTotalPrice(items)
      }
    });
  }

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
    const existItem: CartItem = this.findCartItemByVariantId(pizzaVariant.id);
    let nextItemsValue;

    if (existItem) {
      existItem.quantity++;
      existItem.totalPrice = this.getCartItemTotalPrice(existItem);
      nextItemsValue = items;

    } else {
      nextItemsValue = [...items, this.composeCartItem(pizzaVariant)];
    }

    this.cartItemsSource.next(nextItemsValue);
  }

  removeFromCart(pizzaVariant: PizzaVariant) {
    const items: CartItem[] = this.cartItemsSource.getValue();
    const existItem: CartItem = this.findCartItemByVariantId(pizzaVariant.id);
    let nextItemsValue;

    if (existItem) {
      nextItemsValue = items.filter(i => i !== existItem);

      this.cartItemsSource.next(nextItemsValue);
    }
  }

  emptyCart() {
    this.cartItemsSource.next([]);
  }

  getOrderList(): OrderItem[] {
    const items: CartItem[] = this.cartItemsSource.getValue();

    return items.map(i => {
      return <OrderItem>{pizzaVariantId: i.pizzaVariant.id, quantity: i.quantity}
    })
  }

  private findCartItemByVariantId(id: string): CartItem {
    const items: CartItem[] = this.cartItemsSource.getValue();
    let existItem: CartItem = null;

    items.some(item => {
      if (item.pizzaVariant && item.pizzaVariant.id === id) {
        existItem = item;
        return true;
      }
    });

    return existItem;
  }

  private composeCartItem(pizzaVariant: PizzaVariant, quantity: number = 1): CartItem {
    const pizza: Pizza = this.pizzaService.getPizzaById(pizzaVariant.pizzaId);

    let item = {
      pizza,
      pizzaVariant,
      quantity,
      totalPrice: null
    };

    item.totalPrice = this.getCartItemTotalPrice(item);

    return item;
  }

  private getTotalPrice(items: CartItem[]): number {
    return items.reduce((total: number, i: CartItem) => {
      total += i.quantity * i.pizzaVariant.price;
      return total;
    }, 0);
  }

  private getCartItemTotalPrice(i: CartItem) {
    return i.quantity * i.pizzaVariant.price;
  }

  private getItemsCount(items: CartItem[]): number {
    return items.reduce((count: number, item: CartItem) => {
      count += item.quantity;

      return count;
    }, 0)
  }
}

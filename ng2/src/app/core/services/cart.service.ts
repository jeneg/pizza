import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class CartService {
  private cartOpenedSource = new BehaviorSubject<boolean>(false);

  cartOpened$ = this.cartOpenedSource.asObservable();

  constructor() { }

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



}

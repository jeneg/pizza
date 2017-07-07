import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Subscription} from "rxjs/Subscription";
import {CartItem} from "../../core/services/cart-item.model";

@Component({
  selector: 'pi-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit, OnDestroy {
  private itemsSubscribe: Subscription;
  cartItems: CartItem[];
  totalPrice: number;

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
    this.itemsSubscribe = this.cart.cartItems$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.totalPrice = this.cart.getTotalPrice();
      console.log(items);
    })
  }

  ngOnDestroy() {
    this.itemsSubscribe.unsubscribe();
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'pi-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit, OnDestroy {
  private itemsSubscribe: Subscription;

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
    this.itemsSubscribe = this.cart.cartItems$.subscribe(items => {
      console.log(items);
    })
  }

  ngOnDestroy() {
    this.itemsSubscribe.unsubscribe();
  }

}

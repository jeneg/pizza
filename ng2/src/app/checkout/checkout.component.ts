import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../core/services/cart.service";
import {CartState} from "../core/services/cart-state.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'pi-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartState: CartState;

  private subscription: Subscription;

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
    this.subscription = this.cart.cart$.subscribe((cartState: CartState) => {
      this.cartState = cartState;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

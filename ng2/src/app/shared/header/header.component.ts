import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";

@Component({
  selector: 'pi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // subscription: Subscription;
  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
    // this.subscription = this.cart.cartOpened$.su
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onCartClick() {
    this.cart.toggleCart();
  }

}

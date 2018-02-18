import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Subscription} from "rxjs/Subscription";
import {CartState} from "../../core/models/cart-state.model";

@Component({
  selector: 'pi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  itemsCount: number;

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
    this.subscription = this.cart.cart$.subscribe((state: CartState) => {
      this.itemsCount = state.itemsCount;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCartClick() {
    this.cart.toggleCart();
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Subscription} from "rxjs/Subscription";
import {CartItem} from "../../core/services/cart-item.model";
import {CartState} from "../../core/services/cart-state.model";
import {Router} from "@angular/router";

@Component({
  selector: 'pi-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit, OnDestroy {
  private itemsSubscribe: Subscription;
  cartState: CartState;
  totalPrice: number;

  constructor(
    private cart: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itemsSubscribe = this.cart.cart$.subscribe((cartState: CartState) => {
      this.cartState = cartState;
      // this.totalPrice = this.cart.getTotalPrice();
      // console.log(cartState);
    })
  }

  ngOnDestroy() {
    this.itemsSubscribe.unsubscribe();
  }

  removeItem(i: CartItem) {
    this.cart.removeFromCart(i.pizzaVariant);
    console.log(i)
  }

  goTo(path) {
    this.router.navigate([path]);
  }

}

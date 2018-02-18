import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CartService} from '../../../ng/src/app/core/services/cart.service';

@Component({
  selector: 'pi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private isCartSidebarOpened: boolean = true;
  private subscription: Subscription;

  constructor(
    private cart: CartService
  ) {}

  onSidebarClose() {
    this.cart.closeCart();
  }

  ngOnInit() {
    this.subscription = this.cart.cartOpened$.subscribe((cartStatus: boolean) => {
      this.isCartSidebarOpened = cartStatus;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

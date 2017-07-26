import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../core/services/cart.service";
import {CartState} from "../core/services/cart-state.model";
import {Subscription} from "rxjs/Subscription";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../core/services/order.service";
import {OrderForm} from "../core/services/order-form.model";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CheckoutModalComponent} from "./checkout-modal/checkout-modal.component";
import 'rxjs/add/operator/finally'

@Component({
  selector: 'pi-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  cartState: CartState;
  checkoutForm: FormGroup;

  private subscription: Subscription;

  constructor(
    private cart: CartService,
    private fb: FormBuilder,
    private order: OrderService,
    private router: Router,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.createForm();

    this.subscription = this.cart.cart$.subscribe((cartState: CartState) => {
      this.cartState = cartState;
    });
  }

  createForm(): void {
    this.checkoutForm = this.fb.group({
      name: ['name', Validators.required], // todo remove temp data
      email: ['email@as.ss', Validators.compose([Validators.required, Validators.email])],
      phone: ['phone', Validators.required],
      address1: ['address1', Validators.required],
      address2: '',
      notes: 'notes',
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      this.isLoading = true;

      this.order.makeOrder(<OrderForm>this.checkoutForm.value)
        .finally(() => this.isLoading = false)
        .subscribe(res => {
          this.modal.open(CheckoutModalComponent, {windowClass: 'dark-modal'}).result
            .then(() => {
              this.cart.emptyCart();
              this.router.navigate(['/']);
            })
        })

    } else {
      for (let c in form.controls) {
        form.controls[c].markAsTouched();
      }
    }
  }

  isInvalidAndTouched(control: FormControl): boolean {
    return control.invalid && control.touched;
  }
}

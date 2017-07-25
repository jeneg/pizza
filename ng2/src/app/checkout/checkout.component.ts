import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../core/services/cart.service";
import {CartState} from "../core/services/cart-state.model";
import {Subscription} from "rxjs/Subscription";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'pi-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartState: CartState;
  checkoutForm: FormGroup;

  private subscription: Subscription;

  constructor(
    private cart: CartService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();

    this.subscription = this.cart.cart$.subscribe((cartState: CartState) => {
      this.cartState = cartState;
    });
  }

  createForm() {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.required],
      address1: ['', Validators.required],
      address2: '',
      notes: '',
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {

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

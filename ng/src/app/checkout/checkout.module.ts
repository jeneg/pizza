import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CheckoutComponent} from "app/checkout/checkout.component";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';

const checkoutRouting: ModuleWithProviders = RouterModule.forChild([{
  path: 'checkout',
  component: CheckoutComponent
}]);


@NgModule({
  imports: [
    CommonModule,
    checkoutRouting,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CheckoutComponent,
    CheckoutModalComponent
  ],
  entryComponents: [
    CheckoutModalComponent
  ]
})
export class CheckoutModule { }

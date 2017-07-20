import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CheckoutComponent} from "app/checkout/checkout.component";
import {SharedModule} from "../shared/shared.module";

const checkoutRouting: ModuleWithProviders = RouterModule.forChild([{
  path: 'checkout',
  component: CheckoutComponent
}]);


@NgModule({
  imports: [
    CommonModule,
    checkoutRouting,
    SharedModule
  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }

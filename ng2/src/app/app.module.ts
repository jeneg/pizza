import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from '../../../ng/src/app/shared/shared.module';
import {PizzasPageModule} from '../../../ng/src/app/pizzas-page/pizzas-page.module';
import {CoreModule} from '../../../ng/src/app/core/core.module';
import {SidebarModule} from "ng-sidebar";
import {CheckoutModule} from "../../../ng/src/app/checkout/checkout.module";
import {PizzaPageModule} from "../../../ng/src/app/pizza-page/pizza-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PizzasPageModule,
    PizzaPageModule,
    CheckoutModule,
    SidebarModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

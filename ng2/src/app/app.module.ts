import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {PizzasPageModule} from './pizzas-page/pizzas-page.module';
import {CoreModule} from './core/core.module';
import {SidebarModule} from "ng-sidebar";
import {CheckoutModule} from "./checkout/checkout.module";
import {PizzaPageModule} from "./pizza-page/pizza-page.module";

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

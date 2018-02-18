import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {PizzasPageModule} from "./pizzas-page/pizzas-page.module";
import {PizzaPageModule} from "./pizza-page/pizza-page.module";
import {CheckoutModule} from "./checkout/checkout.module";
import {SidebarModule} from "ng-sidebar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    CoreModule,
    SharedModule,
    PizzasPageModule,
    PizzaPageModule,
    CheckoutModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

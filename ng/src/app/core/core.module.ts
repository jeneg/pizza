import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PizzasService} from './services/pizzas.service';
import {UtilsService} from './services/utils.service';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CartService} from "./services/cart.service";
import {OrderService} from "./services/order.service";

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  providers: [
    PizzasService,
    UtilsService,
    CartService,
    OrderService
  ]
})
export class CoreModule { }

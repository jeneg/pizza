import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PizzasService} from './services/pizzas.service';
import {UtilsService} from './services/utils.service';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  providers: [
    PizzasService,
    UtilsService
  ]
})
export class CoreModule { }

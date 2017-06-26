import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PizzasService} from './services/pizzas.service';
import {UtilsService} from './services/utils.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PizzasService,
    UtilsService
  ]
})
export class CoreModule { }

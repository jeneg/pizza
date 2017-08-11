import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaPageComponent } from './pizza-page.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const pizzaRouting: ModuleWithProviders = RouterModule.forChild([{
  path: 'pizza/:name',
  component: PizzaPageComponent
}]);


@NgModule({
  imports: [
    pizzaRouting,
    CommonModule,
    SharedModule,
    NgbModule
  ],
  declarations: [PizzaPageComponent]
})
export class PizzaPageModule { }

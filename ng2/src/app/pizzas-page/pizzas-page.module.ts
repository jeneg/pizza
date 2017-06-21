import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasPageComponent } from './pizzas-page.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const pizzasRouting: ModuleWithProviders = RouterModule.forChild([{
  path: 'pizzas',
  component: PizzasPageComponent
}]);

@NgModule({
  imports: [
    pizzasRouting,
    CommonModule,
    SharedModule
  ],
  declarations: [PizzasPageComponent]
})
export class PizzasPageModule { }

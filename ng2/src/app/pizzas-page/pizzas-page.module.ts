import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PizzasPageComponent} from './pizzas-page.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {PizzaFilterComponent} from './pizza-filter/pizza-filter.component';
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {PizzaItemComponent} from './pizza-item/pizza-item.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const pizzasRouting: ModuleWithProviders = RouterModule.forChild([{
  path: 'pizzas',
  component: PizzasPageComponent
}]);

@NgModule({
  imports: [
    pizzasRouting,
    CommonModule,
    SharedModule,
    NgbModule
  ],
  declarations: [PizzasPageComponent, PizzaFilterComponent, PizzaListComponent, PizzaItemComponent]
})
export class PizzasPageModule {
}

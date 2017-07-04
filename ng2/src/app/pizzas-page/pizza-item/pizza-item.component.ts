import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../core/services/pizza.model";
import {PizzaVariant} from "../../core/services/pizza-variant.model";

@Component({
  selector: 'pi-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;
  selectedVariant: PizzaVariant;

  constructor() {
  }

  ngOnInit() {
    this.selectedVariant = this.pizza.variants && this.pizza.variants[0];
  }

  ingredientsList() {
    return this.pizza.ingredients.map(i => i.name).join(', ');
  }

  formatPrice(price: number) {
    return Math.ceil(price / 100 / 27); // todo :D
  }

  selectVariant(variant: PizzaVariant) {
    this.selectedVariant = variant;
  }
}

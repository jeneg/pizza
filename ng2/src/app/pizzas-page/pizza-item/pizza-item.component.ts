import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../core/services/pizza.model";

@Component({
  selector: 'pi-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor() {
  }

  ngOnInit() {
  }

  ingredientsList() {
    return this.pizza.ingredients.map(i => i.name).join(', ');
  }

  getLowestPrice() {
    return Math.ceil(this.pizza.variants[0].price / 100);
  }
}

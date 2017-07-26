import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Pizza} from "../../core/models/pizza.model";
import {PizzaVariant} from "../../core/models/pizza-variant.model";

@Component({
  selector: 'pi-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Output() addedPizza: EventEmitter<PizzaVariant> = new EventEmitter<PizzaVariant>();

  selectedVariant: PizzaVariant;

  constructor() {
  }

  ngOnInit() {
    this.selectedVariant = this.pizza.variants && this.pizza.variants[0];
  }

  ingredientsList() {
    return this.pizza.ingredients.map(i => i.name).join(', ');
  }

  selectVariant(variant: PizzaVariant) {
    this.selectedVariant = variant;
  }

  onAdd() {
    this.addedPizza.emit(this.selectedVariant);
  }
}

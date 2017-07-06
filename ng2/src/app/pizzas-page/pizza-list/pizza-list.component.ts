import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Pizza} from "../../core/services/pizza.model";
import {PizzaVariant} from "../../core/services/pizza-variant.model";

@Component({
  selector: 'pi-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  @Input() pizzas: Pizza[] = [];
  @Output() addedPizzaVariant: EventEmitter<PizzaVariant> = new EventEmitter<PizzaVariant>();

  constructor() { }

  ngOnInit() {
  }

  onPizzaAdded(pizzaVariant: PizzaVariant) {
    this.addedPizzaVariant.emit(pizzaVariant);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../core/services/pizza.model";

@Component({
  selector: 'pi-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  @Input() pizzas: Pizza[] = [];

  constructor() { }

  ngOnInit() {
  }

}

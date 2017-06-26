import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pi-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  @Input() pizzas = [];

  constructor() { }

  ngOnInit() {
  }

}

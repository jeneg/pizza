import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pi-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza = {};
  constructor() {
  }

  ngOnInit() {
  }

}

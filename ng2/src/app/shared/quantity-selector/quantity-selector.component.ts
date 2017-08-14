import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pi-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent implements OnInit {
  @Input() count: number = 1;
  @Input() max = 100;
  @Input() min = 1;

  constructor() {
  }

  ngOnInit() {
  }

  more(): void {
    if (this.count < this.max) {
      this.count++;
    }
  }

  less(): void {
    if (this.count > this.min) {
      this.count--;
    }
  }
}

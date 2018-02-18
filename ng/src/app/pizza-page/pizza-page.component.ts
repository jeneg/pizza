import {Component, OnInit} from '@angular/core';
import {PizzasService} from "../core/services/pizzas.service";
import {ActivatedRoute} from "@angular/router";
import {Pizza} from "../core/models/pizza.model";

@Component({
  selector: 'pi-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.scss']
})
export class PizzaPageComponent implements OnInit {
  pizza: Pizza;
  count: number = 1;

  constructor(private pizzas: PizzasService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pizzas.getPizzaBySlug(params.name).subscribe((p: Pizza) => {
        this.pizza = p;
        console.log(p);
      });
    });
  }

  onRateChange() {
    console.log('rate change');
  }

}

import { Component, OnInit } from '@angular/core';
import {PizzasService} from "../core/services/pizzas.service";

@Component({
  selector: 'pi-pizzas-page',
  templateUrl: './pizzas-page.component.html',
  styleUrls: ['./pizzas-page.component.scss']
})
export class PizzasPageComponent implements OnInit {

  constructor(
    private pizzaService: PizzasService
  ) { }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(data => {
      console.log(data);
    })
  }

}

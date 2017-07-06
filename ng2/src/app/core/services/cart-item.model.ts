import {Pizza} from "./pizza.model";
import {PizzaVariant} from "./pizza-variant.model";

export class CartItem {
  pizza: Pizza;
  pizzaVariant: PizzaVariant;
  quantity: number;
}

import {PizzaVariant} from './pizza-variant.model';
import {Ingredient} from './ingredient.model';

export class Pizza {
  createdAt?: string;
  updatedAt?: string;
  _id: string;
  slug: string;
  name: string;
  variants: PizzaVariant[];
  ingredients: Ingredient[];
  images: string[];

  get ingredientsList() {
    return this.ingredients.map(i => i.name).join(', ');
  }
}

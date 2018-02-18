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
  rating: number;
  ingredientsList?: string;
}

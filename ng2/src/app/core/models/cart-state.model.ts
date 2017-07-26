import {CartItem} from "./cart-item.model";

export class CartState {
  items: CartItem[] = [];
  itemsPrice: number;
  itemsCount: number;
}

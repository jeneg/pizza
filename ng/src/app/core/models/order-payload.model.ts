import {OrderItem} from "./order-item.model";
import {OrderForm} from "./order-form.model";

export class OrderPayload {
  details: OrderForm;
  items: OrderItem[];
  userId?: string;
}

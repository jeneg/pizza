import {OrderItem} from "./order-item.model";
import {OrderForm} from "./order-form.model";

export class OrderPayload {
  form: OrderForm;

  items: OrderItem[];
  userId?: string;
}

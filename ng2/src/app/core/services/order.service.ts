import { Injectable } from '@angular/core';
import {CartService} from "./cart.service";
import {OrderPayload} from "./order-payload.model";
import {Http} from "@angular/http";
import {UtilsService} from "./utils.service";
import {OrderForm} from "./order-form.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrderService {

  constructor(
    private cart: CartService,
    private http: Http,
    private utils: UtilsService
  ) { };

  makeOrder(form: OrderForm): Observable<any> {
    let payload = this.composeOrderPayload(form);

    return this.http.post(this.utils.getApiUrl('order'), payload);
  }

  private composeOrderPayload(form): OrderPayload {
    let items = this.cart.getOrderList();

    return {
      userId: null, // todo
      items,
      form
    }
  }

}

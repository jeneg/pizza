import { Injectable } from '@angular/core';
import {CartService} from "./cart.service";
import {OrderPayload} from "./order-payload.model";
import {Http} from "@angular/http";
import {UtilsService} from "./utils.service";
import {OrderForm} from "./order-form.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {

  constructor(
    private cart: CartService,
    private http: Http,
    private utils: UtilsService
  ) { };

  makeOrder(form: OrderForm): Observable<any> {
    let payload = this.composeOrderPayload(form);

    return this.http.post(this.utils.getApiUrl('orders'), payload)
      .map((data) => data.json());
  }

  private composeOrderPayload(details: OrderForm): OrderPayload {
    let items = this.cart.getOrderList();

    return {
      userId: null, // todo
      items,
      details
    }
  }

}

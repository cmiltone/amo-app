import { Injectable }	from '@angular/core';
import { Http }			from '@angular/http';
import { Observable } 	from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Order }		from './data-models';

@Injectable()
export class OrderService {
	private ordersUrl = "../src/app/orders.json";
	constructor(
		private http: Http
	){}
	getOrders(type:string):Observable<Order[]>{
		return this.http
					.get(this.ordersUrl)
					.map(res => res.json().data as Order[])/**/
	}
}
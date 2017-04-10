import { Injectable }			from '@angular/core';
import { Http }					from '@angular/http';

import { Restaurant }			from './data-models';

import { Observable } 			from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class RestaurantService {
	private restaurantUrl = "../src/app/restaurants.json";
	constructor(private http: Http){}
	search(restaurant: any):Observable<Restaurant[]>{
		return this.http
					.get(`../src/app/restaurants.json`)/**/
					.map(res => res.json().data as Restaurant[])/**/
					/*.filter(function(res: any){
						console.log(res);
						return res == restaurant;
					})*/
	}
}
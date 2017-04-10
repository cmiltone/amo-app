import { Injectable }	from '@angular/core';
import { Http }			from '@angular/http';
import { Observable } 	from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { MealItem }			from './data-models';

@Injectable()
export class MealItemsService {
	private mealsUrl = "../src/app/restaurant-meals.json";
	constructor(
		private http: Http
	){}
	getMealItems():Observable<MealItem[]>{
		return this.http
					.get(this.mealsUrl)
					.map(res => res.json().data as MealItem[])/**/
	}
	getMeals(restaurant: any):Observable<MealItem[]>{
		return this.http
					.get(this.mealsUrl)
					.map((response) => response.json().data as MealItem[]);
					
	}
}
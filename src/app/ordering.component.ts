import { Component, OnInit }					from '@angular/core';
import { Router }								from '@angular/router';
import { Location }								from '@angular/common';
import { FormGroup, FormControl, Validators }	from '@angular/forms';

import { Order, Restaurant }							from './data-models';

import { MealItemsService }						from './meal-items.service';
import { RestaurantService }					from './restaurant.service';

import { Observable }							from 'rxjs/Observable';
import { Subject }								from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';



@Component({
	selector: 'ordering-component',
	templateUrl: './ordering.component.html',
	styleUrls: ['ordering.component.css'],
	providers: [
		RestaurantService
	]
})

export class OrderingComponent implements OnInit{
	private title: string;
	private form: FormGroup;
	private order: Order;
	private payLoad: any;

	private restaurant: string;
	private restaurants: Observable<Restaurant[]>;
	private searchTerms = new Subject<string>();
	constructor(
		private location: Location,
		private rs: RestaurantService,
		private router: Router
	){}
	ngOnInit(){
		this.form = new FormGroup({
			selectedMeals: new FormControl('', [Validators.required])
		});

		this.title = "Meal Ordering";
		this.restaurants = this.searchTerms
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(term => term 
				?this.rs.search(term) 
				: Observable.of<Restaurant[]>([]))
			.catch(error=>{
				console.log(error);
				return Observable.of<Restaurant[]>([]);
			});
	}
	searchRestaurant(term: string){
		this.searchTerms.next(term);
	}
	setRestaurant(restaurant: string){
		this.restaurant = restaurant;
	}
	placeOrder(): void{
		const timestamp = Date.now();
		this.order = {
			id: timestamp,
			date: new Date(timestamp).toString(),
			status: "Finalized",
			cost: this.form.value.selectedMeals.price,
			items: this.form.value.selectedMeals
		};
		this.title = "Order Made Successfully";
		this.payLoad = JSON.stringify(this.order);
		console.log(this.payLoad);
	}
}
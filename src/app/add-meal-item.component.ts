import { Component, OnInit, Input }				from '@angular/core';
import { Router }								from '@angular/router';
import { FormGroup, FormControl, Validators }	from '@angular/forms';
import { Location }								from "@angular/common";

import { Order, MealItem, Restaurant }			from './data-models';

import { MealItemsService }						from './meal-items.service';




@Component({
	selector: 'addmeal-component',
	templateUrl: './add-meal-item.component.html',
	styleUrls: ['add-meal-item.component.css'],
	providers: [
		MealItemsService
	]
})

export class AddMealComponent implements OnInit{
	private title: string;
	@Input() restaurant: Restaurant;
	@Input() form: FormGroup;

	private meals: MealItem[];
	constructor(
		private location: Location,
		private mis: MealItemsService,
		private router: Router
	){}
	ngOnInit(){
		console.log(this.form);
		this.title = "2. Add Meal Items";
		this.mis.getMeals(this.restaurant)
				.subscribe(res=> {
					const rest = this.restaurant;					 
					this.meals = res.filter(function(meal: MealItem){
						//console.log("asd");
						return meal.restaurant == rest.name;
					});
				});
	}
}
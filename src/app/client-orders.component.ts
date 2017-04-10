import { Component, OnInit }		from '@angular/core';
import { Order }					from './data-models';
import { OrderService }				from './orders.service';

@Component({
	selector: 'clientorders-component',
	templateUrl: './client-orders.component.html',
	styleUrls: ['client-orders.component.css'],
	providers: [
		OrderService
	]
})

export class ClientOrdersComponent {
	title = "";
	listType = "";
	
	orders: Order[];
	selectedOrder: Order;
	constructor(
		private os: OrderService
	){}

	ngOnInit(){
		this.listType = "ordered";
		this.title = `Showing `+this.listType+` Orders`;
		this.loadOrders(this.listType);
	}
	loadOrders(type: string){
		this.title = `Showing `+type+` Orders`;
		console.log(type);
		this.os.getOrders(type)
				.subscribe(res=> {this.orders = res
					console.log(this.orders);
				});
	}
	selectOrder(order: Order): void{
		this.title = 'Showing selected order details';
		this.selectedOrder = order;
	}
}
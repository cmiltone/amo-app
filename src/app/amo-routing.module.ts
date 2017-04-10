import { NgModule }				from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { OrderingComponent }	from './ordering.component';
import { ClientOrdersComponent }from './client-orders.component';
//routes
const routes: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
	{path: 'new_order', component: OrderingComponent},
	{path: 'my_orders', component: ClientOrdersComponent}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})

export class AmoRoutingModule {}
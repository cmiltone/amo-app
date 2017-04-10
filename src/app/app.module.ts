import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule }        from '@angular/http';

import { AppComponent }      from './app.component';
import { OrderingComponent } from './ordering.component';
import { ClientOrdersComponent }  from './client-orders.component';
import { AmoRoutingModule  }      from './amo-routing.module';
import { OrderDetailComponent}    from './order-detail.component';
import { AddMealComponent }       from './add-meal-item.component';

@NgModule({
  declarations: [
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AmoRoutingModule
  ],
    AppComponent,
    OrderingComponent,
    OrderDetailComponent,
    ClientOrdersComponent,
    AddMealComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

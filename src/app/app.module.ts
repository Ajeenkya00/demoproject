import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RoutingModule } from './routing.module';
import { NewstartComponent } from './newstart/newstart.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NewstartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

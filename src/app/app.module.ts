import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RoutingModule } from './routing.module';
import { NewstartComponent } from './newstart/newstart.component';
import { DetailComponent } from './detail/detail.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { OtherdetailsComponent } from './otherdetails/otherdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxBootstrapSwitchModule } from 'ngx-bootstrap-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NewstartComponent,
    DetailComponent,
    HomedetailsComponent,
    OtherdetailsComponent,
    CheckoutComponent,
    SuccessComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapSwitchModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

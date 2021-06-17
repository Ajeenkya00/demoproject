import { RouterModule, Routes } from "@angular/router";
import {CustomerComponent} from "./customer/customer.component";
import {NgModule} from "@angular/core";
import { NewstartComponent } from "./newstart/newstart.component";
import { DetailComponent } from "./detail/detail.component";
import { HomedetailsComponent } from "./homedetails/homedetails.component";
import { OtherdetailsComponent } from "./otherdetails/otherdetails.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { SuccessComponent } from "./success/success.component";




const appRoutes:Routes=[
    {path:'',redirectTo:'/newstart',pathMatch:'full'},
    {path:'newstart',component:NewstartComponent},
    {path:'customer',component:CustomerComponent},
    {path:'detail',component:DetailComponent},
    {path:'homedetails',component:HomedetailsComponent},
    {path:'otherdetails', component:OtherdetailsComponent},
    {path:'checkout', component:CheckoutComponent},
    {path:'success', component:SuccessComponent}

   
    
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class RoutingModule{

}
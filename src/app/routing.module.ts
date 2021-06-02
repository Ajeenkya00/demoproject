import { RouterModule, Routes } from "@angular/router";
import {CustomerComponent} from "./customer/customer.component";
import {NgModule} from "@angular/core";
import { NewstartComponent } from "./newstart/newstart.component";
import { DetailComponent } from "./detail/detail.component";




const appRoutes:Routes=[
    {path:'',redirectTo:'/newstart',pathMatch:'full'},
    {path:'newstart',component:NewstartComponent},
    {path:'customer',component:CustomerComponent},
    {path:'detail',component:DetailComponent}

   
    
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class RoutingModule{

}
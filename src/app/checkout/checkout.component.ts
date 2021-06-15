import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

green:string='green';
red:string='red'; 
yes:string='Yes';
no:string='No';


  constructor() { }

  ngOnInit(): void {
  }



}

import { Component, OnInit,OnDestroy } from '@angular/core';
import{Subscription} from 'rxjs';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  click:boolean = false;
  object = {};
  subscription: Subscription;

  cart_Array = [];
  cartNum:number;
  id:number;
  cart  = {};
  constructor(private headerService:HeaderService) { 
    
    


  }

  ngOnInit(): void {

   this.headerService.getCart()
    .subscribe((data => this.cart_Array = data));
    this.cartNum = 0;
    this.id = 1;
    
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe();

  }

  onClick(){
    this.cartNum +=1;
    this.cart = {id:this.id,cartNum:this.cartNum};
    this.headerService.updateCart(this.cart)
    .subscribe(data => this.cart_Array.push(data));


    
  }

  getNum(){
    
    return this.cart_Array[0].cartNum;

  }

}

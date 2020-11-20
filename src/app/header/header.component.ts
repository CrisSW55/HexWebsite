import { Component, OnInit,OnDestroy } from '@angular/core';

import {HeaderService} from './header.service';
import { Router, ActivatedRoute,Params,NavigationStart } from '@angular/router';
import { Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  value:string = ""
  routerLk:string = ''
  name:string = ""

  subscription: Subscription;
  num:number = 0;
  text1:string = "Welcome,";
  text2:string = "Sign In";
  
  cart_Array = [];
  cartNum:number = 0;
 
  constructor(private headerService:HeaderService,private router: Router,private route: ActivatedRoute) {
   
   }

  ngOnInit() {
   
    this.subscription = this.headerService.getCart()
    .subscribe((data => this.cart_Array = data));
   

    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

  onKey(event: KeyboardEvent){
    this.value = (event.target as HTMLInputElement).value 

  }


  getSearchResultPage(){
    
    if(this.value == "ibuypowerpc"){
      return  this.routerLk = '/ibuypower-redblack'

    }

    else if(this.value == "cyberpowerpc"){
      return  this.routerLk = '/cyberpowerpc-rainbow'

    }


    return this.routerLk;
      
    


  }

  getNum(){

    this.cartNum = this.cart_Array[0].cartNum
    return this.cartNum;
    
        

  }

  getText2(){
    this.text2 = this.headerService.getSignInText2();

    return this.text2;


  }

  
  getText1(){
    this.text1 = this.headerService.getSignInText1();

    return this.text1;


  }

  
  
  
}

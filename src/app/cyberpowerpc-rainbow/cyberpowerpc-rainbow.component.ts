import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-cyberpowerpc-rainbow',
  templateUrl: './cyberpowerpc-rainbow.component.html',
  styleUrls: ['./cyberpowerpc-rainbow.component.css']
})
export class CyberpowerpcRainbowComponent implements OnInit {
   //Initalizing array to storing image paths
   cyberpowerpc_Images = []
  
   //Inital image variable
   init_Image:string = "assets/img/cyberpowerpc_rainbow.png"
   
   //Button variables
   image:string = ""
   button_pressed:boolean = false;
   index:number = 0

   numOfProducts:number = 0;
   cart:any = [];
   

   public product = { id:'1', url:this.router.url.substr(1)};
  constructor(private router:Router,private headerService:HeaderService) { 
   
    this.cyberpowerpc_Images =  [
      "assets/img/cyberpowerpc_rainbow.png",
      'assets/img/cyberpowerpc_front.png',
      'assets/img/cyberpowerpc_top.png'
    ];


  }

  ngOnInit(): void {
    this.headerService.getCart()
    .subscribe((data => this.cart = data));
   

  }

  goToSignIn() {
    //Update Cart quantity

    // this.numOfProducts++;
    // this.headerService
    // .setCartNumber(this.numOfProducts)
    // .subscribe(num => this.cart.push(num));

    // if(this.numOfProducts < 4){
    //   this.numOfProducts++;
    //   this.headerService.setCartNumber(this.numOfProducts);

    // }
   
    //this.router.navigateByUrl('/sign-in', { state: this.product });
  }

  setImage(image:string, i:number){
    this.image = image
    this.button_pressed =  true
    this.index = i
  }
   

  get_currentIndex(){
   
    return this.index


  }
    

  getImage(){
    if(this.button_pressed == true) {
      return this.image

    }
    return this.init_Image


}

}

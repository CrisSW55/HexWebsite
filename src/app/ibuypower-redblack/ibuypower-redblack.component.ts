import { Component, OnInit,Input  } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-ibuypower-redblack',
  templateUrl: './ibuypower-redblack.component.html',
  styleUrls: ['./ibuypower-redblack.component.css']
})
export class IbuypowerRedblackComponent implements OnInit {
  //Initalizing array to storing image paths
  ibuypowerpc_Images = []
  
  //Inital image variable
  init_Image:string = "assets/img/iBuyPower_redblackpc.png"
  
  //Button variables
  image:string = ""
  button_pressed:boolean = false;
  index:number = 0

  public product = { url:this.router.url.substr(1)};
  
  
  
  constructor(private router:Router) {
    
    this.ibuypowerpc_Images =  [
      "assets/img/iBuyPower_redblackpc.png",
      'assets/img/iBuyPower_front.png',
      'assets/img/iBuyPower_top.png'
    ];
    //this.product.url;
    
   }
 


  ngOnInit(): void {
    
    
    
  }

  goToSignIn() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl('/sign-in', { state: this.product });
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

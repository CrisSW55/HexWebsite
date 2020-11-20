import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-accountpageproduct',
  templateUrl: './accountpageproduct.component.html',
  styleUrls: ['./accountpageproduct.component.css']
})
export class AccountpageproductComponent implements OnInit {
  value:string = ""
  routerLk:string = ''

  name:string = "" 
  new_name:string=""
  


  ibuypowerpc_Images = []
  cyberpowerpc_Images = []
  pc_Images = []
  
  //Inital image variable
  init_Image:string = this.set_InitialImage();
  
  //Button variables
  image:string = ""
  button_pressed:boolean = false;
  index:number = 0

  url:string = ""
  current_Url:string = ""
  
  

   //Product data to pass
   product;
   url_product:string = "";

   private sub: any;
   sub_Params:any
  constructor(private router: Router,private route: ActivatedRoute,private headerService:HeaderService) { 
    this.ibuypowerpc_Images =  [
      "assets/img/iBuyPower_redblackpc.png",
      'assets/img/iBuyPower_front.png',
      'assets/img/iBuyPower_top.png'
    ];

    this.cyberpowerpc_Images =  [
      "assets/img/cyberpowerpc_rainbow.png",
      'assets/img/cyberpowerpc_front.png',
      'assets/img/cyberpowerpc_top.png'
    ];

    
    this.setImages();


  }

  ngOnInit(): void {
    this.sub_Params = this.route.params
    .subscribe((params:Params)=>
        {
         
          this.name = params['name'];
          console.log("The user's current name is: " + this.name);
          this.headerService.setSignInText1("Hello,");
          this.headerService.setSignInText2(this.name);
        
        }
    );
    //this.name = this.route.snapshot.paramMap.get("name");
    
  }
  ngOnDestroy() {
    this.sub_Params.unsubscribe();
  }

  set_InitialImage(){
    if(this.route.snapshot.paramMap.get("url_product") == "ibuypower-redblack"){
      return  "assets/img/iBuyPower_redblackpc.png"
    }
    else if(this.route.snapshot.paramMap.get("url_product") == "cyberpowerpc-rainbow"){
      return  "assets/img/cyberpowerpc_rainbow.png"
    } 
    
    
  }

  setImages(){
    if(this.route.snapshot.paramMap.get("url_product") == "ibuypower-redblack"){
      return  this.pc_Images = this.ibuypowerpc_Images;
    }
    else if(this.route.snapshot.paramMap.get("url_product") == "cyberpowerpc-rainbow"){
      return  this.pc_Images = this.cyberpowerpc_Images;
    } 
    
  

  }
 

  onKey(event: KeyboardEvent){
    this.value = (event.target as HTMLInputElement).value 

  }

  

  searchProducts(){
    
    if(this.value == "ibuypowerpc"){
      return  this.routerLk = '/ibuypower-redblack'

    }

    else if(this.value == "cyberpowerpc"){
      return  this.routerLk = '/cyberpowerpc-rainbow'

    }


    return this.routerLk;
      
    


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

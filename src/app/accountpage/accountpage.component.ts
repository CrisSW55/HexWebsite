import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params,NavigationStart } from '@angular/router';
import {fromEvent} from 'rxjs';
import {HeaderService} from '../header/header.service';

//import {HeaderComponent} from '../header/header.component';



@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountPageComponent implements OnInit {
  value:string = ""
  routerLk:string = ''

  name:string = "" 
  product:string = ""
  url_product1:string = "cyberpowerpc-rainbow"
  url_product2:string = "ibuypower-redblack"

  currentUrl:string
  confirmUrl: string
 
  sub_Events:any
  sub_Params:any
// 
  


  constructor(private router: Router,private route: ActivatedRoute,private headerService:HeaderService) {
   
   
    
  }
    
    

  

  ngOnInit(): void {
    this.sub_Params = this.route.params
    .subscribe((params:Params)=>
        {
         
          this.name = params['name'];
          console.log("The user's current name is: " + this.name);
          this.headerService.setSignInText1("Hello,");
          this.headerService.setSignInText2(this.name);
          
          this.sub_Events = this.router.events
    .subscribe((event: NavigationStart) => {
      this.currentUrl = this.router.url.replace("%20"," ");
      this.confirmUrl = `/accountpage/${this.name}`
      if (event.navigationTrigger === 'popstate' && (this.currentUrl === this.confirmUrl)) {
        this.router.navigate(["404"]);
      }
      
    });
        }
      );

      
  }

  ngOnDestroy(){
    // prevent memory leak when component destroyed
    this.sub_Params.unsubscribe();
    this.headerService.setSignInText1("Welcome");
    this.headerService.setSignInText2("Sign In");
    //this.sub_Events.unsubscribe();

  }
  

  onKey(event: KeyboardEvent){
    this.value = (event.target as HTMLInputElement).value 

  }

  moveToProduct(){
    if(this.route.snapshot.paramMap.get("url_product") == "/ibuypower-redblack"){
      return  this.routerLk = '/ibuypower-redblack'

    }

    else if(this.route.snapshot.paramMap.get("url_product") == "/cyberpowerpc-rainbow"){
      return  this.routerLk = '/cyberpowerpc-rainbow'

    }

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

  

  
}

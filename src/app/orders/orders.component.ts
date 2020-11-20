import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  value:string = ""
  routerLk:string = ''

  name:string = "" 
  tempName:string = ""
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params:Params)=>
        {
          //Need to add condition in order to let name change with the url name
          // if(this.accts.){


          // }
          this.name = params['name'];

        }
      );


  }

  onKey(event: KeyboardEvent){
    this.value = (event.target as HTMLInputElement).value 

  }

  getRouterLink(){
    
    if(this.value == "ibuypowerpc"){
      return  this.routerLk = '/ibuypower-redblack'

    }

    else if(this.value == "cyberpowerpc"){
      return  this.routerLk = '/cyberpowerpc-rainbow'

    }


    return this.routerLk;
      
    


  }

}

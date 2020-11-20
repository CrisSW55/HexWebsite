import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AccountService } from '../register/account.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  //Initial variables will be used for accounts database
  public email:string = ""
  public password:string = ""
  public name:string = ""
  
  //Accounts from localhost:3000 server/database
  public exists:boolean  = false
  public i:number
  public accts = []

  //Product data to pass
  product;
  url_product:string = ""
  full_name:string = ""

  
  
  constructor(private accountService:AccountService,private router:Router) {
   
    this.router.getCurrentNavigation().extras.state
  }

  ngOnInit(): void {
    this.accountService.getAccounts()
    .subscribe((data => this.accts = data));
    this.product = history.state;
    this.url_product = this.product.url
   
  }

  ngOnDestroy(){
    
  }

  getArrayToConsole(){
    // for (let entry of this.accts) {
    //   console.log(entry.email); // 1, "string", false
    // }
    console.log(this.accts[1].email);
  }

  
  user_Exists(em:string,pw:string){
    for(this.i = 0; this.i < this.accts.length; this.i++){
        if( (this.accts[this.i].email == em) && (this.accts[this.i].password == pw)){
            return this.name = this.accts[this.i].name;

        }


    }

 
  }


  getCurrentAccountPage(){
    
    
    // if((this.url_product == "ibuypower-redblack") || (this.url_product == "cyberpowerpc-rainbow")){
      
    //   this.router.navigate(['/accountpage',this.name,this.url_product]);

     

    // }
    
    
   
    this.router.navigate(['/accountpage',this.name]);
    
    
  }



  input_Email(em:string){
    this.email = em;
    // for(this.i = 0; this.i < this.accountService.getAccounts.length; this.i++){
    //   if(this.email ==  this.accountService.accounts[this.i].email){return this.id_email = this.i}

    // }
    
  }

  input_Password(pw:string){
    this.password = pw;
    // for(this.i = 0; this.i < this.accountService.accounts.length; this.i++){
    // if(this.password ==  this.accountService.accounts[this.i].password){return this.id_password = this.i}
    // }
  }





}

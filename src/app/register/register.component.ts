import { Component, OnInit } from '@angular/core';
import {Account} from './account.model';
import { AccountService } from './account.service';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public newAccount:Account
  public accts = []
  newId:number
  

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
     this.accountService.getAccounts()
    .subscribe((data => this.accts = data));

  
  }

  ngOnDestroy(){
    
  }

  createAccount(n:string,e:string,p:string ){
    this.newId = this.accts.length+1;
    this.newAccount = new Account(this.newId,n,e,p);
    this.accountService
    .addAccount(this.newAccount)
  .subscribe(account => this.accts.push(account));

  }

  removeAccount(num:number){
  
    
    this.accountService
    .deleteAccount(num)
    .subscribe();

  }


  

 

 
 

}

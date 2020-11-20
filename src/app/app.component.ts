import { Component} from '@angular/core';
import { AccountService } from './register/account.service';
import {TestComponent} from './test/test.component';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent {
  title = 'PC-Website';
  
  //elementData  = [{name:"Crystian", email:'crystianguzman@gmail.com', password:'Haha55'}];

  constructor(private accountService:AccountService){


  }

  

  getNotification(evt) {
    this.title = evt;
}

}

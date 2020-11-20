import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import {TestService} from './test.service';






@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[TestService]
})
export class TestComponent implements OnInit {

  @Input('crystianUser') user: {name:string, email:string, password:string };

  @Output() createName = new EventEmitter<{name:string}>();
  

  showName(){

    this.createName.emit({name:"Bob"});
  }

  @Output('helloParent') notifyParent: EventEmitter<any> = new EventEmitter();
  sendNotification() {
      this.notifyParent.emit('Some value to send to the parent');
  }
  
  public newAccount:Account
  public accts = []
  newId:number



  

  constructor(private testService:TestService) { }

  ngOnInit(): void {
     this.testService.getAccounts()
    .subscribe((data => this.accts = data));

  
  }

  ngOnDestroy(){
    
  }

  createAccount(n:string,e:string,p:string ){
    this.newId = this.accts.length+1;
   
    this.testService
    .addAccount(this.newAccount)
  .subscribe(account => this.accts.push(account));

  }

  removeAccount(num:number){
  
    
    this.testService
    .deleteAccount(num)
    .subscribe();

  }

  

  


    


  

  

}

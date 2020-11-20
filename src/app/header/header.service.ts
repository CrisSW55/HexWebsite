import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })


  export class HeaderService {
    //private cartNumArray:number[] = [];
    
    private cart_Subject: Subject<number>;
    private name_Subject:Subject<string>;
    private text1:string = "Welcome,"
    private text2:string = "Sign In";

    private object = {};
    

    path: string = 'http://localhost:3000/cart'

    constructor(private http: HttpClient) {
     
      this.cart_Subject = new Subject<number>();
      this.name_Subject = new Subject<string>();
     }

     getCart() : Observable <any> {
      return this.http.get<any>(this.path);
    }

     
  

    addToCart(id: any,num:any): Observable<any> {
      this.object = {id,num};

      return this.http.post<any>(this.path , this.object);
    
    }

    updateCart(cart:any): Observable<any> {
      const _url = `${this.path}/${cart.id}`; // DELETE api/heroes/42
      return this.http.put(_url,cart);
    }



    setCurrentCartNum(num:number){
      //this.cartNumArray.pop();
      //this.cartNumArray.push(num);
      this.cart_Subject.next(num);
     
    
     // console.log("This is your current number: " + this.cartNumArray.slice());
    
    }

    getSignInText1(){

      return this.text1;


    }

    setSignInText1(greeting: string){
      this.text1 = greeting;
    }

    getSignInText2(){

      return this.text2;


    }

    setSignInText2(name: string){
      this.text2 = name;
    }


  

    // setSignInText(t:string) {
    //   this._newSignIn.next(t);
    // }


    // setNumber(i : number){
    //   return this._cartNumArray[i];

    // }



    // newNumber(newTodo:number):Observable {
    //     let obs = this.todoBackendService.saveTodo(newTodo);
    
    //     obs.subscribe(
    //             res => {
    //                 this._todos.next(this._todos.getValue().push(newTodo));
    //             });
    
    //     return obs;
    // }
  
  
   
    
    
  
  }
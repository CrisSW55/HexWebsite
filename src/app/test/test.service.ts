import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  url:string = "http://localhost:3000/users";
  
  getAccounts() : Observable <any> {
    return this.http.get<any>(this.url);
  }

  addAccount (account: any): Observable<any> {
    return this.http.post<any>(this.url, account);
      
      
  }

  deleteAccount (id: any): Observable<any> {
    const _url = `${this.url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(_url);
  }

  
}

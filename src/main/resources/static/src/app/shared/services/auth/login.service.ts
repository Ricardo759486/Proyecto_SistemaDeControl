import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  loginService(user:any){
    const httpOptions = {
      headers: new HttpHeaders({
        contentType: 'application/json'
      })
    };
    return this.http.post('http://localhost:8080/api/login',user, httpOptions);
  }

}

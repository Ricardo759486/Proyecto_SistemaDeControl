import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerService(user:any){
    const httpOptions = {
      headers: new HttpHeaders({
        contentType: 'application/json'
      })
    };
    return this.http.post('http://localhost:8080/api/login',user, httpOptions);
  }
}

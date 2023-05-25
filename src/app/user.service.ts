import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(user:User):Observable<any>{
   return this.http.post<any>('http://localhost:8080/api/v1/auth/login',user)
  }

  singup(user:User):Observable<string>{
    return this.http.post<string>('http://localhost:8080/api/v1/auth/signup',user);
  }

  getAll(){
    return this.http.get("http://localhost:8080/user");
  }
}

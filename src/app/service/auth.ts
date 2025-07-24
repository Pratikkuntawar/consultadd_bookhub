import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

import { EmployeeModel } from '../models/Employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Auth {
  constructor(private http:HttpClient){}

  login(data:any):Observable<any>{
   
    return this.http.post("http://localhost:8080/auth/employeeLogin",data);
    
  }
  register(data:EmployeeModel):Observable<any> {
    console.log(data);
    return this.http.post("http://localhost:8080/auth/register",data);
  }
}

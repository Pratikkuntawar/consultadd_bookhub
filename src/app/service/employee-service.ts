import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeModel } from '../models/Employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class employeeService {
  constructor(private httpClient: HttpClient) {
    console.log("This is StudentService");
  }

  getMyInfo(): Observable<EmployeeModel> {
    console.log("In the getEmployee service");
    return this.httpClient.get<EmployeeModel>("http://localhost:8080/employee/getMyInfo");
  }
 

}

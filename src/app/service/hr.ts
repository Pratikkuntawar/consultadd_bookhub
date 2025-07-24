import { Injectable } from '@angular/core';
import { EmployeeModel } from '../models/Employee';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HrService {
    constructor(private httpClient: HttpClient) {
    console.log("This is StudentService");
  }
   getNewEmployee():Observable<EmployeeModel[]>{
    console.log("In the get new emplouee");
    return this.httpClient.get<EmployeeModel[]>("http://localhost:8080/hr/getEmployeesWithoutDepartment")
  }
   addNewEmployee(emp :EmployeeModel):Observable<EmployeeModel>{
    console.log("In the get new emplouee");
    return this.httpClient.put<EmployeeModel>("http://localhost:8080/hr/AddEmployeesDepartmentAndRole",emp);
  }
  deleteNewEmployee(emp:EmployeeModel):Observable<EmployeeModel>{
    console.log("In deletingNewEmployee route");
    return this.httpClient.delete<EmployeeModel>("http://localhost:8080/hr/DeleteEmployeesDepartmentAndRole",{
      body: emp,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

}

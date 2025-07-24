import { Component } from '@angular/core';
import { EmployeeModel } from '../../models/Employee';
import { HrService } from '../../service/hr';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { employeeService } from '../../service/employee-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hr-component',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './hr-component.html',
  styleUrl: './hr-component.css'
})
export class HrComponent {
     newEmployee  !:EmployeeModel[];
     department='unknown';
    
      newEmployeeCount !:0;
       newEmpForm = new FormGroup({
 role: new FormControl(),
  department: new FormControl(),
  employeeObj:new FormControl()
 });
     constructor(private toasterService:ToastrService,private hrService:HrService,private employeeService:employeeService,private cookieService: CookieService){};
   ngOnInit(){
    this.getNewEmployee();
    this.isHr();
   }
      isHr(){
    return this.department=="HR";
   }

   getNewEmployee():void{
  this.hrService.getNewEmployee().subscribe({
    next:(res:any)=>{
      this.newEmployee=res.data;
      this.newEmployeeCount=res.count;
      console.log("Employee count is ",this.newEmployeeCount);
      console.log("Employee count is ",this.newEmployee);
    },
    error:(err)=>{
      console.error('Error fetching new employee data',err);
    }
  })
}  

addNewEmployee(employee:any,role:string,department:string):void{ 
employee.department=department;
employee.role=role;
this.hrService.addNewEmployee(employee).subscribe({
  next:(res:any)=>{
    console.log(employee);
 this.toasterService.success('Employee Added Succeesfully',"Success");
     this.newEmployee = this.newEmployee.filter(e => e.email !== employee.email);

 console.log(res);
  },
     error:(err)=>{
       this.toasterService.error('Something Wents Wrong ',"Failed");
    }
})
}

reject(employee:any):void{
    this.hrService.deleteNewEmployee(employee).subscribe({
      next:(res:any)=>{
        console.log("User delete sucessfully");
this.toasterService.error("Employee Removed sucessfully");
     this.newEmployee = this.newEmployee.filter(e => e.email !== employee.email);

      }, error:(err)=>{
       this.toasterService.error('Something Wents Wrong ',"Failed");
    }

    })
}

}

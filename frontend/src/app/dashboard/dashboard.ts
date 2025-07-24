// import { Component } from '@angular/core';
// import { employeeService } from '../service/employee-service';
// import { CookieService } from 'ngx-cookie-service';
// import { EmployeeModel } from '../models/Employee';
// import { CommonModule } from '@angular/common';
// import { HrComponent } from '../Hr/hr-component/hr-component';
// import { Marketing } from '../Marketing/marketing';
// import { Login } from "../login/login";
// @Component({
//   selector: 'app-dashboard',
//   imports: [CommonModule, HrComponent, Marketing],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.css'
// })

// export class Dashboard {
//        employeeInfo !:EmployeeModel;
//        department:string='unknown';  
//    constructor(private employeeService:employeeService,private cookieService: CookieService){};
//     ngOnInit() {
//     this.getMyInfo();
//   }


//    getMyInfo():void{
//        this.employeeService.getMyInfo().subscribe({
//       next: (res:any) => {
//         this.employeeInfo = res;
//         this.department=res.department ? res.department :'unknown';
//         console.log('Employee loaded:', this.employeeInfo);
//       },
//       error: (err) => {
//         console.error('Error while fetching employee data', err);
//         this.department='unknown';
//       }
//     });
//    }

   

// }

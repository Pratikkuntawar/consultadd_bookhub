import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmployeeModel } from '../models/Employee';
import { Auth } from '../service/auth';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import EmailDomainValidator from '../validators/emailValidator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
   
  allowedDomain =["consultadd.com","hyperflex.com","knowcloudai.com"];
  constructor(private authSevice:Auth,private toasterService:ToastrService,private cookieService:CookieService,private router:Router){}
  empForm = new FormGroup({
  name: new FormControl('', {
    validators: [Validators.required,Validators.minLength(4)],
  }),
  email: new FormControl('', {
    validators: [Validators.required,EmailDomainValidator(this.allowedDomain)],
  }),
  password: new FormControl('', {
    validators: [Validators.required,Validators.minLength(6)],
  }),
   contactNo: new FormControl('', {
    validators: [Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)],
  }),

});

onSubmit(){
    const formData = this.empForm.value as any;

    this.authSevice.register(formData).subscribe({
  next: (res) =>{ 
   this.toasterService.success('Student Register Successfuly',"Success");
  this.router.navigate(['/dashboard']);
  },
  error: (err) => {console.error('Login error', err);
       const errorMsg = typeof err.error === 'string'
    ? err.error
    : err.error?.message || 'Something went wrong';
    this.toasterService.error("User Alredy Exist", "Failed");
  }
  
});
    
  }
}

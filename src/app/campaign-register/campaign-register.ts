
import { CampaignService } from '../service/campaign-service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CampaignModel } from '../models/CapaignModel';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-campaign-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './campaign-register.html',
  styleUrl: './campaign-register.css'
})
export class CampaignRegister {
  campaignForm!: FormGroup;

  constructor(private router:Router,private fb: FormBuilder,private toasterService:ToastrService, private campaignService: CampaignService) {}

campaign: CampaignModel = {
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    status: '',
    budget: 0
  };

 ngOnInit(): void {
    this.campaignForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      status: ['', Validators.required],
      budget: [0, [Validators.required, Validators.min(1)]]
    });
  }
onSubmit(): void {
    if (this.campaignForm.valid) {
      console.log(this.campaignForm.value);
      this.campaignService.registerCampaign(this.campaignForm.value).subscribe({
        next: (res) => {
          console.log(res);
           this.toasterService.success('Login Successfuly',"Success");
  this.router.navigate(["/dashboard"]);
          this.campaignForm.reset();
       
        },
        error: err => {
          console.error('Error:', err);
           this.toasterService.error('Invalid Credentials',"Failed");
               this.campaignForm.reset();
        }
      });
    }
  }
}
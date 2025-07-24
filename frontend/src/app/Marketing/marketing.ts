import { Component } from '@angular/core';
import { CampaignService } from '../service/campaign-service';
import { RouterLink } from '@angular/router';
import { CampaignModel } from '../models/CapaignModel';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { employeeService } from '../service/employee-service';
import { EmployeeModel } from '../models/Employee';
@Component({
  selector: 'app-marketing',
  imports: [RouterLink,CommonModule],
  templateUrl: './marketing.html',
  styleUrl: './marketing.css'
})
export class Marketing {

  allCampaign!:any[];
  role!:String;
  employee!:any;
constructor(private employeeService:employeeService,private campaignService:CampaignService,private toasterService:ToastrService){}
ngOnInit() {
  this.getAllCampaignData();
  this.getEmployeeInfo();
}

getEmployeeInfo() {
  this.employeeService.getMyInfo().subscribe({
    next: (data) => {
      this.employee = data;
      console.log("Employee Info", this.employee);
    },
    error: (err) => {
      console.error("Error fetching employee info", err);
    }
  });
}


getAllCampaignData(){
  this.campaignService.getAllCompaign().subscribe({
    next:(res)=>{
        this.allCampaign=res.data;
        console.log(this.allCampaign);
        
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

deleteCampaign(id:number){
  this.campaignService.deleteCampaign(id).subscribe({
     next:(res)=>
     {
         this.toasterService.success('Campaign Deleted Successfuly',"Success");
         this.allCampaign=this.allCampaign.filter(e=>e.id!==id)
         
     },error:(err)=>{
      this.toasterService.error("somthing wents wrong","Failure");
     }
  })
}






}

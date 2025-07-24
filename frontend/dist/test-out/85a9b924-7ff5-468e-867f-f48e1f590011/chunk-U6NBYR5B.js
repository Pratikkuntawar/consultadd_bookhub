import {
  employeeService,
  init_employee_service
} from "./chunk-S7SAHJ7C.js";
import {
  ToastrService,
  init_ngx_toastr
} from "./chunk-SI6UONNM.js";
import {
  RouterLink,
  init_router
} from "./chunk-H2HY2AWL.js";
import {
  CommonModule,
  init_common
} from "./chunk-YC3NWMHE.js";
import {
  CampaignService,
  init_campaign_service
} from "./chunk-VFBHOONL.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-7KP2XXLP.js";
import {
  __esm
} from "./chunk-V6FC2DIM.js";

// angular:jit:template:src/app/Marketing/marketing.html
var marketing_default;
var init_marketing = __esm({
  "angular:jit:template:src/app/Marketing/marketing.html"() {
    marketing_default = `
<div class="mb-5">
    <h3 class="m-4">Currently Marketing Campaign</h3>
   <div class="container mt-4">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div class="col" *ngFor="let campaign of allCampaign">
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column justify-content-between">
          <!-- Campaign Info -->
          <div>
            <h5 class="card-title">{{ campaign.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ campaign.status }}</h6>
            <p class="card-text small text-muted">{{ campaign.description }}</p>
            <p class="card-text small text-muted">Start Data: {{ campaign.start_date}}</p>
            <p class="card-text small text-muted">Start Data: {{ campaign.end_date }}</p>
          </div>

          <!-- Action Buttons -->
          <div class="d-flex justify-content-between my-3">
            <button type="button" class="p-2 w-25 btn btn-sm btn-secondary" >View </button>
            <button type="button" *ngIf="employee.role=='admin'" class="p-2 w-25 btn btn-sm btn-danger">Delete</button>
            <button type="button"   class=" btn btn-sm btn-success">Participate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
<div *ngIf="employee.role=='admin'">
    <h3 class="m-4" >Create Marketing Campaign</h3>
    <button type="button" class="mt-2 mb-5 mx-4 text-center justify-items-center btn btn-outline-info" [routerLink]="['/campaiangForm']" routerLinkActive="router-link-active" >Create Campaign</button>
   </div>

</div>`;
  }
});

// angular:jit:style:src/app/Marketing/marketing.css
var marketing_default2;
var init_marketing2 = __esm({
  "angular:jit:style:src/app/Marketing/marketing.css"() {
    marketing_default2 = "/* src/app/Marketing/marketing.css */\n/*# sourceMappingURL=marketing.css.map */\n";
  }
});

// src/app/Marketing/marketing.ts
var Marketing;
var init_marketing3 = __esm({
  "src/app/Marketing/marketing.ts"() {
    "use strict";
    init_tslib_es6();
    init_marketing();
    init_marketing2();
    init_core();
    init_campaign_service();
    init_router();
    init_ngx_toastr();
    init_common();
    init_employee_service();
    Marketing = class Marketing2 {
      employeeService;
      campaignService;
      toasterService;
      allCampaign;
      role;
      employee;
      constructor(employeeService2, campaignService, toasterService) {
        this.employeeService = employeeService2;
        this.campaignService = campaignService;
        this.toasterService = toasterService;
      }
      ngOnInit() {
        this.getAllCampaignData();
        this.employee = this.employeeService.getMyInfo();
      }
      getAllCampaignData() {
        this.campaignService.getAllCompaign().subscribe({
          next: (res) => {
            this.allCampaign = res.data;
            console.log(this.allCampaign);
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
      static ctorParameters = () => [
        { type: employeeService },
        { type: CampaignService },
        { type: ToastrService }
      ];
    };
    Marketing = __decorate([
      Component({
        selector: "app-marketing",
        imports: [RouterLink, CommonModule],
        template: marketing_default,
        styles: [marketing_default2]
      })
    ], Marketing);
  }
});

export {
  Marketing,
  init_marketing3 as init_marketing
};
//# sourceMappingURL=chunk-U6NBYR5B.js.map

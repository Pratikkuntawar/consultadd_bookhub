import {
  CampaignService,
  init_campaign_service
} from "./chunk-DQCITNV4.js";
import {
  ToastrService,
  init_ngx_toastr
} from "./chunk-B6NTKGGH.js";
import "./chunk-UGP4N6IN.js";
import {
  Router,
  init_router
} from "./chunk-V7S46CQ4.js";
import "./chunk-E776C4KC.js";
import "./chunk-SG2WTSSV.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-E4GEBTZE.js";
import {
  CommonModule,
  init_common
} from "./chunk-6UKHD5WX.js";
import "./chunk-CSZOH65J.js";
import "./chunk-56AEGESF.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-55HYZWLT.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-V6FC2DIM.js";

// angular:jit:template:src/app/campaign-register/campaign-register.html
var campaign_register_default;
var init_campaign_register = __esm({
  "angular:jit:template:src/app/campaign-register/campaign-register.html"() {
    campaign_register_default = `<div class="container mt-5">
  <h2>Register New Campaign</h2>

  <form [formGroup]="campaignForm" (ngSubmit)="onSubmit()">

    <div class="mb-3">
      <label class="form-label" for="name">Campaign Name</label>
      <input id="name" type="text" class="form-control" formControlName="name" />
      <div class="text-danger" *ngIf="campaignForm.get('name')?.touched && campaignForm.get('name')?.invalid">
        Name is required
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label" for="description">Description</label>
      <textarea id="description" class="form-control" rows="3" formControlName="description"></textarea>
      <div class="text-danger" *ngIf="campaignForm.get('description')?.touched && campaignForm.get('description')?.invalid">
        Description is required
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label" for="start_date">Start Date</label>
      <input id="start_date" type="date" class="form-control" formControlName="start_date" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="end_date">End Date</label>
      <input id="end_date" type="date" class="form-control" formControlName="end_date" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="status">Status</label>
      <select id="status" class="form-control" formControlName="status">
        <option value="">Select status</option>
        <option value="Active">Active</option>
        <option value="Paused">Paused</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label" for="budget">Budget</label>
      <input id="budget" type="number" class="form-control" formControlName="budget" />
      <div class="text-danger" *ngIf="campaignForm.get('budget')?.touched && campaignForm.get('budget')?.invalid">
        Budget must be greater than 0
      </div>
    </div>

    <button type="submit" class="btn btn-primary" [disabled]="!campaignForm.valid">Register Campaign</button>
  </form>
</div>
`;
  }
});

// angular:jit:style:src/app/campaign-register/campaign-register.css
var campaign_register_default2;
var init_campaign_register2 = __esm({
  "angular:jit:style:src/app/campaign-register/campaign-register.css"() {
    campaign_register_default2 = "/* src/app/campaign-register/campaign-register.css */\n/*# sourceMappingURL=campaign-register.css.map */\n";
  }
});

// src/app/campaign-register/campaign-register.ts
var CampaignRegister;
var init_campaign_register3 = __esm({
  "src/app/campaign-register/campaign-register.ts"() {
    "use strict";
    init_tslib_es6();
    init_campaign_register();
    init_campaign_register2();
    init_campaign_service();
    init_common();
    init_core();
    init_forms();
    init_forms();
    init_ngx_toastr();
    init_router();
    CampaignRegister = class CampaignRegister2 {
      router;
      fb;
      toasterService;
      campaignService;
      campaignForm;
      constructor(router, fb, toasterService, campaignService) {
        this.router = router;
        this.fb = fb;
        this.toasterService = toasterService;
        this.campaignService = campaignService;
      }
      campaign = {
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        status: "",
        budget: 0
      };
      ngOnInit() {
        this.campaignForm = this.fb.group({
          name: ["", Validators.required],
          description: ["", Validators.required],
          start_date: ["", Validators.required],
          end_date: ["", Validators.required],
          status: ["", Validators.required],
          budget: [0, [Validators.required, Validators.min(1)]]
        });
      }
      onSubmit() {
        if (this.campaignForm.valid) {
          console.log(this.campaignForm.value);
          this.campaignService.registerCampaign(this.campaignForm.value).subscribe({
            next: (res) => {
              console.log(res);
              this.toasterService.success("Login Successfuly", "Success");
              this.router.navigate(["/dashboard"]);
              this.campaignForm.reset();
            },
            error: (err) => {
              console.error("Error:", err);
              this.toasterService.error("Invalid Credentials", "Failed");
              this.campaignForm.reset();
            }
          });
        }
      }
      static ctorParameters = () => [
        { type: Router },
        { type: FormBuilder },
        { type: ToastrService },
        { type: CampaignService }
      ];
    };
    CampaignRegister = __decorate([
      Component({
        selector: "app-campaign-register",
        imports: [CommonModule, ReactiveFormsModule],
        template: campaign_register_default,
        styles: [campaign_register_default2]
      })
    ], CampaignRegister);
  }
});

// src/app/campaign-register/campaign-register.spec.ts
var require_campaign_register_spec = __commonJS({
  "src/app/campaign-register/campaign-register.spec.ts"(exports) {
    init_testing();
    init_campaign_register3();
    describe("CampaignRegister", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CampaignRegister]
        }).compileComponents();
        fixture = TestBed.createComponent(CampaignRegister);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_campaign_register_spec();
//# sourceMappingURL=spec-app-campaign-register-campaign-register.spec.js.map

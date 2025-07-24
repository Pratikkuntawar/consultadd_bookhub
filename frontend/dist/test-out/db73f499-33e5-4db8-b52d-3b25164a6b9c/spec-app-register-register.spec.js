import {
  EmailDomainValidator,
  init_emailValidator
} from "./chunk-OXB6JZAK.js";
import {
  Router,
  RouterLink,
  init_router
} from "./chunk-TPMNYAGT.js";
import {
  ToastrService,
  init_ngx_toastr
} from "./chunk-U2S7ZBOR.js";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-QMZDIYWG.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-N5A3YSTN.js";
import {
  CommonModule,
  init_common
} from "./chunk-EXIZREPD.js";
import {
  Auth,
  init_auth
} from "./chunk-MHIX2FDS.js";
import "./chunk-JDLSQL5R.js";
import "./chunk-ILW7OPSS.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-NMBEJXC6.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/register/register.html
var register_default;
var init_register = __esm({
  "angular:jit:template:src/app/register/register.html"() {
    register_default = `<main class="main d-flex justify-content-center align-items-center vh-100r">
 
<div class="p-5 border mb-5 d-flex flex-column rounded bg-white shadow mt-5" style="min-width: 500px; max-height: 700px;">
  
    <form [formGroup]="empForm" (ngSubmit)="onSubmit()">
  <h2  style="margin-bottom: 30px; text-align:center;">Register Form </h2>

  <div class="d-flex align-items-center gap-5 mb-2 ">
    <label  class="mb-0">Name</label>
    <div class="w-100 mt-2">
    <input id="name" type="text" formControlName="name" class="form-control w-75" placeholder="Enter your Name" ngModel>
    <div class="text-danger  lh-sm" style="font-size: 13px;margin-left: 9px;margin-top: 2px;" *ngIf="empForm.controls['name'].invalid && (empForm.controls['name'].touched || empForm.controls['name'].dirty)">
    <label class="text-danger" *ngIf="empForm.controls['name'].errors?.['required']">Name required</label>
    <label class="text-danger" *ngIf="empForm.controls['name'].errors?.['minlength']">Minimum 4 length required</label>
    </div>
  </div>
  </div>

 <div class="d-flex align-items-center gap-5 mb-2 ">
    <label  class="mb-0">Email</label>
    <div class="w-100 mt-2">
    <input id="email" type="email" formControlName="email" class="form-control w-75" placeholder="Enter your Email" ngModel>
    <div class="text-danger lh-sm" style="font-size: 13px;margin-left: 9px;" *ngIf="empForm.controls['email'].invalid && (empForm.controls['email'].touched || empForm.controls['email'].dirty)">
    <label class="text-danger" *ngIf="empForm.controls['email'].errors?.['required']">Email required</label>
    <label class="text-danger" *ngIf="empForm.controls['email'].errors?.['emailStartError']">Email can't start with number</label>
    <label class="text-danger" *ngIf="empForm.controls['email'].errors?.['emailDomainError']">Invalid Email domain</label>
    </div>
  </div>
  </div>

   <div class="d-flex align-items-center gap-4 mb-2 ">
    <label  class="mb-0">Contact</label>
     <div class="w-100 mt-2">
    <input id="contactNo" type="text" formControlName="contactNo" class="form-control " style="width: 70%;" placeholder="Enter your Contact No." ngModel>
      <div class="text-danger lh-sm" style="font-size: 13px;margin-left: 9px;margin-top: 2px;" *ngIf="empForm.controls['contactNo'].invalid && (empForm.controls['contactNo'].touched || empForm.controls['contactNo'].dirty)">
  <label class="text-danger" *ngIf="empForm.controls['contactNo'].errors?.['pattern']">Contact No. cannot be  other than digit</label>
        <label class="text-danger" *ngIf="empForm.controls['contactNo'].errors?.['required']">Contact No. required</label>
    <label class="text-danger" *ngIf="empForm.controls['contactNo'].errors?.['minlength']">Contact No. must be at least 10 digits</label>
    <label class="text-danger" *ngIf="empForm.controls['contactNo'].errors?.['maxlength']">Contact No. cannot be more than 10 digits</label>
    </div>
  </div>
  </div>

  <div class="d-flex align-items-center gap-3">
    <label for="password" class="mb-0">Password</label>
       <div class="w-100 mt-2">
    <input id="password" type="password" formControlName="password" class="form-control w-75" placeholder="Enter your password" ngModel>
   <div class="text-danger lh-sm" style="font-size: 13px;margin-left: 9px;margin-top: 2px;" *ngIf="empForm.controls['password'].invalid && (empForm.controls['password'].touched || empForm.controls['password'].dirty)">
  <label class="text-danger" *ngIf="empForm.controls['password'].errors?.['pattern']">Contact No. cannot be  other than digit</label>
        <label class="text-danger" *ngIf="empForm.controls['password'].errors?.['required']">password. required</label>
    <label class="text-danger" *ngIf="empForm.controls['password'].errors?.['minlength']">password at least 6 size</label>
    </div>
  </div>
  </div>

  
<div class="row m-5">
 <button class="btn btn-primary flex-grow-1 px-3" type="submit" [disabled]="empForm.invalid">Register</button>
  <h3 class="my-3 w-100 h-100" style="text-align: center;">Or</h3>
 <button class="btn btn-primary flex-grow-1 px-3" type="button" [routerLink]="['/login']"   >Login</button>
 </div>

</form>
</div>

</main>`;
  }
});

// angular:jit:style:src/app/register/register.css
var register_default2;
var init_register2 = __esm({
  "angular:jit:style:src/app/register/register.css"() {
    register_default2 = "/* src/app/register/register.css */\n/*# sourceMappingURL=register.css.map */\n";
  }
});

// src/app/register/register.ts
function cov_9toc8wqoh() {
  var path = "/Users/consultadd/Angular/my-app/src/app/register/register.ts";
  var hash = "a327b0397dc815f5ee0cfcb070ad0f3dbb8bac03";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/register/register.ts",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 74
        }
      },
      "2": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 37
        }
      },
      "3": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 45
        }
      },
      "4": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 43
        }
      },
      "5": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 29
        }
      },
      "6": {
        start: {
          line: 25,
          column: 14
        },
        end: {
          line: 38,
          column: 6
        }
      },
      "7": {
        start: {
          line: 40,
          column: 25
        },
        end: {
          line: 40,
          column: 43
        }
      },
      "8": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 53,
          column: 11
        }
      },
      "9": {
        start: {
          line: 43,
          column: 16
        },
        end: {
          line: 43,
          column: 87
        }
      },
      "10": {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 44,
          column: 53
        }
      },
      "11": {
        start: {
          line: 47,
          column: 16
        },
        end: {
          line: 47,
          column: 50
        }
      },
      "12": {
        start: {
          line: 48,
          column: 33
        },
        end: {
          line: 50,
          column: 66
        }
      },
      "13": {
        start: {
          line: 51,
          column: 16
        },
        end: {
          line: 51,
          column: 73
        }
      },
      "14": {
        start: {
          line: 55,
          column: 28
        },
        end: {
          line: 60,
          column: 5
        }
      },
      "15": {
        start: {
          line: 55,
          column: 34
        },
        end: {
          line: 60,
          column: 5
        }
      },
      "16": {
        start: {
          line: 62,
          column: 0
        },
        end: {
          line: 69,
          column: 13
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 67
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 5
          }
        },
        loc: {
          start: {
            line: 39,
            column: 15
          },
          end: {
            line: 54,
            column: 5
          }
        },
        line: 39
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 42,
            column: 18
          },
          end: {
            line: 42,
            column: 19
          }
        },
        loc: {
          start: {
            line: 42,
            column: 27
          },
          end: {
            line: 45,
            column: 13
          }
        },
        line: 42
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 46,
            column: 19
          },
          end: {
            line: 46,
            column: 20
          }
        },
        loc: {
          start: {
            line: 46,
            column: 28
          },
          end: {
            line: 52,
            column: 13
          }
        },
        line: 46
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 55,
            column: 28
          },
          end: {
            line: 55,
            column: 29
          }
        },
        loc: {
          start: {
            line: 55,
            column: 34
          },
          end: {
            line: 60,
            column: 5
          }
        },
        line: 55
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 48,
            column: 33
          },
          end: {
            line: 50,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 49,
            column: 22
          },
          end: {
            line: 49,
            column: 31
          }
        }, {
          start: {
            line: 50,
            column: 22
          },
          end: {
            line: 50,
            column: 66
          }
        }],
        line: 48
      },
      "1": {
        loc: {
          start: {
            line: 50,
            column: 22
          },
          end: {
            line: 50,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 50,
            column: 22
          },
          end: {
            line: 50,
            column: 40
          }
        }, {
          start: {
            line: 50,
            column: 44
          },
          end: {
            line: 50,
            column: 66
          }
        }],
        line: 50
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "register.js",
      sourceRoot: "",
      sources: ["register.ts"],
      names: [],
      mappings: "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",
      sourcesContent: [`import { Component } from '@angular/core';
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
    validators: [Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\\d+$/)],
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
`]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a327b0397dc815f5ee0cfcb070ad0f3dbb8bac03"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_9toc8wqoh = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Register;
var init_register3 = __esm({
  "src/app/register/register.ts"() {
    "use strict";
    init_tslib_es6();
    init_register();
    init_register2();
    init_core();
    init_forms();
    init_forms();
    init_router();
    init_auth();
    init_ngx_cookie_service();
    init_ngx_toastr();
    init_emailValidator();
    init_common();
    cov_9toc8wqoh();
    cov_9toc8wqoh().s[0]++;
    Register = class Register2 {
      authSevice;
      toasterService;
      cookieService;
      router;
      allowedDomain = (cov_9toc8wqoh().s[1]++, ["consultadd.com", "hyperflex.com", "knowcloudai.com"]);
      constructor(authSevice, toasterService, cookieService, router) {
        cov_9toc8wqoh().f[0]++;
        cov_9toc8wqoh().s[2]++;
        this.authSevice = authSevice;
        cov_9toc8wqoh().s[3]++;
        this.toasterService = toasterService;
        cov_9toc8wqoh().s[4]++;
        this.cookieService = cookieService;
        cov_9toc8wqoh().s[5]++;
        this.router = router;
      }
      empForm = (cov_9toc8wqoh().s[6]++, new FormGroup({
        name: new FormControl("", {
          validators: [Validators.required, Validators.minLength(4)]
        }),
        email: new FormControl("", {
          validators: [Validators.required, EmailDomainValidator(this.allowedDomain)]
        }),
        password: new FormControl("", {
          validators: [Validators.required, Validators.minLength(6)]
        }),
        contactNo: new FormControl("", {
          validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]
        })
      }));
      onSubmit() {
        cov_9toc8wqoh().f[1]++;
        const formData = (cov_9toc8wqoh().s[7]++, this.empForm.value);
        cov_9toc8wqoh().s[8]++;
        this.authSevice.register(formData).subscribe({
          next: (res) => {
            cov_9toc8wqoh().f[2]++;
            cov_9toc8wqoh().s[9]++;
            this.toasterService.success("Student Register Successfuly", "Success");
            cov_9toc8wqoh().s[10]++;
            this.router.navigate(["/dashboard"]);
          },
          error: (err) => {
            cov_9toc8wqoh().f[3]++;
            cov_9toc8wqoh().s[11]++;
            console.error("Login error", err);
            const errorMsg = (cov_9toc8wqoh().s[12]++, typeof err.error === "string" ? (cov_9toc8wqoh().b[0][0]++, err.error) : (cov_9toc8wqoh().b[0][1]++, (cov_9toc8wqoh().b[1][0]++, err.error?.message) || (cov_9toc8wqoh().b[1][1]++, "Something went wrong")));
            cov_9toc8wqoh().s[13]++;
            this.toasterService.error("User Alredy Exist", "Failed");
          }
        });
      }
      static ctorParameters = (cov_9toc8wqoh().s[14]++, () => {
        cov_9toc8wqoh().f[4]++;
        cov_9toc8wqoh().s[15]++;
        return [{
          type: Auth
        }, {
          type: ToastrService
        }, {
          type: CookieService
        }, {
          type: Router
        }];
      });
    };
    cov_9toc8wqoh().s[16]++;
    Register = __decorate([Component({
      selector: "app-register",
      imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
      template: register_default,
      styles: [register_default2]
    })], Register);
  }
});

// src/app/register/register.spec.ts
var require_register_spec = __commonJS({
  "src/app/register/register.spec.ts"(exports) {
    init_testing();
    init_register3();
    describe("Register", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Register]
        }).compileComponents();
        fixture = TestBed.createComponent(Register);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_register_spec();
//# sourceMappingURL=spec-app-register-register.spec.js.map

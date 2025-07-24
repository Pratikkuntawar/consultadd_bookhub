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

// angular:jit:template:src/app/login/login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src/app/login/login.html"() {
    login_default = `<main class="main d-flex justify-content-center align-items-center vh-100r">
 
<div class="p-5 border d-flex flex-column rounded bg-white shadow mt-5" style="min-width: 500px; min-height: 600px;">
  
    <form [formGroup]="empForm" (ngSubmit)="onSubmit()">

  <h2  style="margin-bottom: 60px; text-align:center;">Login Form </h2>
  
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
  <button class="btn btn-primary flex-grow-1 px-3" type="submit" [disabled]="empForm.invalid">Login</button>
  <h3 class="my-3 w-100 h-100" style="text-align: center;">Or</h3>
  <button class="btn btn-primary flex-grow-1 px-3" type="button" [routerLink]="['/signup']" >Register</button>
</div>

</form>
</div>

</main>`;
  }
});

// angular:jit:style:src/app/login/login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src/app/login/login.css"() {
    login_default2 = "/* src/app/login/login.css */\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/login/login.ts
function cov_1tubs6dmqp() {
  var path = "/Users/consultadd/Angular/my-app/src/app/login/login.ts";
  var hash = "d5edf73b65569f44c72252084b9820142d7336f6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/login/login.ts",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 12
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 20
        },
        end: {
          line: 19,
          column: 74
        }
      },
      "2": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 37
        }
      },
      "3": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 45
        }
      },
      "4": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 43
        }
      },
      "5": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 29
        }
      },
      "6": {
        start: {
          line: 26,
          column: 14
        },
        end: {
          line: 33,
          column: 6
        }
      },
      "7": {
        start: {
          line: 35,
          column: 25
        },
        end: {
          line: 35,
          column: 43
        }
      },
      "8": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 36,
          column: 65
        }
      },
      "9": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 48,
          column: 11
        }
      },
      "10": {
        start: {
          line: 39,
          column: 16
        },
        end: {
          line: 39,
          column: 74
        }
      },
      "11": {
        start: {
          line: 40,
          column: 16
        },
        end: {
          line: 40,
          column: 76
        }
      },
      "12": {
        start: {
          line: 41,
          column: 16
        },
        end: {
          line: 41,
          column: 53
        }
      },
      "13": {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 44,
          column: 50
        }
      },
      "14": {
        start: {
          line: 45,
          column: 16
        },
        end: {
          line: 45,
          column: 75
        }
      },
      "15": {
        start: {
          line: 46,
          column: 16
        },
        end: {
          line: 46,
          column: 49
        }
      },
      "16": {
        start: {
          line: 50,
          column: 28
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "17": {
        start: {
          line: 50,
          column: 34
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "18": {
        start: {
          line: 57,
          column: 0
        },
        end: {
          line: 64,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 67
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        loc: {
          start: {
            line: 34,
            column: 15
          },
          end: {
            line: 49,
            column: 5
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 38,
            column: 18
          },
          end: {
            line: 38,
            column: 19
          }
        },
        loc: {
          start: {
            line: 38,
            column: 27
          },
          end: {
            line: 42,
            column: 13
          }
        },
        line: 38
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 43,
            column: 19
          },
          end: {
            line: 43,
            column: 20
          }
        },
        loc: {
          start: {
            line: 43,
            column: 28
          },
          end: {
            line: 47,
            column: 13
          }
        },
        line: 43
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 50,
            column: 28
          },
          end: {
            line: 50,
            column: 29
          }
        },
        loc: {
          start: {
            line: 50,
            column: 34
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 50
      }
    },
    branchMap: {},
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
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "login.js",
      sourceRoot: "",
      sources: ["login.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAC1C,OAAO,EAAE,WAAW,EAAE,SAAS,EAAE,WAAW,EAAE,UAAU,EAAC,MAAM,gBAAgB,CAAC;AAChF,OAAO,EAAE,UAAU,EAAE,MAAM,iBAAiB,CAAC;AAC7C,OAAO,EAAE,mBAAmB,EAAE,MAAM,gBAAgB,CAAC;AAErD,OAAO,EAAE,IAAI,EAAE,MAAM,iBAAiB,CAAC;AACvC,OAAO,EAAE,aAAa,EAAE,MAAM,oBAAoB,CAAC;AACnD,OAAO,EAAE,MAAM,EAAE,MAAM,iBAAiB,CAAC;AACzC,OAAO,EAAE,aAAa,EAAE,MAAM,YAAY,CAAC;AAC3C,OAAO,oBAAoB,MAAM,8BAA8B,CAAC;AAChE,OAAO,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAOxC,IAAM,KAAK,GAAX,MAAM,KAAK;IAGI;IAAwB;IAAqC;IAAoC;IADrH,aAAa,GAAE,CAAC,gBAAgB,EAAC,eAAe,EAAC,iBAAiB,CAAC,CAAC;IACpE,YAAoB,UAAe,EAAS,cAA4B,EAAS,aAA2B,EAAS,MAAa;QAA9G,eAAU,GAAV,UAAU,CAAK;QAAS,mBAAc,GAAd,cAAc,CAAc;QAAS,kBAAa,GAAb,aAAa,CAAc;QAAS,WAAM,GAAN,MAAM,CAAO;IAAE,CAAC;IACtI,OAAO,GAAG,IAAI,SAAS,CAAC;QACvB,KAAK,EAAE,IAAI,WAAW,CAAC,EAAE,EAAE;YACzB,UAAU,EAAE,CAAC,UAAU,CAAC,QAAQ,EAAC,oBAAoB,CAAC,IAAI,CAAC,aAAa,CAAC,CAAC;SAC3E,CAAC;QACF,QAAQ,EAAE,IAAI,WAAW,CAAC,EAAE,EAAE;YAC5B,UAAU,EAAE,CAAC,UAAU,CAAC,QAAQ,EAAC,UAAU,CAAC,SAAS,CAAC,CAAC,CAAC,CAAC;SAC1D,CAAC;KACF,CAAC,CAAC;IACF,QAAQ;QACN,MAAM,QAAQ,GAAG,IAAI,CAAC,OAAO,CAAC,KAAqB,CAAC;QAEpD,OAAO,CAAC,GAAG,CAAC,gCAAgC,GAAC,QAAQ,CAAC,CAAC;QACvD,IAAI,CAAC,UAAU,CAAC,KAAK,CAAC,QAAQ,CAAC,CAAC,SAAS,CAAC;YAC5C,IAAI,EAAE,CAAC,GAAG,EAAE,EAAE;gBACb,IAAI,CAAC,aAAa,CAAC,GAAG,CAAC,OAAO,EAAC,GAAG,CAAC,KAAK,EAAC,EAAC,IAAI,EAAC,GAAG,EAAC,CAAC,CAAC;gBACrD,IAAI,CAAC,cAAc,CAAC,OAAO,CAAC,mBAAmB,EAAC,SAAS,CAAC,CAAC;gBAC5D,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,YAAY,CAAC,CAAC,CAAC;YACrC,CAAC;YACD,KAAK,EAAE,CAAC,GAAG,EAAE,EAAE;gBAAE,OAAO,CAAC,KAAK,CAAC,aAAa,EAAE,GAAG,CAAC,CAAC;gBAC9C,IAAI,CAAC,cAAc,CAAC,KAAK,CAAC,qBAAqB,EAAC,QAAQ,CAAC,CAAC;gBAC5D,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;YACpC,CAAC;SAEF,CAAC,CAAC;IAED,CAAC;;;;;;;;AA7BU,KAAK;IANjB,SAAS,CAAC;QACT,QAAQ,EAAE,WAAW;QACrB,OAAO,EAAE,CAAC,WAAW,EAAC,UAAU,EAAC,mBAAmB,EAAC,YAAY,CAAC;QAClE,8BAA2B;;KAE5B,CAAC;GACW,KAAK,CA+BjB",
      sourcesContent: [`import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule ,Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentLogin } from '../models/studentLogin';
import { Auth } from '../service/auth';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import EmailDomainValidator from '../validators/emailValidator';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  allowedDomain =["consultadd.com","hyperflex.com","knowcloudai.com"];
  constructor(private authSevice:Auth,private toasterService:ToastrService,private cookieService:CookieService,private router:Router){}
 empForm = new FormGroup({
  email: new FormControl('', {
    validators: [Validators.required,EmailDomainValidator(this.allowedDomain)],
  }),
  password: new FormControl('', {
    validators: [Validators.required,Validators.minLength(6)],
  })
 });
  onSubmit(){
    const formData = this.empForm.value as StudentLogin;
  
    console.log("Function called after onsubmit"+formData);
    this.authSevice.login(formData).subscribe({
  next: (res) =>{ 
   this.cookieService.set("token",res.token,{path:'/'});
   this.toasterService.success('Login Successfuly',"Success");
  this.router.navigate(['/dashboard']);
  },
  error: (err) => {console.error('Login error', err);
       this.toasterService.error('Invalid Credentials',"Failed");
     this.router.navigate(['/login']);
  }
  
});
    
  }

}
`]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d5edf73b65569f44c72252084b9820142d7336f6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1tubs6dmqp = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Login;
var init_login3 = __esm({
  "src/app/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_forms();
    init_router();
    init_forms();
    init_auth();
    init_ngx_cookie_service();
    init_router();
    init_ngx_toastr();
    init_emailValidator();
    init_common();
    cov_1tubs6dmqp();
    cov_1tubs6dmqp().s[0]++;
    Login = class Login2 {
      authSevice;
      toasterService;
      cookieService;
      router;
      allowedDomain = (cov_1tubs6dmqp().s[1]++, ["consultadd.com", "hyperflex.com", "knowcloudai.com"]);
      constructor(authSevice, toasterService, cookieService, router) {
        cov_1tubs6dmqp().f[0]++;
        cov_1tubs6dmqp().s[2]++;
        this.authSevice = authSevice;
        cov_1tubs6dmqp().s[3]++;
        this.toasterService = toasterService;
        cov_1tubs6dmqp().s[4]++;
        this.cookieService = cookieService;
        cov_1tubs6dmqp().s[5]++;
        this.router = router;
      }
      empForm = (cov_1tubs6dmqp().s[6]++, new FormGroup({
        email: new FormControl("", {
          validators: [Validators.required, EmailDomainValidator(this.allowedDomain)]
        }),
        password: new FormControl("", {
          validators: [Validators.required, Validators.minLength(6)]
        })
      }));
      onSubmit() {
        cov_1tubs6dmqp().f[1]++;
        const formData = (cov_1tubs6dmqp().s[7]++, this.empForm.value);
        cov_1tubs6dmqp().s[8]++;
        console.log("Function called after onsubmit" + formData);
        cov_1tubs6dmqp().s[9]++;
        this.authSevice.login(formData).subscribe({
          next: (res) => {
            cov_1tubs6dmqp().f[2]++;
            cov_1tubs6dmqp().s[10]++;
            this.cookieService.set("token", res.token, {
              path: "/"
            });
            cov_1tubs6dmqp().s[11]++;
            this.toasterService.success("Login Successfuly", "Success");
            cov_1tubs6dmqp().s[12]++;
            this.router.navigate(["/dashboard"]);
          },
          error: (err) => {
            cov_1tubs6dmqp().f[3]++;
            cov_1tubs6dmqp().s[13]++;
            console.error("Login error", err);
            cov_1tubs6dmqp().s[14]++;
            this.toasterService.error("Invalid Credentials", "Failed");
            cov_1tubs6dmqp().s[15]++;
            this.router.navigate(["/login"]);
          }
        });
      }
      static ctorParameters = (cov_1tubs6dmqp().s[16]++, () => {
        cov_1tubs6dmqp().f[4]++;
        cov_1tubs6dmqp().s[17]++;
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
    cov_1tubs6dmqp().s[18]++;
    Login = __decorate([Component({
      selector: "app-login",
      imports: [FormsModule, RouterLink, ReactiveFormsModule, CommonModule],
      template: login_default,
      styles: [login_default2]
    })], Login);
  }
});

// src/app/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    describe("Login", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Login]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-app-login-login.spec.js.map

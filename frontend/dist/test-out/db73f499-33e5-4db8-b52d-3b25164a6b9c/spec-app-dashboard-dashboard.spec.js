import {
  HrComponent,
  init_hr_component
} from "./chunk-PE3VIP4R.js";
import "./chunk-U2S7ZBOR.js";
import "./chunk-QMZDIYWG.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-N5A3YSTN.js";
import {
  CommonModule,
  init_common
} from "./chunk-EXIZREPD.js";
import {
  Marketing,
  init_marketing
} from "./chunk-7DVLFAFR.js";
import {
  employeeService,
  init_employee_service
} from "./chunk-VCOKURTV.js";
import "./chunk-SNTJHH7M.js";
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

// angular:jit:template:src/app/dashboard/dashboard.html
var dashboard_default;
var init_dashboard = __esm({
  "angular:jit:template:src/app/dashboard/dashboard.html"() {
    dashboard_default = `
<p class="h4 fw-lighter p-4">Welcome To {{department!='unknown' ? department : ''}} Dashbaord - Mr/Ms <label style="font-family: cursive;">{{employeeInfo.name}}. </label> </p>


<div *ngIf="department=='unknown'" class="row text-center">
   <h1 class="display-5 mt-5 p-5 "> Wait Till Hr Assign You Team .....</h1>
   <a href="https://www.consultadd.com/" target="_blank">Read about us ...</a>
</div>

<div class="container text-center">
   <app-hr-component></app-hr-component>
</div>

<div class="container ">
  <app-marketing></app-marketing>
</div>



 `;
  }
});

// angular:jit:style:src/app/dashboard/dashboard.css
var dashboard_default2;
var init_dashboard2 = __esm({
  "angular:jit:style:src/app/dashboard/dashboard.css"() {
    dashboard_default2 = "/* src/app/dashboard/dashboard.css */\n/*# sourceMappingURL=dashboard.css.map */\n";
  }
});

// src/app/dashboard/dashboard.ts
function cov_1lp5lizcva() {
  var path = "/Users/consultadd/Angular/my-app/src/app/dashboard/dashboard.ts";
  var hash = "5f4e5080ed84f896b992dc9ab5991b90b4d2061d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/dashboard/dashboard.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 14,
          column: 26
        }
      },
      "2": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 47
        }
      },
      "3": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 43
        }
      },
      "4": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 25
        }
      },
      "5": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 34,
          column: 11
        }
      },
      "6": {
        start: {
          line: 26,
          column: 16
        },
        end: {
          line: 26,
          column: 40
        }
      },
      "7": {
        start: {
          line: 27,
          column: 16
        },
        end: {
          line: 27,
          column: 78
        }
      },
      "8": {
        start: {
          line: 28,
          column: 16
        },
        end: {
          line: 28,
          column: 67
        }
      },
      "9": {
        start: {
          line: 31,
          column: 16
        },
        end: {
          line: 31,
          column: 73
        }
      },
      "10": {
        start: {
          line: 32,
          column: 16
        },
        end: {
          line: 32,
          column: 44
        }
      },
      "11": {
        start: {
          line: 36,
          column: 28
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "12": {
        start: {
          line: 36,
          column: 34
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "13": {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 48,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 48
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 15
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        loc: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 35,
            column: 5
          }
        },
        line: 23
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 25,
            column: 19
          }
        },
        loc: {
          start: {
            line: 25,
            column: 27
          },
          end: {
            line: 29,
            column: 13
          }
        },
        line: 25
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 30,
            column: 19
          },
          end: {
            line: 30,
            column: 20
          }
        },
        loc: {
          start: {
            line: 30,
            column: 28
          },
          end: {
            line: 33,
            column: 13
          }
        },
        line: 30
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 36,
            column: 28
          },
          end: {
            line: 36,
            column: 29
          }
        },
        loc: {
          start: {
            line: 36,
            column: 34
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 36
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 34
          },
          end: {
            line: 27,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 51
          },
          end: {
            line: 27,
            column: 65
          }
        }, {
          start: {
            line: 27,
            column: 68
          },
          end: {
            line: 27,
            column: 77
          }
        }],
        line: 27
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
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "dashboard.js",
      sourceRoot: "",
      sources: ["dashboard.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAC1C,OAAO,EAAE,eAAe,EAAE,MAAM,6BAA6B,CAAC;AAC9D,OAAO,EAAE,aAAa,EAAE,MAAM,oBAAoB,CAAC;AAEnD,OAAO,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAC/C,OAAO,EAAE,WAAW,EAAE,MAAM,iCAAiC,CAAC;AAC9D,OAAO,EAAE,SAAS,EAAE,MAAM,wBAAwB,CAAC;AAS5C,IAAM,SAAS,GAAf,MAAM,SAAS;IAGC;IAAwC;IAFxD,YAAY,CAAiB;IAC7B,UAAU,GAAQ,SAAS,CAAC;IAChC,YAAoB,eAA+B,EAAS,aAA4B;QAApE,oBAAe,GAAf,eAAe,CAAgB;QAAS,kBAAa,GAAb,aAAa,CAAe;IAAE,CAAC;IAAA,CAAC;IAC3F,QAAQ;QACR,IAAI,CAAC,SAAS,EAAE,CAAC;IACnB,CAAC;IAGA,SAAS;QACL,IAAI,CAAC,eAAe,CAAC,SAAS,EAAE,CAAC,SAAS,CAAC;YAC5C,IAAI,EAAE,CAAC,GAAO,EAAE,EAAE;gBAChB,IAAI,CAAC,YAAY,GAAG,GAAG,CAAC;gBACxB,IAAI,CAAC,UAAU,GAAC,GAAG,CAAC,UAAU,CAAC,CAAC,CAAC,GAAG,CAAC,UAAU,CAAC,CAAC,CAAA,SAAS,CAAC;gBAC3D,OAAO,CAAC,GAAG,CAAC,kBAAkB,EAAE,IAAI,CAAC,YAAY,CAAC,CAAC;YACrD,CAAC;YACD,KAAK,EAAE,CAAC,GAAG,EAAE,EAAE;gBACb,OAAO,CAAC,KAAK,CAAC,oCAAoC,EAAE,GAAG,CAAC,CAAC;gBACzD,IAAI,CAAC,UAAU,GAAC,SAAS,CAAC;YAC5B,CAAC;SACF,CAAC,CAAC;IACJ,CAAC;;;;;;AArBS,SAAS;IAPrB,SAAS,CAAC;QACT,QAAQ,EAAE,eAAe;QACzB,OAAO,EAAE,CAAC,YAAY,EAAE,WAAW,EAAE,SAAS,CAAC;QAC/C,8BAA+B;;KAEhC,CAAC;GAEW,SAAS,CAyBrB",
      sourcesContent: [`import { Component } from '@angular/core';
import { employeeService } from '../service/employee-service';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeModel } from '../models/Employee';
import { CommonModule } from '@angular/common';
import { HrComponent } from '../Hr/hr-component/hr-component';
import { Marketing } from '../Marketing/marketing';
import { Login } from "../login/login";
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HrComponent, Marketing],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard {
       employeeInfo !:EmployeeModel;
       department:String='unknown';  
   constructor(private employeeService:employeeService,private cookieService: CookieService){};
    ngOnInit() {
    this.getMyInfo();
  }


   getMyInfo():void{
       this.employeeService.getMyInfo().subscribe({
      next: (res:any) => {
        this.employeeInfo = res;
        this.department=res.department ? res.department :'unknown';
        console.log('Employee loaded:', this.employeeInfo);
      },
      error: (err) => {
        console.error('Error while fetching employee data', err);
        this.department='unknown';
      }
    });
   }

   

}
`]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5f4e5080ed84f896b992dc9ab5991b90b4d2061d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1lp5lizcva = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Dashboard;
var init_dashboard3 = __esm({
  "src/app/dashboard/dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard();
    init_dashboard2();
    init_core();
    init_employee_service();
    init_ngx_cookie_service();
    init_common();
    init_hr_component();
    init_marketing();
    cov_1lp5lizcva();
    cov_1lp5lizcva().s[0]++;
    Dashboard = class Dashboard2 {
      employeeService;
      cookieService;
      employeeInfo;
      department = (cov_1lp5lizcva().s[1]++, "unknown");
      constructor(employeeService2, cookieService) {
        cov_1lp5lizcva().f[0]++;
        cov_1lp5lizcva().s[2]++;
        this.employeeService = employeeService2;
        cov_1lp5lizcva().s[3]++;
        this.cookieService = cookieService;
      }
      ngOnInit() {
        cov_1lp5lizcva().f[1]++;
        cov_1lp5lizcva().s[4]++;
        this.getMyInfo();
      }
      getMyInfo() {
        cov_1lp5lizcva().f[2]++;
        cov_1lp5lizcva().s[5]++;
        this.employeeService.getMyInfo().subscribe({
          next: (res) => {
            cov_1lp5lizcva().f[3]++;
            cov_1lp5lizcva().s[6]++;
            this.employeeInfo = res;
            cov_1lp5lizcva().s[7]++;
            this.department = res.department ? (cov_1lp5lizcva().b[0][0]++, res.department) : (cov_1lp5lizcva().b[0][1]++, "unknown");
            cov_1lp5lizcva().s[8]++;
            console.log("Employee loaded:", this.employeeInfo);
          },
          error: (err) => {
            cov_1lp5lizcva().f[4]++;
            cov_1lp5lizcva().s[9]++;
            console.error("Error while fetching employee data", err);
            cov_1lp5lizcva().s[10]++;
            this.department = "unknown";
          }
        });
      }
      static ctorParameters = (cov_1lp5lizcva().s[11]++, () => {
        cov_1lp5lizcva().f[5]++;
        cov_1lp5lizcva().s[12]++;
        return [{
          type: employeeService
        }, {
          type: CookieService
        }];
      });
    };
    cov_1lp5lizcva().s[13]++;
    Dashboard = __decorate([Component({
      selector: "app-dashboard",
      imports: [CommonModule, HrComponent, Marketing],
      template: dashboard_default,
      styles: [dashboard_default2]
    })], Dashboard);
  }
});

// src/app/dashboard/dashboard.spec.ts
var require_dashboard_spec = __commonJS({
  "src/app/dashboard/dashboard.spec.ts"(exports) {
    init_testing();
    init_dashboard3();
    describe("Dashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Dashboard]
        }).compileComponents();
        fixture = TestBed.createComponent(Dashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_spec();
//# sourceMappingURL=spec-app-dashboard-dashboard.spec.js.map

import {
  Router,
  RouterLink,
  RouterOutlet,
  init_router
} from "./chunk-TPMNYAGT.js";
import {
  FormsModule,
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
  employeeService,
  init_employee_service
} from "./chunk-VCOKURTV.js";
import "./chunk-JDLSQL5R.js";
import "./chunk-ILW7OPSS.js";
import {
  Component,
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  signal
} from "./chunk-NMBEJXC6.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src/app/app.html"() {
    app_default = `
<main class="p-2 d-flex justify-content-between">
 <div>
    <img src="/consultAdd.svg" class="" alt=""> 
 </div >

<div *ngIf="!isUserLoggedIn()" class="mx-2 gap-3 d-flex">
  <button class="btn btn-outline-primary flex-grow-1 px-3" [routerLink]="['/login']">
    Login
  </button>
  <button class="btn btn-outline-success flex-grow-1 px-3" [routerLink]="['/signup']">
    SignUp
  </button>     
</div>

<div *ngIf="isUserLoggedIn()" class="mx-2 gap-3 d-flex">
  <button (click)="logout()" class="btn btn-outline-danger flex-grow-1 px-3">
    Logout
  </button>
</div>


</main>


<router-outlet />
`;
  }
});

// angular:jit:style:src/app/app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src/app/app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/validators/AuthStatusService.ts
function cov_hrovnyrjt() {
  var path = "/Users/consultadd/Angular/my-app/src/app/validators/AuthStatusService.ts";
  var hash = "4416610abcbe8bc6fabc65b78745e3c8f4f573bf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/validators/AuthStatusService.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 24
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 43
        }
      },
      "2": {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 11,
          column: 53
        }
      },
      "3": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 23
        }
      },
      "4": {
        start: {
          line: 14,
          column: 28
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "5": {
        start: {
          line: 14,
          column: 34
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "6": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 22,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 31
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 17
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 28
          },
          end: {
            line: 14,
            column: 29
          }
        },
        loc: {
          start: {
            line: 14,
            column: 34
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 14
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "AuthStatusService.js",
      sourceRoot: "",
      sources: ["AuthStatusService.ts"],
      names: [],
      mappings: "AAAA,0CAA0C;;AAE1C,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAC3C,OAAO,EAAE,aAAa,EAAE,MAAM,oBAAoB,CAAC;AAK5C,IAAM,iBAAiB,GAAvB,MAAM,iBAAiB;IAER;IAApB,YAAoB,aAA4B;QAA5B,kBAAa,GAAb,aAAa,CAAe;IAAG,CAAC;IAEpD,UAAU;QACR,MAAM,KAAK,GAAG,IAAI,CAAC,aAAa,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC,CAAC,uCAAuC;QACtF,OAAO,CAAC,CAAC,KAAK,CAAC;IACjB,CAAC;;;;;AAPU,iBAAiB;IAH7B,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GACW,iBAAiB,CAQ7B",
      sourcesContent: ["// src/app/services/auth-status.service.ts\n\nimport { Injectable } from '@angular/core';\nimport { CookieService } from 'ngx-cookie-service';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class AuthStatusService {\n\n  constructor(private cookieService: CookieService) {}\n\n  isLoggedIn(): boolean {\n    const token = this.cookieService.get('token'); // or use localStorage.getItem('token')\n    return !!token;\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4416610abcbe8bc6fabc65b78745e3c8f4f573bf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_hrovnyrjt = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var AuthStatusService;
var init_AuthStatusService = __esm({
  "src/app/validators/AuthStatusService.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_ngx_cookie_service();
    cov_hrovnyrjt();
    cov_hrovnyrjt().s[0]++;
    AuthStatusService = class AuthStatusService2 {
      cookieService;
      constructor(cookieService) {
        cov_hrovnyrjt().f[0]++;
        cov_hrovnyrjt().s[1]++;
        this.cookieService = cookieService;
      }
      isLoggedIn() {
        cov_hrovnyrjt().f[1]++;
        const token = (cov_hrovnyrjt().s[2]++, this.cookieService.get("token"));
        cov_hrovnyrjt().s[3]++;
        return !!token;
      }
      static ctorParameters = (cov_hrovnyrjt().s[4]++, () => {
        cov_hrovnyrjt().f[2]++;
        cov_hrovnyrjt().s[5]++;
        return [{
          type: CookieService
        }];
      });
    };
    cov_hrovnyrjt().s[6]++;
    AuthStatusService = __decorate([Injectable({
      providedIn: "root"
    })], AuthStatusService);
  }
});

// src/app/app.ts
function cov_2808u1z4qa() {
  var path = "/Users/consultadd/Angular/my-app/src/app/app.ts";
  var hash = "50341e385c87e2e26ffaf8d6bf80f58fa5a1d565";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/app.ts",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 10
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 29
        }
      },
      "2": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 37
        }
      },
      "3": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 47
        }
      },
      "4": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 43
        }
      },
      "5": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 28
        }
      },
      "6": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 44
        }
      },
      "7": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 43
        }
      },
      "8": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 41
        }
      },
      "9": {
        start: {
          line: 33,
          column: 28
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "10": {
        start: {
          line: 33,
          column: 34
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "11": {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 47,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 68
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 15
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        loc: {
          start: {
            line: 26,
            column: 21
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 13
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 29
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 33,
            column: 28
          },
          end: {
            line: 33,
            column: 29
          }
        },
        loc: {
          start: {
            line: 33,
            column: 34
          },
          end: {
            line: 38,
            column: 5
          }
        },
        line: 33
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
      "11": 0
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
      file: "app.js",
      sourceRoot: "",
      sources: ["app.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,EAAE,MAAM,eAAe,CAAC;AAClD,OAAO,EAAE,MAAM,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAEvD,OAAO,EAAE,WAAW,EAAE,MAAM,gBAAgB,CAAC;AAE7C,OAAO,EAAE,UAAU,EAAE,MAAM,iBAAiB,CAAC;AAC7C,OAAO,EAAE,eAAe,EAAE,MAAM,4BAA4B,CAAC;AAC7D,OAAO,EAAE,aAAa,EAAE,MAAM,oBAAoB,CAAC;AAEnD,OAAO,EAAE,iBAAiB,EAAE,MAAM,gCAAgC,CAAC;AACnE,OAAO,EAAE,YAAY,EAAE,MAAM,iBAAiB,CAAC;AAOxC,IAAM,GAAG,GAAT,MAAM,GAAG;IAEM;IAAsB;IAAqC;IAAwC;IAAvH,YAAoB,MAAa,EAAS,UAA4B,EAAS,eAA+B,EAAS,aAA4B;QAA/H,WAAM,GAAN,MAAM,CAAO;QAAS,eAAU,GAAV,UAAU,CAAkB;QAAS,oBAAe,GAAf,eAAe,CAAgB;QAAS,kBAAa,GAAb,aAAa,CAAe;IAAE,CAAC;IAExJ,QAAQ;IAEN,CAAC;IACkB,KAAK,GAAG,MAAM,CAAC,QAAQ,CAAC,CAAC;IAE5C,cAAc;QACd,OAAO,IAAI,CAAC,UAAU,CAAC,UAAU,EAAE,CAAC;IACtC,CAAC;IAEA,MAAM;QACH,IAAI,CAAC,aAAa,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC;QACnC,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;IACnC,CAAC;;;;;;;;AAhBU,GAAG;IANf,SAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,OAAO,EAAE,CAAC,YAAY,EAAC,UAAU,EAAC,WAAW,EAAC,YAAY,CAAC;QAC3D,8BAAyB;;KAE1B,CAAC;GACW,GAAG,CAiBf",
      sourcesContent: ["import { Component, signal } from '@angular/core';\nimport { Router, RouterOutlet } from '@angular/router';\nimport { Login } from './login/login';\nimport { FormsModule } from '@angular/forms';\nimport { Home } from './home/home';\nimport { RouterLink } from '@angular/router';\nimport { employeeService } from './service/employee-service';\nimport { CookieService } from 'ngx-cookie-service';\nimport { Dashboard } from './dashboard/dashboard';\nimport { AuthStatusService } from './validators/AuthStatusService';\nimport { CommonModule } from '@angular/common';\n@Component({\n  selector: 'app-root',\n  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],\n  templateUrl: './app.html',\n  styleUrl: './app.css'\n})\nexport class App {\n\n  constructor(private router:Router,private authStatus:AuthStatusService,private employeeService:employeeService,private cookieService :CookieService){}\n\nngOnInit() {\n\n  }\n  protected readonly title = signal('my-app');\n  \n  isUserLoggedIn(): boolean {\n  return this.authStatus.isLoggedIn();\n}\n\n logout(): void {\n    this.cookieService.delete('token');\n    this.router.navigate(['/login']);\n  }\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "50341e385c87e2e26ffaf8d6bf80f58fa5a1d565"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_2808u1z4qa = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_forms();
    init_router();
    init_employee_service();
    init_ngx_cookie_service();
    init_AuthStatusService();
    init_common();
    cov_2808u1z4qa();
    cov_2808u1z4qa().s[0]++;
    App = class App2 {
      router;
      authStatus;
      employeeService;
      cookieService;
      constructor(router, authStatus, employeeService2, cookieService) {
        cov_2808u1z4qa().f[0]++;
        cov_2808u1z4qa().s[1]++;
        this.router = router;
        cov_2808u1z4qa().s[2]++;
        this.authStatus = authStatus;
        cov_2808u1z4qa().s[3]++;
        this.employeeService = employeeService2;
        cov_2808u1z4qa().s[4]++;
        this.cookieService = cookieService;
      }
      ngOnInit() {
        cov_2808u1z4qa().f[1]++;
      }
      title = (cov_2808u1z4qa().s[5]++, signal("my-app"));
      isUserLoggedIn() {
        cov_2808u1z4qa().f[2]++;
        cov_2808u1z4qa().s[6]++;
        return this.authStatus.isLoggedIn();
      }
      logout() {
        cov_2808u1z4qa().f[3]++;
        cov_2808u1z4qa().s[7]++;
        this.cookieService.delete("token");
        cov_2808u1z4qa().s[8]++;
        this.router.navigate(["/login"]);
      }
      static ctorParameters = (cov_2808u1z4qa().s[9]++, () => {
        cov_2808u1z4qa().f[4]++;
        cov_2808u1z4qa().s[10]++;
        return [{
          type: Router
        }, {
          type: AuthStatusService
        }, {
          type: employeeService
        }, {
          type: CookieService
        }];
      });
    };
    cov_2808u1z4qa().s[11]++;
    App = __decorate([Component({
      selector: "app-root",
      imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
      template: app_default,
      styles: [app_default2]
    })], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, my-app");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map

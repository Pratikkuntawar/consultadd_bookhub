import {
  Router,
  init_router
} from "./chunk-TPMNYAGT.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-N5A3YSTN.js";
import "./chunk-EXIZREPD.js";
import "./chunk-JDLSQL5R.js";
import "./chunk-ILW7OPSS.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-NMBEJXC6.js";
import "./chunk-TTULUY32.js";

// src/app/auth-guard.spec.ts
init_testing();

// src/app/auth-guard.ts
init_router();
init_ngx_cookie_service();
init_core();
function cov_2i50okptw() {
  var path = "/Users/consultadd/Angular/my-app/src/app/auth-guard.ts";
  var hash = "8f08db278804ef3b658954844e6363cb627fbcd0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/auth-guard.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 47
        }
      },
      "2": {
        start: {
          line: 6,
          column: 19
        },
        end: {
          line: 6,
          column: 33
        }
      },
      "3": {
        start: {
          line: 7,
          column: 18
        },
        end: {
          line: 7,
          column: 44
        }
      },
      "4": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 11,
          column: 5
        }
      },
      "5": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 36
        }
      },
      "6": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 21
        }
      },
      "7": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 4,
            column: 26
          }
        },
        loc: {
          start: {
            line: 4,
            column: 43
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        }, {
          start: {
            line: void 0,
            column: void 0
          },
          end: {
            line: void 0,
            column: void 0
          }
        }],
        line: 8
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
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "auth-guard.js",
      sourceRoot: "",
      sources: ["auth-guard.ts"],
      names: [],
      mappings: "AAAA,OAAO,EAAiB,MAAM,EAAE,MAAM,iBAAiB,CAAC;AACxD,OAAO,EAAE,aAAa,EAAE,MAAM,oBAAoB,CAAC;AACnD,OAAO,EAAE,MAAM,EAAU,MAAM,eAAe,CAAC;AAC/C,MAAM,CAAC,MAAM,SAAS,GAAkB,CAAC,KAAK,EAAE,KAAK,EAAE,EAAE;IACvD,MAAM,aAAa,GAAC,MAAM,CAAC,aAAa,CAAC,CAAC;IAC1C,MAAM,MAAM,GAAC,MAAM,CAAC,MAAM,CAAC,CAAA;IAC3B,MAAM,KAAK,GAAC,aAAa,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC;IACvC,IAAG,CAAC,KAAK,EAAC,CAAC;QACT,MAAM,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;QAC5B,OAAO,KAAK,CAAC;IACf,CAAC;IACD,OAAO,IAAI,CAAC;AACd,CAAC,CAAC",
      sourcesContent: ["import { CanActivateFn, Router } from '@angular/router';\nimport { CookieService } from 'ngx-cookie-service';\nimport { inject, Inject } from '@angular/core';\nexport const authGuard: CanActivateFn = (route, state) => {\n  const cookieservice=inject(CookieService);\n  const router=inject(Router)\n  const token=cookieservice.get('token');\n  if(!token){\n    router.navigate(['/login']);\n    return false;\n  }\n  return true;\n};\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8f08db278804ef3b658954844e6363cb627fbcd0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_2i50okptw = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2i50okptw();
cov_2i50okptw().s[0]++;
var authGuard = (route, state) => {
  cov_2i50okptw().f[0]++;
  const cookieservice = (cov_2i50okptw().s[1]++, inject(CookieService));
  const router = (cov_2i50okptw().s[2]++, inject(Router));
  const token = (cov_2i50okptw().s[3]++, cookieservice.get("token"));
  cov_2i50okptw().s[4]++;
  if (!token) {
    cov_2i50okptw().b[0][0]++;
    cov_2i50okptw().s[5]++;
    router.navigate(["/login"]);
    cov_2i50okptw().s[6]++;
    return false;
  } else {
    cov_2i50okptw().b[0][1]++;
  }
  cov_2i50okptw().s[7]++;
  return true;
};

// src/app/auth-guard.spec.ts
describe("authGuard", () => {
  const executeGuard = (...guardParameters) => TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-auth-guard.spec.js.map

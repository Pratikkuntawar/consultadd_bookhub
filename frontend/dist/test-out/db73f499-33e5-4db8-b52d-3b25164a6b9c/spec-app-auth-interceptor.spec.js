import {
  Router,
  init_router
} from "./chunk-TPMNYAGT.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-N5A3YSTN.js";
import "./chunk-EXIZREPD.js";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  init_http
} from "./chunk-JDLSQL5R.js";
import "./chunk-ILW7OPSS.js";
import {
  TestBed,
  catchError,
  init_core,
  init_esm,
  init_testing,
  inject,
  throwError
} from "./chunk-NMBEJXC6.js";
import "./chunk-TTULUY32.js";

// src/app/auth-interceptor.spec.ts
init_testing();
init_http();

// src/app/auth-interceptor.ts
init_core();
init_router();
init_ngx_cookie_service();
init_esm();
function cov_8b0bn9u8p() {
  var path = "/Users/consultadd/Angular/my-app/src/app/auth-interceptor.ts";
  var hash = "67433db83501a15b8678a60be18ec527ab6aa168";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/auth-interceptor.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 31
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 6,
          column: 47
        }
      },
      "2": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 33
        }
      },
      "3": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 44
        }
      },
      "4": {
        start: {
          line: 9,
          column: 19
        },
        end: {
          line: 9,
          column: 55
        }
      },
      "5": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "6": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 15,
          column: 11
        }
      },
      "7": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 25,
          column: 8
        }
      },
      "8": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "9": {
        start: {
          line: 21,
          column: 12
        },
        end: {
          line: 21,
          column: 42
        }
      },
      "10": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 40
        }
      },
      "11": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 39
        }
      },
      "12": {
        start: {
          line: 24,
          column: 32
        },
        end: {
          line: 24,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 31
          },
          end: {
            line: 5,
            column: 32
          }
        },
        loc: {
          start: {
            line: 5,
            column: 46
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 42
          },
          end: {
            line: 17,
            column: 43
          }
        },
        loc: {
          start: {
            line: 17,
            column: 53
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 26
          },
          end: {
            line: 24,
            column: 27
          }
        },
        loc: {
          start: {
            line: 24,
            column: 32
          },
          end: {
            line: 24,
            column: 37
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 16,
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
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 23,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 23,
            column: 9
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
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 18,
            column: 12
          },
          end: {
            line: 20,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 12
          },
          end: {
            line: 18,
            column: 32
          }
        }, {
          start: {
            line: 19,
            column: 12
          },
          end: {
            line: 19,
            column: 57
          }
        }, {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 50
          }
        }],
        line: 18
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
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "auth-interceptor.js",
      sourceRoot: "",
      sources: ["auth-interceptor.ts"],
      names: [],
      mappings: "AACA,OAAO,EAAE,MAAM,EAAE,MAAM,eAAe,CAAC;AACvC,OAAO,EAAE,MAAM,EAAE,MAAM,iBAAiB,CAAC;AACzC,OAAO,EAAE,aAAa,EAAE,MAAM,oBAAoB,CAAC;AACnD,OAAO,EAAE,UAAU,EAAE,UAAU,EAAE,MAAM,MAAM,CAAC;AAE9C,MAAM,CAAC,MAAM,eAAe,GAAsB,CAAC,GAAG,EAAE,IAAI,EAAE,EAAE;IAC9D,MAAM,aAAa,GAAG,MAAM,CAAC,aAAa,CAAC,CAAC;IAC5C,MAAM,MAAM,GAAG,MAAM,CAAC,MAAM,CAAC,CAAC;IAC9B,MAAM,KAAK,GAAG,aAAa,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC;IAEzC,IAAI,QAAQ,GAAG,GAAG,CAAC,KAAK,CAAC,EAAE,eAAe,EAAE,IAAI,EAAE,CAAC,CAAC;IAEpD,IAAI,KAAK,EAAE,CAAC;QACV,QAAQ,GAAG,QAAQ,CAAC,KAAK,CAAC;YACxB,UAAU,EAAE;gBACV,aAAa,EAAE,UAAU,KAAK,EAAE;aACjC;SACF,CAAC,CAAC;IACL,CAAC;IAED,OAAO,IAAI,CAAC,QAAQ,CAAC,CAAC,IAAI,CACxB,UAAU,CAAC,CAAC,KAAwB,EAAE,EAAE;QACtC,IACE,KAAK,CAAC,MAAM,KAAK,GAAG;YACpB,KAAK,CAAC,KAAK,EAAE,OAAO,EAAE,QAAQ,CAAC,aAAa,CAAC;YAC7C,KAAK,CAAC,OAAO,EAAE,QAAQ,CAAC,aAAa,CAAC,EACtC,CAAC;YACD,aAAa,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC;YAC9B,MAAM,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC;QAC9B,CAAC;QACD,OAAO,UAAU,CAAC,GAAG,EAAE,CAAC,KAAK,CAAC,CAAC;IACjC,CAAC,CAAC,CACH,CAAC;AACJ,CAAC,CAAC",
      sourcesContent: ["import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';\nimport { inject } from '@angular/core';\nimport { Router } from '@angular/router';\nimport { CookieService } from 'ngx-cookie-service';\nimport { catchError, throwError } from 'rxjs';\n\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const cookieService = inject(CookieService);\n  const router = inject(Router);\n  const token = cookieService.get('token');\n\n  let cloneReq = req.clone({ withCredentials: true });\n  \n  if (token) {\n    cloneReq = cloneReq.clone({\n      setHeaders: {\n        Authorization: `Bearer ${token}`\n      }\n    });\n  }\n\n  return next(cloneReq).pipe(\n    catchError((error: HttpErrorResponse) => {\n      if (\n        error.status === 401 ||\n        error.error?.message?.includes('JWT expired') ||\n        error.message?.includes('JWT expired')\n      ) {\n        cookieService.delete('token');\n        router.navigate(['/login']);\n      }\n      return throwError(() => error);\n    })\n  );\n};\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "67433db83501a15b8678a60be18ec527ab6aa168"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_8b0bn9u8p = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_8b0bn9u8p();
cov_8b0bn9u8p().s[0]++;
var authInterceptor = (req, next) => {
  cov_8b0bn9u8p().f[0]++;
  const cookieService = (cov_8b0bn9u8p().s[1]++, inject(CookieService));
  const router = (cov_8b0bn9u8p().s[2]++, inject(Router));
  const token = (cov_8b0bn9u8p().s[3]++, cookieService.get("token"));
  let cloneReq = (cov_8b0bn9u8p().s[4]++, req.clone({
    withCredentials: true
  }));
  cov_8b0bn9u8p().s[5]++;
  if (token) {
    cov_8b0bn9u8p().b[0][0]++;
    cov_8b0bn9u8p().s[6]++;
    cloneReq = cloneReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  } else {
    cov_8b0bn9u8p().b[0][1]++;
  }
  cov_8b0bn9u8p().s[7]++;
  return next(cloneReq).pipe(catchError((error) => {
    cov_8b0bn9u8p().f[1]++;
    cov_8b0bn9u8p().s[8]++;
    if ((cov_8b0bn9u8p().b[2][0]++, error.status === 401) || (cov_8b0bn9u8p().b[2][1]++, error.error?.message?.includes("JWT expired")) || (cov_8b0bn9u8p().b[2][2]++, error.message?.includes("JWT expired"))) {
      cov_8b0bn9u8p().b[1][0]++;
      cov_8b0bn9u8p().s[9]++;
      cookieService.delete("token");
      cov_8b0bn9u8p().s[10]++;
      router.navigate(["/login"]);
    } else {
      cov_8b0bn9u8p().b[1][1]++;
    }
    cov_8b0bn9u8p().s[11]++;
    return throwError(() => {
      cov_8b0bn9u8p().f[2]++;
      cov_8b0bn9u8p().s[12]++;
      return error;
    });
  }));
};

// src/app/auth-interceptor.spec.ts
init_ngx_cookie_service();
describe("authInterceptor", () => {
  let http;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CookieService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: authInterceptor,
          multi: true
        }
      ]
    });
    http = TestBed.inject(HttpClient);
  });
  it("should be created", () => {
    const interceptor = TestBed.inject(HTTP_INTERCEPTORS);
    expect(interceptor).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-auth-interceptor.spec.js.map

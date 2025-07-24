import {
  HttpClient,
  init_http
} from "./chunk-JDLSQL5R.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NMBEJXC6.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/service/auth.ts
function cov_1mione0baz() {
  var path = "/Users/consultadd/Angular/my-app/src/app/service/auth.ts";
  var hash = "1025a8368c37404edb74a0024a1e0fb7e2ea0f12";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/service/auth.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 11
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 25
        }
      },
      "2": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 80
        }
      },
      "3": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 26
        }
      },
      "4": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 75
        }
      },
      "5": {
        start: {
          line: 16,
          column: 28
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "6": {
        start: {
          line: 16,
          column: 34
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "7": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 24,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 22
          },
          end: {
            line: 8,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 19
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 12
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 16,
            column: 28
          },
          end: {
            line: 16,
            column: 29
          }
        },
        loc: {
          start: {
            line: 16,
            column: 34
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "auth.js",
      sourceRoot: "",
      sources: ["auth.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAC3C,OAAO,EAAE,UAAU,EAAc,MAAM,sBAAsB,CAAC;AAQvD,IAAM,IAAI,GAAV,MAAM,IAAI;IACK;IAApB,YAAoB,IAAe;QAAf,SAAI,GAAJ,IAAI,CAAW;IAAE,CAAC;IAEtC,KAAK,CAAC,IAAQ;QAEZ,OAAO,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,0CAA0C,EAAC,IAAI,CAAC,CAAC;IAEzE,CAAC;IACD,QAAQ,CAAC,IAAkB;QACzB,OAAO,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;QAClB,OAAO,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,qCAAqC,EAAC,IAAI,CAAC,CAAC;IACpE,CAAC;;;;;AAXU,IAAI;IAJhB,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GAEW,IAAI,CAYhB",
      sourcesContent: [`import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

import { EmployeeModel } from '../models/Employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Auth {
  constructor(private http:HttpClient){}

  login(data:any):Observable<any>{
   
    return this.http.post("http://localhost:8080/auth/employeeLogin",data);
    
  }
  register(data:EmployeeModel):Observable<any> {
    console.log(data);
    return this.http.post("http://localhost:8080/auth/register",data);
  }
}
`]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1025a8368c37404edb74a0024a1e0fb7e2ea0f12"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1mione0baz = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Auth;
var init_auth = __esm({
  "src/app/service/auth.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    cov_1mione0baz();
    cov_1mione0baz().s[0]++;
    Auth = class Auth2 {
      http;
      constructor(http) {
        cov_1mione0baz().f[0]++;
        cov_1mione0baz().s[1]++;
        this.http = http;
      }
      login(data) {
        cov_1mione0baz().f[1]++;
        cov_1mione0baz().s[2]++;
        return this.http.post("http://localhost:8080/auth/employeeLogin", data);
      }
      register(data) {
        cov_1mione0baz().f[2]++;
        cov_1mione0baz().s[3]++;
        console.log(data);
        cov_1mione0baz().s[4]++;
        return this.http.post("http://localhost:8080/auth/register", data);
      }
      static ctorParameters = (cov_1mione0baz().s[5]++, () => {
        cov_1mione0baz().f[3]++;
        cov_1mione0baz().s[6]++;
        return [{
          type: HttpClient
        }];
      });
    };
    cov_1mione0baz().s[7]++;
    Auth = __decorate([Injectable({
      providedIn: "root"
    })], Auth);
  }
});

export {
  Auth,
  init_auth
};
//# sourceMappingURL=chunk-MHIX2FDS.js.map

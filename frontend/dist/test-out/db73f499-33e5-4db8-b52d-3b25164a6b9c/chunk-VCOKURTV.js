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

// src/app/service/employee-service.ts
function cov_mo5ngg86u() {
  var path = "/Users/consultadd/Angular/my-app/src/app/service/employee-service.ts";
  var hash = "333817e0d7e1385c2d76d55b9a79acf90703de5a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/service/employee-service.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 17,
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
          column: 37
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 46
        }
      },
      "3": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 50
        }
      },
      "4": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 79
        }
      },
      "5": {
        start: {
          line: 14,
          column: 28
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "6": {
        start: {
          line: 14,
          column: 34
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "7": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 22,
          column: 20
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
            column: 28
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 6
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
            column: 16
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
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "employee-service.js",
      sourceRoot: "",
      sources: ["employee-service.ts"],
      names: [],
      mappings: ";AAAA,OAAO,EAAE,UAAU,EAAE,MAAM,eAAe,CAAC;AAC3C,OAAO,EAAE,UAAU,EAAe,MAAM,sBAAsB,CAAC;AAMxD,IAAM,eAAe,GAArB,MAAM,eAAe;IACN;IAApB,YAAoB,UAAsB;QAAtB,eAAU,GAAV,UAAU,CAAY;QACxC,OAAO,CAAC,GAAG,CAAC,wBAAwB,CAAC,CAAC;IACxC,CAAC;IAED,SAAS;QACP,OAAO,CAAC,GAAG,CAAC,4BAA4B,CAAC,CAAC;QAC1C,OAAO,IAAI,CAAC,UAAU,CAAC,GAAG,CAAgB,0CAA0C,CAAC,CAAC;IACxF,CAAC;;;;;AARU,eAAe;IAH3B,UAAU,CAAC;QACV,UAAU,EAAE,MAAM;KACnB,CAAC;GACW,eAAe,CAW3B",
      sourcesContent: [`import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeModel } from '../models/Employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class employeeService {
  constructor(private httpClient: HttpClient) {
    console.log("This is StudentService");
  }

  getMyInfo(): Observable<EmployeeModel> {
    console.log("In the getEmployee service");
    return this.httpClient.get<EmployeeModel>("http://localhost:8080/employee/getMyInfo");
  }
 

}
`]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "333817e0d7e1385c2d76d55b9a79acf90703de5a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_mo5ngg86u = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var employeeService;
var init_employee_service = __esm({
  "src/app/service/employee-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    cov_mo5ngg86u();
    cov_mo5ngg86u().s[0]++;
    employeeService = class employeeService2 {
      httpClient;
      constructor(httpClient) {
        cov_mo5ngg86u().f[0]++;
        cov_mo5ngg86u().s[1]++;
        this.httpClient = httpClient;
        cov_mo5ngg86u().s[2]++;
        console.log("This is StudentService");
      }
      getMyInfo() {
        cov_mo5ngg86u().f[1]++;
        cov_mo5ngg86u().s[3]++;
        console.log("In the getEmployee service");
        cov_mo5ngg86u().s[4]++;
        return this.httpClient.get("http://localhost:8080/employee/getMyInfo");
      }
      static ctorParameters = (cov_mo5ngg86u().s[5]++, () => {
        cov_mo5ngg86u().f[2]++;
        cov_mo5ngg86u().s[6]++;
        return [{
          type: HttpClient
        }];
      });
    };
    cov_mo5ngg86u().s[7]++;
    employeeService = __decorate([Injectable({
      providedIn: "root"
    })], employeeService);
  }
});

export {
  employeeService,
  init_employee_service
};
//# sourceMappingURL=chunk-VCOKURTV.js.map

import {
  HttpClient,
  init_http
} from "./chunk-XENIYTW7.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-CBUZ25KJ.js";
import {
  __esm
} from "./chunk-6TRXNEZQ.js";

// src/app/service/employee-service.ts
var employeeService;
var init_employee_service = __esm({
  "src/app/service/employee-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    employeeService = class employeeService2 {
      httpClient;
      constructor(httpClient) {
        this.httpClient = httpClient;
        console.log("This is StudentService");
      }
      getMyInfo() {
        console.log("In the getEmployee service");
        return this.httpClient.get("http://localhost:8080/employee/getMyInfo");
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    employeeService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], employeeService);
  }
});

export {
  employeeService,
  init_employee_service
};
//# sourceMappingURL=chunk-TVWRMRPX.js.map

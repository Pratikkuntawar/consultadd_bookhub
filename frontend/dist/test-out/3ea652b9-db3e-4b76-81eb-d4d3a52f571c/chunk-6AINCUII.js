import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-ZGEDRP2A.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-7KP2XXLP.js";
import {
  __esm
} from "./chunk-V6FC2DIM.js";

// src/app/service/hr.ts
var HrService;
var init_hr = __esm({
  "src/app/service/hr.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    HrService = class HrService2 {
      httpClient;
      constructor(httpClient) {
        this.httpClient = httpClient;
        console.log("This is StudentService");
      }
      getNewEmployee() {
        console.log("In the get new emplouee");
        return this.httpClient.get("http://localhost:8080/hr/getEmployeesWithoutDepartment");
      }
      addNewEmployee(emp) {
        console.log("In the get new emplouee");
        return this.httpClient.put("http://localhost:8080/hr/AddEmployeesDepartmentAndRole", emp);
      }
      deleteNewEmployee(emp) {
        console.log("In deletingNewEmployee route");
        return this.httpClient.delete("http://localhost:8080/hr/DeleteEmployeesDepartmentAndRole", {
          body: emp,
          headers: new HttpHeaders({ "Content-Type": "application/json" })
        });
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    HrService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], HrService);
  }
});

export {
  HrService,
  init_hr
};
//# sourceMappingURL=chunk-6AINCUII.js.map

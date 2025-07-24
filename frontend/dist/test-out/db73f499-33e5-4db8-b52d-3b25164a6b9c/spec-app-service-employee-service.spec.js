import {
  employeeService,
  init_employee_service
} from "./chunk-VCOKURTV.js";
import "./chunk-JDLSQL5R.js";
import "./chunk-ILW7OPSS.js";
import {
  TestBed,
  init_testing
} from "./chunk-NMBEJXC6.js";
import "./chunk-TTULUY32.js";

// src/app/service/employee-service.spec.ts
init_testing();
init_employee_service();
describe("StudentService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(employeeService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-service-employee-service.spec.js.map

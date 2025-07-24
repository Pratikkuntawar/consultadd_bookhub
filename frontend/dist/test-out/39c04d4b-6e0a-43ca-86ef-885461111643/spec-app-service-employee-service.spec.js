import {
  employeeService,
  init_employee_service
} from "./chunk-JDATXE54.js";
import "./chunk-IOJ5AGST.js";
import "./chunk-OI3I74CY.js";
import {
  TestBed,
  init_testing
} from "./chunk-KPYZTAT5.js";
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

import {
  employeeService,
  init_employee_service
} from "./chunk-NAJUHTNQ.js";
import "./chunk-5M7HHSWD.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-7KP2XXLP.js";
import "./chunk-V6FC2DIM.js";

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

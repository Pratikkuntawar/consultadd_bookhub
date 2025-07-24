import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-Z5R73O2I.js";
import {
  employeeService,
  init_employee_service
} from "./chunk-S7SAHJ7C.js";
import "./chunk-ZGEDRP2A.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-7KP2XXLP.js";
import "./chunk-V6FC2DIM.js";

// src/app/service/employee-service.spec.ts
init_testing();
init_employee_service();
describe("employeeService", () => {
  let service;
  let httpMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // deprecated module usage
      providers: [employeeService]
    });
    service = TestBed.inject(employeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should call getMyInfo API with GET method", () => {
    const mockResponse = {
      id: 1,
      name: "Chetan Padhen",
      email: "chetan@consultadd.com",
      contactNo: "8010793506",
      department: "HR",
      role: "admin",
      password: "1234"
    };
    service.getMyInfo().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });
    const req = httpMock.expectOne("http://localhost:8080/employee/getMyInfo");
    expect(req.request.method).toBe("GET");
    req.flush(mockResponse);
  });
});
//# sourceMappingURL=spec-app-service-employee-service.spec.js.map

import {
  employeeService,
  init_employee_service
} from "./chunk-ED7SHB54.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing2
} from "./chunk-M36DRUWZ.js";
import "./chunk-WYQ2KV7G.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-QEPMZKHZ.js";
import "./chunk-V6FC2DIM.js";

// src/app/service/employee-service.spec.ts
init_testing();
init_employee_service();
init_testing2();
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

import {
  HttpTestingController,
  provideHttpClientTesting
} from "./chunk-TTYGKCVU.js";
import {
  HrService,
  init_hr
} from "./chunk-6AINCUII.js";
import "./chunk-ZGEDRP2A.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-7KP2XXLP.js";
import "./chunk-V6FC2DIM.js";

// src/app/service/hr.spec.ts
init_testing();
init_hr();
describe("HrService", () => {
  let service;
  let httpMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HrService,
        provideHttpClientTesting()
        // ✅ Modern way
      ]
    });
    service = TestBed.inject(HrService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should call getNewEmployee API with GET method", () => {
    const mockResponse = [
      {
        id: 1,
        name: "Chetan Padhen",
        email: "chetan@consultadd.com",
        contactNo: "8010793506"
      }
    ];
    service.getNewEmployee().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });
    const req = httpMock.expectOne("http://localhost:8080/hr/getEmployeesWithoutDepartment");
    expect(req.request.method).toBe("GET");
    req.flush(mockResponse);
  });
});
//# sourceMappingURL=spec-app-service-hr.spec.js.map

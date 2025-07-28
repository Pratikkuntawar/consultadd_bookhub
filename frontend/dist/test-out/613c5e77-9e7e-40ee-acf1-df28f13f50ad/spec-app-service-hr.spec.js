import {
  HrService,
  init_hr
} from "./chunk-FS2PJNTO.js";
import {
  HttpClientTestingModule,
  HttpTestingController,
  init_testing as init_testing2
} from "./chunk-ICH2TFAM.js";
import "./chunk-FWZLS6EV.js";
import "./chunk-BYESBSSC.js";
import {
  TestBed,
  init_testing
} from "./chunk-NB5YZKJW.js";
import "./chunk-6TRXNEZQ.js";

// src/app/service/hr.spec.ts
init_testing();
init_testing2();
init_hr();
describe("HrService", () => {
  let service;
  let httpMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HrService
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

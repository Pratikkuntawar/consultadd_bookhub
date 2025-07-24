import {
  Auth,
  init_auth
} from "./chunk-OJZ5YOV3.js";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-Z5R73O2I.js";
import "./chunk-ZGEDRP2A.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-7KP2XXLP.js";
import "./chunk-V6FC2DIM.js";

// src/app/service/auth.spec.ts
init_testing();
init_auth();
describe("Auth Service", () => {
  let service;
  let httpMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Auth]
    });
    service = TestBed.inject(Auth);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should call login API with POST method", () => {
    const loginData = { email: "test@example.com", password: "password123" };
    service.login(loginData).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    const req = httpMock.expectOne("http://localhost:8080/auth/employeeLogin");
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(loginData);
    req.flush({ success: true });
  });
  it("should call register API with POST method", () => {
    const employeeData = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "secure123"
    };
    service.register(employeeData).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    const req = httpMock.expectOne("http://localhost:8080/auth/register");
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(employeeData);
    req.flush({ success: true });
  });
});
//# sourceMappingURL=spec-app-service-auth.spec.js.map

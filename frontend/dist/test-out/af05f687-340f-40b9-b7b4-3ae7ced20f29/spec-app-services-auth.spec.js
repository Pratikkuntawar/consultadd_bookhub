import {
  AuthService,
  init_auth
} from "./chunk-TAPDR2HM.js";
import {
  TestBed,
  init_testing
} from "./chunk-55HYZWLT.js";
import "./chunk-V6FC2DIM.js";

// src/app/services/auth.spec.ts
init_testing();
init_auth();
describe("Auth", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-services-auth.spec.js.map

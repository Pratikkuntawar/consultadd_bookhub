import {
  Auth,
  init_auth
} from "./chunk-J2GLM4XY.js";
import "./chunk-5M7HHSWD.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-7KP2XXLP.js";
import "./chunk-V6FC2DIM.js";

// src/app/service/auth.spec.ts
init_testing();
init_auth();
describe("Auth", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-service-auth.spec.js.map

import {
  Auth,
  init_auth
} from "./chunk-ZLCZPCCD.js";
import "./chunk-IOJ5AGST.js";
import "./chunk-OI3I74CY.js";
import {
  TestBed,
  init_testing
} from "./chunk-KPYZTAT5.js";
import "./chunk-TTULUY32.js";

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

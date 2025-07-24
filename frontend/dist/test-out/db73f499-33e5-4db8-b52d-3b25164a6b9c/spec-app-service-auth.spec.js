import {
  Auth,
  init_auth
} from "./chunk-MHIX2FDS.js";
import "./chunk-JDLSQL5R.js";
import "./chunk-ILW7OPSS.js";
import {
  TestBed,
  init_testing
} from "./chunk-NMBEJXC6.js";
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

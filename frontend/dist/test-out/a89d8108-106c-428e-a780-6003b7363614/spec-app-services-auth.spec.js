import {
  AuthService,
  init_auth
} from "./chunk-KQYFARAI.js";
import {
  TestBed,
  init_testing
} from "./chunk-CBUZ25KJ.js";
import "./chunk-6TRXNEZQ.js";

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

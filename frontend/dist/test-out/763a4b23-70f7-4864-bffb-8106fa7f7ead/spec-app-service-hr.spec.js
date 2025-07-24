import {
  HrService,
  init_hr
} from "./chunk-UCDIDGFI.js";
import "./chunk-5M7HHSWD.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-7KP2XXLP.js";
import "./chunk-V6FC2DIM.js";

// src/app/service/hr.spec.ts
init_testing();
init_hr();
describe("Hr", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-service-hr.spec.js.map

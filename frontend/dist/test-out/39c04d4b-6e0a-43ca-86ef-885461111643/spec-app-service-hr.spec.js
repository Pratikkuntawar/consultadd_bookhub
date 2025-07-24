import {
  HrService,
  init_hr
} from "./chunk-RKAV3GDG.js";
import "./chunk-IOJ5AGST.js";
import "./chunk-OI3I74CY.js";
import {
  TestBed,
  init_testing
} from "./chunk-KPYZTAT5.js";
import "./chunk-TTULUY32.js";

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

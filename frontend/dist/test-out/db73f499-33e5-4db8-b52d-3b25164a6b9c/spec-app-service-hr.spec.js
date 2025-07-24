import {
  HrService,
  init_hr
} from "./chunk-SNTJHH7M.js";
import "./chunk-JDLSQL5R.js";
import "./chunk-ILW7OPSS.js";
import {
  TestBed,
  init_testing
} from "./chunk-NMBEJXC6.js";
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

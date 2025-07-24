import {
  HrComponent,
  init_hr_component
} from "./chunk-NMXZQSHF.js";
import "./chunk-EXYQI6JZ.js";
import "./chunk-ZYOBGB3U.js";
import "./chunk-MP4QPDNY.js";
import "./chunk-ARBLDS64.js";
import "./chunk-JDATXE54.js";
import "./chunk-RKAV3GDG.js";
import "./chunk-IOJ5AGST.js";
import "./chunk-OI3I74CY.js";
import {
  TestBed,
  init_testing
} from "./chunk-KPYZTAT5.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/Hr/hr-component/hr-component.spec.ts
var require_hr_component_spec = __commonJS({
  "src/app/Hr/hr-component/hr-component.spec.ts"(exports) {
    init_testing();
    init_hr_component();
    describe("HrComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HrComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(HrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_hr_component_spec();
//# sourceMappingURL=spec-app-Hr-hr-component-hr-component.spec.js.map

import {
  HrComponent,
  init_hr_component
} from "./chunk-ZNYRXUR3.js";
import "./chunk-MSDT2LP6.js";
import "./chunk-V7YBN5IV.js";
import "./chunk-JFTBSIV3.js";
import "./chunk-YC3NWMHE.js";
import "./chunk-S7SAHJ7C.js";
import "./chunk-6AINCUII.js";
import "./chunk-ZGEDRP2A.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-7KP2XXLP.js";
import {
  __async,
  __commonJS
} from "./chunk-V6FC2DIM.js";

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

import {
  HrComponent,
  init_hr_component
} from "./chunk-YDCFQZR7.js";
import "./chunk-6AINCUII.js";
import "./chunk-S7SAHJ7C.js";
import "./chunk-J7FRE26U.js";
import "./chunk-CK67YOLW.js";
import "./chunk-SI6UONNM.js";
import "./chunk-UGP4N6IN.js";
import "./chunk-3L43AUXS.js";
import "./chunk-ZGEDRP2A.js";
import "./chunk-YC3NWMHE.js";
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

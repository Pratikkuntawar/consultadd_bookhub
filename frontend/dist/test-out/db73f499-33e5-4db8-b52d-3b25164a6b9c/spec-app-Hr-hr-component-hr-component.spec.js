import {
  HrComponent,
  init_hr_component
} from "./chunk-PE3VIP4R.js";
import "./chunk-U2S7ZBOR.js";
import "./chunk-QMZDIYWG.js";
import "./chunk-N5A3YSTN.js";
import "./chunk-EXIZREPD.js";
import "./chunk-VCOKURTV.js";
import "./chunk-SNTJHH7M.js";
import "./chunk-JDLSQL5R.js";
import "./chunk-ILW7OPSS.js";
import {
  TestBed,
  init_testing
} from "./chunk-NMBEJXC6.js";
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

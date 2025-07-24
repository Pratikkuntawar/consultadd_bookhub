import {
  Marketing,
  init_marketing
} from "./chunk-6M3LSWE6.js";
import "./chunk-S7SAHJ7C.js";
import "./chunk-VFBHOONL.js";
import "./chunk-SI6UONNM.js";
import "./chunk-UGP4N6IN.js";
import "./chunk-H2HY2AWL.js";
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

// src/app/Marketing/marketing.spec.ts
var require_marketing_spec = __commonJS({
  "src/app/Marketing/marketing.spec.ts"(exports) {
    init_testing();
    init_marketing();
    describe("Marketing", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Marketing]
        }).compileComponents();
        fixture = TestBed.createComponent(Marketing);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_marketing_spec();
//# sourceMappingURL=spec-app-Marketing-marketing.spec.js.map

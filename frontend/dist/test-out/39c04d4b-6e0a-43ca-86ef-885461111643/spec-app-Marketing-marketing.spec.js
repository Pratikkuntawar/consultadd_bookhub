import {
  Marketing,
  init_marketing
} from "./chunk-UUEXCKXL.js";
import {
  TestBed,
  init_testing
} from "./chunk-KPYZTAT5.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

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

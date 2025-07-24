import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-KPYZTAT5.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/home/home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src/app/home/home.html"() {
    home_default = '<h3 class="p-5">Welcome to My website !!!</h3> ';
  }
});

// angular:jit:style:src/app/home/home.css
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src/app/home/home.css"() {
    home_default2 = "/* src/app/home/home.css */\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/home/home.ts
var Home;
var init_home3 = __esm({
  "src/app/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    Home = class Home2 {
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        imports: [],
        template: home_default,
        styles: [home_default2]
      })
    ], Home);
  }
});

// src/app/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-app-home-home.spec.js.map

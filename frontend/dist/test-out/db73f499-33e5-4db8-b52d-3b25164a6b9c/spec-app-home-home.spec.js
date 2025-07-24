import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-NMBEJXC6.js";
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
function cov_tc0vir4wh() {
  var path = "/Users/consultadd/Angular/my-app/src/app/home/home.ts";
  var hash = "23cdc7251eb4459195d27eecaedb8dfb65f68042";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/home/home.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 11
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 14,
          column: 9
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "home.js",
      sourceRoot: "",
      sources: ["home.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAQnC,IAAM,IAAI,GAAV,MAAM,IAAI;CAEhB,CAAA;AAFY,IAAI;IANhB,SAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,OAAO,EAAE,EAAE;QACX,8BAA0B;;KAE3B,CAAC;GACW,IAAI,CAEhB",
      sourcesContent: ["import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-home',\n  imports: [],\n  templateUrl: './home.html',\n  styleUrl: './home.css'\n})\nexport class Home {\n\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "23cdc7251eb4459195d27eecaedb8dfb65f68042"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_tc0vir4wh = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Home;
var init_home3 = __esm({
  "src/app/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    cov_tc0vir4wh();
    cov_tc0vir4wh().s[0]++;
    Home = class Home2 {
    };
    cov_tc0vir4wh().s[1]++;
    Home = __decorate([Component({
      selector: "app-home",
      imports: [],
      template: home_default,
      styles: [home_default2]
    })], Home);
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

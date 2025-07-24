import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NMBEJXC6.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/Marketing/marketing.html
var marketing_default;
var init_marketing = __esm({
  "angular:jit:template:src/app/Marketing/marketing.html"() {
    marketing_default = '\n<div class=" ">\n    <!-- Live campaiang -->   \n   \n    <!-- <button type="button" class="btn btn-primary">Create Campaign</button>\n    <button type="button" class="btn btn-primary">Join Campaign</button> -->\n\n</div>';
  }
});

// angular:jit:style:src/app/Marketing/marketing.css
var marketing_default2;
var init_marketing2 = __esm({
  "angular:jit:style:src/app/Marketing/marketing.css"() {
    marketing_default2 = "/* src/app/Marketing/marketing.css */\n/*# sourceMappingURL=marketing.css.map */\n";
  }
});

// src/app/Marketing/marketing.ts
function cov_1dvbt0n9v0() {
  var path = "/Users/consultadd/Angular/my-app/src/app/Marketing/marketing.ts";
  var hash = "92c4cfa4984cf9a83a620ef05935c56ac0e600c6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/Marketing/marketing.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 16
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
          column: 14
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
      file: "marketing.js",
      sourceRoot: "",
      sources: ["marketing.ts"],
      names: [],
      mappings: ";;;AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,eAAe,CAAC;AAQnC,IAAM,SAAS,GAAf,MAAM,SAAS;CAErB,CAAA;AAFY,SAAS;IANrB,SAAS,CAAC;QACT,QAAQ,EAAE,eAAe;QACzB,OAAO,EAAE,EAAE;QACX,8BAA+B;;KAEhC,CAAC;GACW,SAAS,CAErB",
      sourcesContent: ["import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-marketing',\n  imports: [],\n  templateUrl: './marketing.html',\n  styleUrl: './marketing.css'\n})\nexport class Marketing {\n\n}\n"]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "92c4cfa4984cf9a83a620ef05935c56ac0e600c6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_1dvbt0n9v0 = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var Marketing;
var init_marketing3 = __esm({
  "src/app/Marketing/marketing.ts"() {
    "use strict";
    init_tslib_es6();
    init_marketing();
    init_marketing2();
    init_core();
    cov_1dvbt0n9v0();
    cov_1dvbt0n9v0().s[0]++;
    Marketing = class Marketing2 {
    };
    cov_1dvbt0n9v0().s[1]++;
    Marketing = __decorate([Component({
      selector: "app-marketing",
      imports: [],
      template: marketing_default,
      styles: [marketing_default2]
    })], Marketing);
  }
});

export {
  Marketing,
  init_marketing3 as init_marketing
};
//# sourceMappingURL=chunk-7DVLFAFR.js.map

import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-IWO6S6U2.js";
import {
  __esm
} from "./chunk-V6FC2DIM.js";

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
var Marketing;
var init_marketing3 = __esm({
  "src/app/Marketing/marketing.ts"() {
    "use strict";
    init_tslib_es6();
    init_marketing();
    init_marketing2();
    init_core();
    Marketing = class Marketing2 {
    };
    Marketing = __decorate([
      Component({
        selector: "app-marketing",
        imports: [],
        template: marketing_default,
        styles: [marketing_default2]
      })
    ], Marketing);
  }
});

export {
  Marketing,
  init_marketing3 as init_marketing
};
//# sourceMappingURL=chunk-HLIPSAFF.js.map

import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-KPYZTAT5.js";
import {
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

export {
  Home,
  init_home3 as init_home
};
//# sourceMappingURL=chunk-4AABGO34.js.map

import {
  HttpClient,
  init_http
} from "./chunk-XENIYTW7.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-CBUZ25KJ.js";
import {
  __esm
} from "./chunk-6TRXNEZQ.js";

// src/app/service/auth.ts
var Auth;
var init_auth = __esm({
  "src/app/service/auth.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    Auth = class Auth2 {
      http;
      constructor(http) {
        this.http = http;
      }
      login(data) {
        return this.http.post("http://localhost:8080/auth/employeeLogin", data);
      }
      register(data) {
        console.log(data);
        return this.http.post("http://localhost:8080/auth/register", data);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Auth = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Auth);
  }
});

export {
  Auth,
  init_auth
};
//# sourceMappingURL=chunk-AEXKGVIO.js.map

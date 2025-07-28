import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-IWO6S6U2.js";
import {
  __esm
} from "./chunk-V6FC2DIM.js";

// src/app/services/auth.ts
var AuthService;
var init_auth = __esm({
  "src/app/services/auth.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    AuthService = class AuthService2 {
      storageKey = "isLoggedIn";
      constructor() {
        const storedLoginState = localStorage.getItem(this.storageKey);
        this._isLoggedIn = storedLoginState === "true";
      }
      _isLoggedIn = false;
      // Getter for components to access login status
      get isLoggedIn() {
        return this._isLoggedIn;
      }
      // Call this when user logs in
      login() {
        this._isLoggedIn = true;
        localStorage.setItem(this.storageKey, "true");
      }
      // Call this when user logs out
      logout() {
        this._isLoggedIn = false;
        localStorage.removeItem(this.storageKey);
      }
      static ctorParameters = () => [];
    };
    AuthService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AuthService);
  }
});

export {
  AuthService,
  init_auth
};
//# sourceMappingURL=chunk-JVOPJTP5.js.map

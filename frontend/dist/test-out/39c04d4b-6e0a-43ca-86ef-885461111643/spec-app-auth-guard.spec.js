import {
  Router,
  init_router
} from "./chunk-M7CVYDXO.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-MP4QPDNY.js";
import "./chunk-ARBLDS64.js";
import "./chunk-IOJ5AGST.js";
import "./chunk-OI3I74CY.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-KPYZTAT5.js";
import "./chunk-TTULUY32.js";

// src/app/auth-guard.spec.ts
init_testing();

// src/app/auth-guard.ts
init_router();
init_ngx_cookie_service();
init_core();
var authGuard = (route, state) => {
  const cookieservice = inject(CookieService);
  const router = inject(Router);
  const token = cookieservice.get("token");
  if (!token) {
    router.navigate(["/login"]);
    return false;
  }
  return true;
};

// src/app/auth-guard.spec.ts
describe("authGuard", () => {
  const executeGuard = (...guardParameters) => TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-auth-guard.spec.js.map

import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-J7FRE26U.js";
import {
  Router,
  init_router
} from "./chunk-H2HY2AWL.js";
import "./chunk-3L43AUXS.js";
import "./chunk-ZGEDRP2A.js";
import "./chunk-YC3NWMHE.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-7KP2XXLP.js";
import "./chunk-V6FC2DIM.js";

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

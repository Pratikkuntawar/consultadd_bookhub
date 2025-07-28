import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-KC7N4D2H.js";
import {
  Router,
  init_router
} from "./chunk-RFIBSTQU.js";
import "./chunk-FTANEXIX.js";
import "./chunk-2LDFVMMC.js";
import "./chunk-3SPZE3GT.js";
import "./chunk-FWZLS6EV.js";
import "./chunk-BYESBSSC.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-NB5YZKJW.js";
import "./chunk-6TRXNEZQ.js";

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

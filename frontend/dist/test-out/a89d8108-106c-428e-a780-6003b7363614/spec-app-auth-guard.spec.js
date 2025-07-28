import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-OV4UKPYU.js";
import {
  Router,
  init_router
} from "./chunk-CDNPHVEI.js";
import "./chunk-CZVOOQAL.js";
import "./chunk-7OUSRNRQ.js";
import "./chunk-AMQQJ5OH.js";
import "./chunk-XENIYTW7.js";
import "./chunk-BYESBSSC.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-CBUZ25KJ.js";
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

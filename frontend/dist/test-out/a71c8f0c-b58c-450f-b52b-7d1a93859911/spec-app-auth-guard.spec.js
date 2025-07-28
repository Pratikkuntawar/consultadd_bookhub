import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-HGN532U4.js";
import {
  Router,
  init_router
} from "./chunk-2QXXYQ4J.js";
import "./chunk-W23YPU7Q.js";
import "./chunk-MHLBFUM7.js";
import "./chunk-XFPM5ZNV.js";
import "./chunk-WYQ2KV7G.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-QEPMZKHZ.js";
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

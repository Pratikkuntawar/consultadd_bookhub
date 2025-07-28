import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-OVYBM6XI.js";
import {
  Router,
  init_router
} from "./chunk-V7S46CQ4.js";
import "./chunk-E776C4KC.js";
import "./chunk-SG2WTSSV.js";
import "./chunk-6UKHD5WX.js";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  init_http
} from "./chunk-CSZOH65J.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  catchError,
  init_core,
  init_esm,
  init_testing,
  inject,
  throwError
} from "./chunk-55HYZWLT.js";
import "./chunk-V6FC2DIM.js";

// src/app/auth-interceptor.spec.ts
init_testing();
init_http();

// src/app/auth-interceptor.ts
init_core();
init_router();
init_ngx_cookie_service();
init_esm();
var authInterceptor = (req, next) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const token = cookieService.get("token");
  let cloneReq = req.clone({ withCredentials: true });
  if (token) {
    cloneReq = cloneReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(cloneReq).pipe(catchError((error) => {
    if (error.status === 401 || error.error?.message?.includes("JWT expired") || error.message?.includes("JWT expired")) {
      cookieService.delete("token");
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/auth-interceptor.spec.ts
init_ngx_cookie_service();
describe("authInterceptor", () => {
  let http;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CookieService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: authInterceptor,
          multi: true
        }
      ]
    });
    http = TestBed.inject(HttpClient);
  });
  it("should be created", () => {
    const interceptor = TestBed.inject(HTTP_INTERCEPTORS);
    expect(interceptor).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-auth-interceptor.spec.js.map

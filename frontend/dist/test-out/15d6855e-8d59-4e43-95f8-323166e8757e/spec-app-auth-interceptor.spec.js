import {
  CookieService
} from "./chunk-FSHBWDGQ.js";
import {
  Router,
  init_router
} from "./chunk-FLCWKNVA.js";
import "./chunk-OEDC4MKO.js";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  init_http
} from "./chunk-IAEXST72.js";
import {
  TestBed,
  catchError,
  init_core,
  init_esm,
  init_testing,
  inject,
  throwError
} from "./chunk-JXZAXFWT.js";
import "./chunk-6TRXNEZQ.js";

// src/app/auth-interceptor.spec.ts
init_testing();
init_http();

// src/app/auth-interceptor.ts
init_core();
init_router();
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

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
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  init_http
} from "./chunk-XENIYTW7.js";
import "./chunk-BYESBSSC.js";
import {
  TestBed,
  catchError,
  init_core,
  init_esm,
  init_testing,
  inject,
  throwError
} from "./chunk-CBUZ25KJ.js";
import "./chunk-6TRXNEZQ.js";

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

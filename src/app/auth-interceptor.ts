import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const token = cookieService.get('token');

  let cloneReq = req.clone({ withCredentials: true });
   
  if (token) {
    cloneReq = cloneReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(cloneReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (
        error.status === 401 ||
        error.error?.message?.includes('JWT expired') ||
        error.message?.includes('JWT expired')
      ) {
        cookieService.delete('token');
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};

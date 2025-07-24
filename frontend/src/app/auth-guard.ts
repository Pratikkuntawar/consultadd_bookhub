import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { inject, Inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const cookieservice=inject(CookieService);
  const router=inject(Router)
  const token=cookieservice.get('token');
  if(!token){
    router.navigate(['/login']);
    return false;
  }
  return true;
};

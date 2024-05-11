import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MyCookieService } from '../service/my-cookie.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const cookie = inject(MyCookieService);

  try {
    const isLoggedIn = await authService.isLoggedIn().toPromise();
    if (isLoggedIn) {
      return true;
    } else {
      cookie.delletCookie('token');
      window.location.href = '/login';
      return false;
    }
  } catch (error) {
    cookie.delletCookie('token');
    window.location.href = '/login'; // Rediriger vers la page de connexion en cas d'erreur
    return false;
  }
};


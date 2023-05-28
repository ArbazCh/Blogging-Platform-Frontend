import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const isTokenValid: boolean = authService.isToken()

    if (!isTokenValid) {

      alert("You are not logged in, please log in first")
      router.navigate(['/login'])

      return false
    }

    return true
  }

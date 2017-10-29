import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').map((authState: fromAuth.State) => {
      return authState.authenticated;
    });
  }
}

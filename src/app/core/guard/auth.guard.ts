// reference:
// https://angular.io/api/router/CanActivate#description

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '../common/storage';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,) {

  }

  canActivate(): boolean {
    // check authentication here
    if(!!Storage.getSample()){
      return true;
    }
    else{
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}

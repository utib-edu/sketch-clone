// reference:
// https://angular.io/api/common/http/HttpInterceptor#httpinterceptor

import { catchError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';


@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err) => {
      console.log(request.url, `error: ${err.error?.error?.message}`);
      throw err;
    }));
  }
}

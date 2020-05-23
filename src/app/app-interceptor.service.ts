import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '';
    const headers = req.headers.set('Authorization', `Bearer ${token}`)
      .set('x-request-id', uuid.v4())
    req = req.clone({ headers });
    return next.handle(req);
  }
}

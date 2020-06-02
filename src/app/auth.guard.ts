import { Injectable } from '@angular/core';
import { UrlSegment, Route, CanLoad, Router, CanActivate } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  public authStatus = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthencated()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      this.authStatus.next(true);
    }
    return true;
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthencated()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      this.authStatus.next(true);
    }
    return true;
  }

}

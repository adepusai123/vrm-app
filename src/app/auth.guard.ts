import { Injectable } from '@angular/core';
import { UrlSegment, Route, CanLoad, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { UtilsService } from './shared/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  public authStatus = new BehaviorSubject<any>('');
  constructor(
    private router: Router,
    private utils: UtilsService
  ) { }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.utils.getToken('authToken');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    } else {
      this.authStatus.next(true);
    }
    return true;
  }

}

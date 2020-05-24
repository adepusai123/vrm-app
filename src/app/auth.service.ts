import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilsService } from './shared/services/utils.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authStatus$ = new BehaviorSubject<boolean>(false);
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  isAuthencated() {
    const token = this.utils.getToken('authToken');
    return token ? true : false;
  }

  loginUser(body: any) {
    return this.http.get(`${this.baseUrl}user`);
  }

  loginSuccess() {
    this.authStatus$.next(true);
  }

  signup(body) {
    return this.http.post(`${this.baseUrl}user`, body);
  }

  destroy() {
    this.utils.removeToken('authToken');
    this.authStatus$.unsubscribe();
  }

}


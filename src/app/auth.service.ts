import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  loginUser(body: any) {
    return this.http.get('http://localhost:3100/user');
  }

  updateUserLoginStatus(val) {
    this.loggedIn.next(val);
  }
  logOut() {
    this.loggedIn.next(false);
  }
}

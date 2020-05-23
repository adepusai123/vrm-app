import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  loginUser(body: any) {
    return this.http.get(`${this.baseUrl}user`);
  }

  updateUserLoginStatus(val) {
    this.loggedIn.next(val);
  }
  
  logOut() {
    this.loggedIn.next(false);
  }
}

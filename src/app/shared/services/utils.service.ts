import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  setToken(key, value) {
    localStorage.setItem(key, value);
  }

  getToken(key) {
    return localStorage.getItem(key);
  }

  getUUID() {
    return uuid.v4();
  }
}

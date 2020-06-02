import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  setToken(key, value) {
    localStorage.setItem(key, value);
  }

  getToken(key) {
    return localStorage.getItem(key);
  }

  removeToken(key) {
    return localStorage.removeItem(key);
  }

  getUUID() {
    return uuid.v4();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  closeSnackBar(snacBarRef: any) {
    snacBarRef.dismiss();
  }
}

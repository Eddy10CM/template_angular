import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: IUser) {
    sessionStorage.setItem('user', JSON.stringify(usuario));
  }

  getUser() {
    if (sessionStorage.getItem('user') !== undefined) {
      return JSON.parse(sessionStorage.getItem('user')!);
    } else {
      return null;
    }
  }
}

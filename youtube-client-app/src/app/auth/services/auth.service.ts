import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginData: {
    login: string;
    password: string;
    authToken: string;
  };

  isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor() {}

  login(login: string, password: string): void {
    let data = {
      login: login,
      password: password,
      authToken: '123',
    };

    localStorage.setItem('loginData', JSON.stringify(data));
    this.loginData = data;
    this.isLoggedInSubject.next(true);
  }

  logout() {
    localStorage.removeItem('loginData');
    this.loginData = null;
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('loginData')) {
      this.loginData = JSON.parse(localStorage.getItem('loginData'));
      return true;
    }

    return false;
  }
}

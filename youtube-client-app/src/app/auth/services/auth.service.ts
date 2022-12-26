import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginData = new Subject<{
    login: string;
    password: string;
    authToken: string;
  }>();

  constructor() {}

  login(login: string, password: string): void {
    let data = {
      login: login,
      password: password,
      authToken: '123',
    };

    localStorage.setItem('loginData', JSON.stringify(data));
    this.loginData.next(data);
  }

  logout() {
    localStorage.removeItem('loginData');
    this.loginData.next(null);
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('loginData')) {
      return true;
    }

    return false;
  }
}

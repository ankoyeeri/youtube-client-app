import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const login = this.form.value.login;
    const password = this.form.value.password;

    this.authService.login(login, password);

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

    this.form?.reset();
  }

  isValid(element: AbstractControl<any>) {
    return !element.valid && element.touched;
  }
}

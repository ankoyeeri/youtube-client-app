import { AfterViewChecked, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { forbiddenPasswordValidator } from 'src/app/shared/validators/forbidden-password.directive';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      forbiddenPasswordValidator,
    ]),
  });

  get login() {
    return this.form.get('login');
  }
  get password() {
    return this.form.get('password');
  }

  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedInSubject.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onSubmit() {
    const login = this.form.value.login;
    const password = this.form.value.password;

    this.authService.login(login, password);
    this.router.navigate(['/']);

    this.form?.reset();
  }

  isValid(element: AbstractControl<any>) {
    return !element.valid && element.touched;
  }

  hadnleValidatorError(
    control: AbstractControl<string, string>,
    errorName: string
  ) {
    return control.hasError(errorName) && control.touched;
  }
}

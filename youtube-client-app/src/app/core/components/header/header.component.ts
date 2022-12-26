import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSettingsExpanded = false;
  login: string = '';

  form = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('loginData'))?.login;
    this.authService.loginData.subscribe((data) => {
      this.login = data?.login;
    });
  }

  onSettingsExpand() {
    this.isSettingsExpanded = !this.isSettingsExpanded;
  }

  onSubmit() {
    this.router.navigate(['/results']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

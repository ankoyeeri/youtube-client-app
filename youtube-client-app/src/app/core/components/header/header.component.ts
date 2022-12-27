import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchService } from 'src/app/youtube/services/search.service';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('loginData'))?.login;
    this.authService.loginData.subscribe((data) => {
      this.login = data?.login;
    });

    const searchControl = this.form.get('search');
    searchControl.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((searchLine) => {
        if (searchLine.length > 2) {
          this.searchService.search(searchLine);
        }
      });
  }

  onSettingsExpand() {
    this.isSettingsExpanded = !this.isSettingsExpanded;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

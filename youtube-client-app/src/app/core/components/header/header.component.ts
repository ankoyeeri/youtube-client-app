import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  Subscriber,
  Subscription,
  take,
} from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSettingsExpanded = false;
  login: string = '';

  isLoggedInSubscription = new Subscription();

  form = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.isLoggedInSubscription = this.authService.isLoggedInSubject.subscribe(
      (isLoggedIn) => {
        if (isLoggedIn) {
          this.login = this.authService.loginData.login;
        }
      }
    );

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

  onLogout() {
    this.authService.logout();
    this.login = '';
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.isLoggedInSubscription.unsubscribe();
  }
}

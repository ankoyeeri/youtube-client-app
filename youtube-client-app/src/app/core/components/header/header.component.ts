import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSettingsExpanded = false;

  form = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  onSettingsExpand() {
    this.isSettingsExpanded = !this.isSettingsExpanded;
  }

  onSubmit() {
    this.router.navigate(['/results']);
  }
}

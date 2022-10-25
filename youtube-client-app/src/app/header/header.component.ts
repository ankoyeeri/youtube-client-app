import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSettingsExpanded = false;

  constructor() {}

  ngOnInit(): void {}

  onSettingsExpanded() {
    this.isSettingsExpanded = !this.isSettingsExpanded;
  }
}

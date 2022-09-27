import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() settingsExpandEvent = new EventEmitter<undefined>();

  constructor() {}

  ngOnInit(): void {}

  onExpandSettings() {
    this.settingsExpandEvent.emit();
  }
}

import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() settingsExpandEvent = new EventEmitter<undefined>();
  @ViewChild('form', { static: false }) form: NgForm | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onExpandSettings() {
    this.settingsExpandEvent.emit();
  }

  onSubmit() {
    if ((<string>this.form?.value['search']).length < 1) {
      this.router.navigate(['/results']);
    }

    console.log(this.form);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.maxLength(15),
    ]),
    description: new FormControl(null, [Validators.required]),
    image: new FormControl(null),
    link: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }
}

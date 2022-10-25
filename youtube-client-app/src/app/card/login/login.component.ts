import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { static: false }) form: NgForm | undefined;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form?.value);

    this.form?.reset();
  }
}

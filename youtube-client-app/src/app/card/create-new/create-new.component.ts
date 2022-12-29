import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent {
  private regexpUrl =
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regexpUrl),
    ]),
    link: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get image() {
    return this.form.get('image');
  }

  get link() {
    return this.form.get('link');
  }

  constructor(private searchService: SearchService) {}

  onSubmit() {
    console.log(this.form);

    this.searchService.addSearchItem({
      ...this.form.getRawValue(),
      id: this.searchService.getSearchItems().length.toString(),
      likes: 0,
      comments: 0,
      dislikes: 0,
      views: 0,
    });

    this.form.reset();
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

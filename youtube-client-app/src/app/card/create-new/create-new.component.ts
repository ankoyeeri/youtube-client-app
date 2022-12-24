import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
  });

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
}

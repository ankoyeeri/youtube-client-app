import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
  });

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form);

    this.searchService.addSearchItem({
      name: this.form.value?.title!,
      description: this.form.value.description!,
      image: this.form.value.image!,
      link: this.form.value?.link!,

      likes: 0,
      comments: 0,
      dislikes: 0,
      views: 0,
    });

    this.form.reset();
  }
}

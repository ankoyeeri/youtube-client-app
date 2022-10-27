import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from '../search-item.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-item-details',
  templateUrl: './search-item-details.component.html',
  styleUrls: ['./search-item-details.component.scss'],
})
export class SearchItemDetailsComponent implements OnInit {
  searchItem: SearchItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.searchItem = this.searchService.getSearchItem(id);
  }

  onReturn() {
    this.location.back();
  }
}

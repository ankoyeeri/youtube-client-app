import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchItem } from '../search-item.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchResults: SearchItem[] = [];
  subscription = new Subscription();

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchResults = this.searchService.getSearchItems();

    this.subscription = this.searchService.onSearchItemsChanged.subscribe(
      (searchItems) => {
        this.searchResults = searchItems;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../search-item.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchService],
})
export class SearchResultsComponent implements OnInit {
  searchResults: SearchItem[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchResults = this.searchService.getSearchItems();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchResults: SearchItem[] = [];
  searchByWordOrSentence = '';

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchResults = this.searchService.getSearchItems();

    this.route.queryParams.subscribe((params: Params) => {
      const searchBy = params['searchBy'];
      const isAsc = params['asc'] === 'true';

      switch (searchBy) {
        case 'date':
          this.searchResults = this.searchService.sortByDate(isAsc);
          break;

        case 'views':
          this.searchResults = this.searchService.sortByViews(isAsc);
          break;

        case 'string':
          const value = params['value'];
          this.searchResults = this.searchService.sortBySentence(value);
          break;

        default:
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.searchResults = [];
  }
}

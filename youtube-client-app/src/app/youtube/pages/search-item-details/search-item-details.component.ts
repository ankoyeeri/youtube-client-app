import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-item-details',
  templateUrl: './search-item-details.component.html',
  styleUrls: ['./search-item-details.component.scss'],
})
export class SearchItemDetailsComponent implements OnInit {
  searchItem: SearchItem | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.searchService.getSearchItems().length < 1) {
      this.router.navigate(['/']);
    }

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      try {
        this.searchItem = this.searchService.getSearchItemById(id);
      } catch (error) {
        this.router.navigate(['/error']);
      }
    });
  }

  onReturn() {
    this.location.back();
  }
}
